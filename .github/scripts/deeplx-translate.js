const fs = require('fs');
const path = require('path');
const axios = require('axios');

const SOURCE_DIRS = ['docs', 'blog'];
const TARGET_CONFIGS = [
  { sourceLang: 'ZH', targetLang: 'EN', targetDir: 'i18n/en/docusaurus-plugin-content-docs/current' },
  { sourceLang: 'EN', targetLang: 'ZH', targetDir: 'i18n/zh/docusaurus-plugin-content-docs/current' }
];

// DeepLX API 端点
const DEEPLX_URL = 'https://api.deeplx.org/translate';

// 检测语言（简单的中文检测）
async function detectLanguage(text) {
  const chineseRegex = /[\u4e00-\u9fa5]/;
  return chineseRegex.test(text) ? 'ZH' : 'EN';
}

async function translateText(text, sourceLang, targetLang) {
  if (!text || text.trim() === '') return text;
  if (sourceLang === targetLang) return text;
  
  try {
    const response = await axios.post(DEEPLX_URL, {
      text: text,
      source_lang: sourceLang,
      target_lang: targetLang
    });
    return response.data.data;
  } catch (error) {
    console.error('翻译失败:', error.message);
    return text;
  }
}

async function translateFile(filePath, sourceDir, targetConfig) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // 解析 Front Matter
  const frontMatterMatch = content.match(/^---\n([\s\S]*?)\n---\n/);
  let frontMatter = {};
  let body = content;
  
  if (frontMatterMatch) {
    const yamlContent = frontMatterMatch[1];
    body = content.slice(frontMatterMatch[0].length);
    
    // 解析 YAML
    yamlContent.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length) {
        frontMatter[key.trim()] = valueParts.join(':').trim();
      }
    });
  }
  
  // 检测源语言
  const sourceLang = await detectLanguage(body);
  const targetLang = targetConfig.targetLang;
  
  // 如果源语言就是目标语言，跳过
  if (sourceLang === targetLang) {
    console.log(`⏭️ 跳过 ${path.basename(filePath)}: 已经是${targetLang === 'ZH' ? '中文' : '英文'}`);
    return;
  }
  
  console.log(`🔄 翻译 ${path.basename(filePath)}: ${sourceLang} → ${targetLang}`);
  
  // 翻译标题
  if (frontMatter.title) {
    frontMatter.title = await translateText(frontMatter.title, sourceLang, targetLang);
  }
  
  // 翻译正文（分块，避免超长）
  const maxChunkSize = 1500;
  let translatedBody = '';
  for (let i = 0; i < body.length; i += maxChunkSize) {
    const chunk = body.slice(i, i + maxChunkSize);
    translatedBody += await translateText(chunk, sourceLang, targetLang);
  }
  
  // 重建文件
  let newContent = '';
  if (frontMatterMatch) {
    const newFrontMatter = Object.entries(frontMatter)
      .map(([k, v]) => `${k}: ${v}`)
      .join('\n');
    newContent = `---\n${newFrontMatter}\n---\n${translatedBody}`;
  } else {
    newContent = translatedBody;
  }
  
  // 写入目标文件
  const relativePath = path.relative(sourceDir, filePath);
  const targetPath = path.join(process.cwd(), targetConfig.targetDir, relativePath);
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, newContent, 'utf-8');
  console.log(`✅ 翻译完成: ${relativePath} → ${targetLang === 'ZH' ? '中文' : '英文'}`);
}

async function main() {
  for (const dir of SOURCE_DIRS) {
    const sourceDir = path.join(process.cwd(), dir);
    
    if (!fs.existsSync(sourceDir)) continue;
    
    const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.md'));
    
    for (const file of files) {
      const sourcePath = path.join(sourceDir, file);
      
      // 对每个目标语言进行翻译
      for (const targetConfig of TARGET_CONFIGS) {
        const targetPath = path.join(process.cwd(), targetConfig.targetDir, file);
        
        // 如果目标文件已存在，跳过
        if (fs.existsSync(targetPath)) {
          continue;
        }
        
        await translateFile(sourcePath, sourceDir, targetConfig);
      }
    }
  }
  console.log('🎉 所有文件翻译完成！');
}

main().catch(console.error);
