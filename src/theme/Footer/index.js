import React from 'react';
import Footer from '@theme-original/Footer';
import Link from '@docusaurus/Link';

export default function FooterWrapper(props) {
  return (
    <>
      {/* 只保留两个新建按钮 */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        alignItems: 'center',
        padding: '1.5rem 0 1rem 0',
        backgroundColor: 'var(--ifm-footer-background-color)',
      }}>
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
          <span>新建文档</span>
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
