import React from 'react';
import Footer from '@theme-original/Footer';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useBlogPost} from '@docusaurus/theme-common/internal';

// 修改此页组件
function EditThisPage() {
  const location = useLocation();
  const { pathname } = location;
  const {siteConfig} = useDocusaurusContext();
  
  // 尝试获取博客文章信息（如果在博客文章页面）
  let blogPost = null;
  try {
    blogPost = useBlogPost(); // 这个hook只能在博客文章页面工作
  } catch (e) {
    // 不在博客文章页面，忽略
  }

  const getGitHubPath = () => {
    // 首页
    if (pathname === '/' || pathname === '') {
      return 'src/pages/index.tsx';
    }
    
    // 搜索页
    if (pathname.startsWith('/search')) {
      return 'src/pages/search.tsx';
    }
    
    // 文档列表
    if (pathname === '/docs') {
      return 'docs/index.md';
    }
    
    // 博客列表
    if (pathname === '/blog') {
      return 'blog/index.md';
    }
    
    // ✅ 修复：具体文档页面
    if (pathname.startsWith('/docs/')) {
      // 移除 /docs/ 前缀，然后添加 .md
      const docPath = pathname.replace('/docs/', '');
      // 处理可能的嵌套路径（如 /docs/tutorial-basics/create-page）
      return `docs/${docPath}.md`;
    }
    
    // ✅ 修复：具体博客文章页面
    if (pathname.startsWith('/blog/')) {
      // 博客文章URL格式：/blog/2026/03/01/文章名
      // 或者 /blog/文章名
      const blogPath = pathname.replace('/blog/', '');
      
      // 如果博客文章信息可用，使用它的源文件路径
      if (blogPost?.metadata?.source) {
        // source 通常是类似 "@site/blog/2026-03-01-文章名.md"
        const source = blogPost.metadata.source;
        // 提取 blog/ 后面的部分
        const match = source.match(/blog\/(.+)$/);
        if (match) {
          return `blog/${match[1]}`;
        }
      }
      
      // 后备方案：如果无法获取源文件信息，尝试根据URL猜测
      // 如果URL包含日期格式（YYYY/MM/DD）
      if (blogPath.includes('/')) {
        // 这种格式的URL很难直接映射到文件名，返回一个提示
        console.log('无法确定博客文章源文件，请在GitHub手动查找');
        return ''; // 不显示按钮
      }
      
      return `blog/${blogPath}.md`;
    }
    
    return '';
  };

  const githubPath = getGitHubPath();
  if (!githubPath) return null;

  const githubUrl = `https://github.com/Maxkore-Geek/docs-site/edit/main/${githubPath}`;

  return (
    <a 
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#660874',
        color: 'white',
        borderRadius: '30px',
        textDecoration: 'none',
        fontSize: '0.9rem',
        transition: 'all 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#b84acf';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#660874';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      ✏️ 编辑此页
    </a>
  );
}

export default function FooterWrapper(props) {
  return (
    <>
      {/* 三个按钮合并在一起 */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        alignItems: 'center',
        padding: '1.5rem 0 1rem 0',
        backgroundColor: 'var(--ifm-footer-background-color)',
      }}>
        <EditThisPage />
        
        <Link
          href="https://github.com/Maxkore-Geek/docs-site/new/main/docs"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            borderRadius: '30px',
            backgroundColor: 'var(--ifm-color-primary)',
            color: 'white',
            textDecoration: 'none',
            fontSize: '0.9rem',
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 8px rgba(102, 8, 116, 0.25)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--ifm-color-primary-light)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--ifm-color-primary)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <span>✏️</span>
          <span>新建文章</span>
        </Link>
        
        <Link
          href="https://github.com/Maxkore-Geek/docs-site/new/main/blog"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            borderRadius: '30px',
            backgroundColor: 'var(--ifm-color-emphasis-200)',
            color: 'var(--ifm-font-color-base)',
            textDecoration: 'none',
            fontSize: '0.9rem',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--ifm-color-emphasis-300)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--ifm-color-emphasis-200)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <span>📝</span>
          <span>新建博客</span>
        </Link>
      </div>
      
      {/* 原始页脚放在下面 */}
      <Footer {...props} />
    </>
  );
}
