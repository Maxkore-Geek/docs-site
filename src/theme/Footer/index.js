import React from 'react';
import Footer from '@theme-original/Footer';
import Link from '@docusaurus/Link';

export default function FooterWrapper(props) {
  return (
    <>
      <Footer {...props} />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        padding: '1.5rem 0 2.5rem 0',
        backgroundColor: 'var(--ifm-footer-background-color)',
        borderTop: '1px solid var(--ifm-color-emphasis-200)',
      }}>
        <Link
          href="https://github.com/Maxkore-Geek/docs-site/new/main/docs"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.6rem 1.2rem',
            borderRadius: '30px',
            backgroundColor: 'var(--ifm-color-primary)',
            color: 'white',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: '500',
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 8px rgba(102, 8, 116, 0.25)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--ifm-color-primary-light)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 8, 116, 0.35)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--ifm-color-primary)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(102, 8, 116, 0.25)';
          }}
        >
          <span>✏️</span>
          <span>在 GitHub 写文章</span>
        </Link>
        
        <Link
          href="https://github.com/Maxkore-Geek/docs-site/new/main/blog"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.6rem 1.2rem',
            borderRadius: '30px',
            backgroundColor: 'var(--ifm-color-emphasis-200)',
            color: 'var(--ifm-font-color-base)',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: '500',
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
          <span>写博客</span>
        </Link>
      </div>
    </>
  );
}