import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title="Maxkore的文档站"
      description="代码之外，思考之上">
      
      {/* 紫色头部区域 */}
      <header style={{ 
        backgroundColor: '#660874',
        padding: '5rem 2rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          marginBottom: '1rem',
          fontWeight: 'bold'
        }}>
          {siteConfig.title}
        </h1>
        <p style={{ 
          fontSize: '1.8rem', 
          opacity: 0.9,
          marginBottom: '2rem'
        }}>
          {siteConfig.tagline}
        </p>
      </header>

      {/* 两个大卡片 - 居中平行 */}
      <main style={{ 
        padding: '4rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          flexWrap: 'wrap'
        }}>
          
          {/* 技术博客卡片 */}
          <Link 
            to="/blog"
            style={{ textDecoration: 'none', width: '350px' }}
          >
            <div 
              className="home-card"
              style={{ 
                padding: '3rem 2rem',
                backgroundColor: 'var(--home-card-bg)',
                border: '2px solid var(--ifm-color-primary)',
                borderRadius: '16px',
                boxShadow: '0 8px 20px var(--home-card-shadow)',
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 30px var(--home-card-shadow-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 20px var(--home-card-shadow)';
              }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>📝</div>
              <h2 style={{ 
                fontSize: '2.2rem', 
                color: 'var(--ifm-color-primary)',
                marginBottom: '1rem',
                fontWeight: 'bold'
              }}>
                技术博客
              </h2>
              <p style={{ 
                fontSize: '1.2rem', 
                color: 'var(--home-card-text)',
                lineHeight: '1.6'
              }}>
                分享编程心得与技术思考
              </p>
            </div>
          </Link>

          {/* 文档教程卡片 */}
          <Link 
            to="/docs"
            style={{ textDecoration: 'none', width: '350px' }}
          >
            <div 
              className="home-card"
              style={{ 
                padding: '3rem 2rem',
                backgroundColor: 'var(--home-card-bg)',
                border: '2px solid var(--ifm-color-primary)',
                borderRadius: '16px',
                boxShadow: '0 8px 20px var(--home-card-shadow)',
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 30px var(--home-card-shadow-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 20px var(--home-card-shadow)';
              }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>📚</div>
              <h2 style={{ 
                fontSize: '2.2rem', 
                color: 'var(--ifm-color-primary)',
                marginBottom: '1rem',
                fontWeight: 'bold'
              }}>
                文档教程
              </h2>
              <p style={{ 
                fontSize: '1.2rem', 
                color: 'var(--home-card-text)',
                lineHeight: '1.6'
              }}>
                系统性的学习指南
              </p>
            </div>
          </Link>
        </div>

        {/* 底部留白 */}
        <div style={{ height: '4rem' }} />
      </main>
    </Layout>
  );
}
