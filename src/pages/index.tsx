import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Maxkore的文档站"
      description="代码之外，思考之上">
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

      <main style={{ padding: '3rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          <div style={{ padding: '1.5rem', border: '1px solid #eaeaea', borderRadius: '8px' }}>
            <h3>📝 技术博客</h3>
            <p>分享编程心得与技术思考</p>
          </div>
          <div style={{ padding: '1.5rem', border: '1px solid #eaeaea', borderRadius: '8px' }}>
            <h3>📚 文档教程</h3>
            <p>系统性的学习指南</p>
          </div>
          <div style={{ padding: '1.5rem', border: '1px solid #eaeaea', borderRadius: '8px' }}>
            <h3>💡 思考碎片</h3>
            <p>代码之外的灵感记录</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
