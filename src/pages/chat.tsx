import React from 'react';
import Layout from '@theme/Layout';
import Comments from '@site/src/components/Comments';

export default function Chat() {
  return (
    <Layout title="聊天室" description="极客聊天室">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <h1>💬 极客聊天室</h1>
        <p>欢迎进入极客聊天室,所有消息都会保存在 GitHub Discussions 中.</p>
        <Comments mapping="title" />
      </div>
    </Layout>
  );
}