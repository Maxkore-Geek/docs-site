import React from 'react';
import { useLocation } from '@docusaurus/router';

export default function EditThisPage() {
  const location = useLocation();
  const { pathname } = location;
  
  // 特殊页面不显示编辑按钮
  const shouldShowButton = () => {
    if (pathname === '/' || pathname === '/search' || pathname === '/docs' || pathname === '/blog') {
      return false;
    }
    return true;
  };

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
      const docPath = pathname.replace('/docs/', '');
      return `docs/${docPath}.md`;
    }
    
    // 具体博客（处理日期格式）
    if (pathname.startsWith('/blog/')) {
      // 从 URL 提取文件名，需要根据实际文件名调整
      // 假设博客文件是 YYYY-MM-DD-标题.md 格式
      const blogPath = pathname.replace('/blog/', '');
      return `blog/${blogPath}.md`;
    }
    
    return '';
  };

  if (!shouldShowButton()) return null;

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
      ✏️ 编辑此页
    </a>
  );
}
