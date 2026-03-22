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
        background: 'var(--ifm-background-surface-color)',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ marginBottom: '0.5rem' }}>💬 极客聊天室</h1>
        <p style={{ color: 'var(--ifm-color-emphasis-600)', marginBottom: '2rem' }}>
          欢迎进入极客聊天室,所有消息都会保存在 GitHub Discussions 中.
        </p>
        <Comments mapping="title" />
      </div>
    </Layout>
  );
}
