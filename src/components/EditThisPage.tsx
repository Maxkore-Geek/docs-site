import React from 'react';
import { useLocation } from '@docusaurus/router';

export default function EditThisPage() {
  const location = useLocation();
  const { pathname } = location;
  
  // 根据当前路径生成对应的GitHub文件路径
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
    
    // 具体文档
    if (pathname.startsWith('/docs/')) {
      // 移除 /docs/ 前缀，加上 .md
      const docPath = pathname.replace('/docs/', '');
      return `docs/${docPath}.md`;
    }
    
    // 具体博客
    if (pathname.startsWith('/blog/')) {
      // 移除 /blog/ 前缀，加上 .md
      const blogPath = pathname.replace('/blog/', '');
      return `blog/${blogPath}.md`;
    }
    
    // 默认返回当前路径（去掉开头的斜杠）
    return pathname.substring(1) + '.tsx';
  };

  const githubPath = getGitHubPath();
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
        marginBottom: '1rem',
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
      ✏️ 在GitHub上编辑此页
    </a>
  );
}
