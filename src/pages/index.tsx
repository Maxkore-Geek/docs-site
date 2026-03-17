import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';  // ✅ 新增

export default function Home() {
  return (
    <Layout title="Maxkore的极客空间" description="代码之外，思考之上">
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
          <Translate>Maxkore的极客空间</Translate>  {/* ✅ 改 */}
        </h1>
        <p style={{ 
          fontSize: '1.8rem', 
          opacity: 0.9,
          marginBottom: '2rem'
        }}>
          <Translate>代码之外，思考之上</Translate>  {/* ✅ 改 */}
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
              style={{ 
                padding: '3rem 2rem',
                backgroundColor: 'white',
                border: '2px solid #660874',
                borderRadius: '16px',
                boxShadow: '0 8px 20px rgba(102, 8, 116, 0.2)',
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(102, 8, 116, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(102, 8, 116, 0.2)';
              }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>📝</div>
              <h2 style={{ 
                fontSize: '2.2rem', 
                color: '#660874',
                marginBottom: '1rem',
                fontWeight: 'bold'
              }}>
                <Translate>技术博客</Translate>  {/* ✅ 改 */}
              </h2>
              <p style={{ 
                fontSize: '1.2rem', 
                color: '#333',
                lineHeight: '1.6'
              }}>
                <Translate>分享编程心得与技术思考</Translate>  {/* ✅ 改 */}
              </p>
            </div>
          </Link>

          {/* 文档教程卡片 */}
          <Link 
            to="/docs"
            style={{ textDecoration: 'none', width: '350px' }}
          >
            <div 
              style={{ 
                padding: '3rem 2rem',
                backgroundColor: 'white',
                border: '2px solid #660874',
                borderRadius: '16px',
                boxShadow: '0 8px 20px rgba(102, 8, 116, 0.2)',
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(102, 8, 116, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(102, 8, 116, 0.2)';
              }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>📚</div>
              <h2 style={{ 
                fontSize: '2.2rem', 
                color: '#660874',
                marginBottom: '1rem',
                fontWeight: 'bold'
              }}>
                <Translate>文档教程</Translate>  {/* ✅ 改 */}
              </h2>
              <p style={{ 
                fontSize: '1.2rem', 
                color: '#333',
                lineHeight: '1.6'
              }}>
                <Translate>系统性的学习指南</Translate>  {/* ✅ 改 */}
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
