import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Maxkore的文档站"
      description="代码之外，思考之上">
      
      {/* 紫色头部区域 */}
      <header style={{ 
        backgroundColor: '#660874',
        padding: '4rem 2rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Maxkore的文档站
        </h1>
        <p style={{ fontSize: '1.5rem', opacity: 0.9 }}>
          代码之外，思考之上
        </p>
      </header>

      {/* 两个卡片居中区域 */}
      <main style={{ 
        padding: '4rem 2rem', 
        maxWidth: '1000px', 
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        gap: '3rem',
        flexWrap: 'wrap'
      }}>
        
        {/* 技术博客卡片 - 点击进入 /blog */}
        <Link 
          to="/blog" 
          style={{ 
            textDecoration: 'none',
            color: 'inherit',
            flex: '1 1 300px',
            maxWidth: '350px'
          }}>
          <div style={{ 
            padding: '2.5rem',
            border: '2px solid #660874',
            borderRadius: '12px',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            backgroundColor: 'var(--ifm-background-color)',
            boxShadow: '0 4px 6px rgba(102, 8, 116, 0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 8px 12px rgba(102, 8, 116, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(102, 8, 116, 0.1)';
          }}>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem', color: '#660874' }}>
              📝 技术博客
            </h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--ifm-font-color-base)' }}>
              分享编程心得与技术思考
            </p>
          </div>
        </Link>

        {/* 文档教程卡片 - 点击进入 /docs */}
        <Link 
          to="/docs" 
          style={{ 
            textDecoration: 'none',
            color: 'inherit',
            flex: '1 1 300px',
            maxWidth: '350px'
          }}>
          <div style={{ 
            padding: '2.5rem',
            border: '2px solid #660874',
            borderRadius: '12px',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            backgroundColor: 'var(--ifm-background-color)',
            boxShadow: '0 4px 6px rgba(102, 8, 116, 0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 8px 12px rgba(102, 8, 116, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(102, 8, 116, 0.1)';
          }}>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem', color: '#660874' }}>
              📚 文档教程
            </h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--ifm-font-color-base)' }}>
              系统性的学习指南
            </p>
          </div>
        </Link>

      </main>
    </Layout>
  );
}
