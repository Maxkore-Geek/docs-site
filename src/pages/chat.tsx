import React from 'react';
import Layout from '@theme/Layout';
import Comments from '@site/src/components/Comments';

export default function Chat() {
  return (
    <Layout title="聊天室" description="自由聊天室">
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '2rem',
        backgroundColor: 'var(--ifm-background-surface-color)',
        borderRadius: '12px',
        boxShadow: '0 1px 2px var(--ifm-color-emphasis-200)'
      }}>
        <h1 style={{ marginBottom: '0.5rem' }}>💬 极客聊天室</h1>
        <p style={{ marginBottom: '2rem', color: 'var(--ifm-color-emphasis-700)' }}>
          欢迎自由交流！所有消息都会保存在 GitHub Discussions 中。
        </p>
        <div style={{ 
          backgroundColor: 'var(--ifm-background-surface-color)',
          padding: '1rem',
          borderRadius: '8px'
        }}>
          <Comments mapping="title" />
        </div>
      </div>
    </Layout>
  );
}
