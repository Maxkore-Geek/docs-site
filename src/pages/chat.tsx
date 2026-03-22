import React from 'react';
import Layout from '@theme/Layout';
import Comments from '@site/src/components/Comments';

export default function Chat() {
  return (
    <Layout title="聊天室" description="极客聊天室">
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '2rem',
      }}>
        <div style={{
          background: 'var(--ifm-background-surface-color)',
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          border: '1px solid var(--ifm-color-emphasis-200)'
        }}>
          <h1 style={{
            fontSize: '2rem',
            marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, #660874 0%, #b84acf 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            💬 极客聊天室
          </h1>
          <p style={{ color: 'var(--ifm-color-emphasis-600)', marginBottom: '2rem' }}>
            欢迎进入极客聊天室,所有消息都会保存在 GitHub Discussions 中.
          </p>
          <Comments mapping="title" />
        </div>
      </div>
    </Layout>
  );
}
