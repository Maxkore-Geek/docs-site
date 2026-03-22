const fs = require('fs');
const path = require('path');
const axios = require('axios');

const SOURCE_DIRS = ['docs', 'blog'];
const TARGET_DIRS = {
  docs: 'i18n/en/docusaurus-plugin-content-docs/current',
  blog: 'i18n/en/docusaurus-plugin-content-blog'
};

// DeepLX API 端点（使用公共实例）
const DEEPLX_URL = 'https://deeplx.owo.net/translate';

async function translateText(text) {
  if (!text || text.trim() === '') return text;
  
  try {
    const response = await axios.post(DEEPLX_URL, {
      text: text,
      source_lang: 'ZH',
      target_lang: 'EN'
    });
    return response.data.data;
  } catch (error) {
    console.error('翻译失败:', error.message);
    return text;
  }
}

async function translateFile(filePath, sourceDir, targetDir) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // 解析 Front Matter
  const frontMatterMatch = content.match(/^---\n([\s\S]*?)\n---\n/);
  let frontMatter = {};
  let body = content;
  
  if (frontMatterMatch) {
    const yamlContent = frontMatterMatch[1];
    body = content.slice(frontMatterMatch[0].length);
    
    // 简单解析 YAML
    yamlContent.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length) {
        frontMatter[key.trim()] = valueParts.join(':').trim();
      }
    });
  }
  
  // 翻译标题
  if (frontMatter.title) {
    frontMatter.title = await translateText(frontMatter.title);
  }
  
  // 翻译正文（分块，避免超长）
  const maxChunkSize = 1500;
  let translatedBody = '';
  for (let i = 0; i < body.length; i += maxChunkSize) {
    const chunk = body.slice(i, i + maxChunkSize);
    translatedBody += await translateText(chunk);
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
  const targetPath = path.join(targetDir, relativePath);
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, newContent, 'utf-8');
  console.log(`✅ 翻译完成: ${relativePath}`);
}

async function main() {
  for (const dir of SOURCE_DIRS) {
    const sourceDir = path.join(process.cwd(), dir);
    const targetDir = path.join(process.cwd(), TARGET_DIRS[dir]);
    
    if (!fs.existsSync(sourceDir)) continue;
    
    const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.md'));
    
    for (const file of files) {
      const sourcePath = path.join(sourceDir, file);
      const targetPath = path.join(targetDir, file);
      
      // 如果英文文件已存在，跳过
      if (fs.existsSync(targetPath)) {
        console.log(`⏭️ 跳过已存在的: ${file}`);
        continue;
      }
      
      console.log(`🔄 正在翻译: ${file}`);
      await translateFile(sourcePath, sourceDir, targetDir);
    }
  }
  console.log('🎉 所有文件翻译完成！');
}

main().catch(console.error);
