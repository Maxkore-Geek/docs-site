import React, { useState } from 'react';
import Layout from '@theme/Layout';

export default function DashboardPage({data}) {
  const [title, setTitle] = useState('');
  const [platform, setPlatform] = useState('geek');
  const [content, setContent] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fileName = `${new Date().toISOString().split('T')[0]}-${title}.md`;
    const fileContent = `---\ntitle: ${title}\ndate: ${new Date().toISOString()}\n---\n\n${content}`;
    
    alert(`文章将在 ${platform} 板块创建: ${fileName}\n\n实际使用时需要集成GitHub API`);
  };

  return (
    <Layout title="控制台" description="多平台内容发布">
      <main style={{padding: '2rem', maxWidth: '800px', margin: '0 auto'}}>
        <h1>📊 内容发布控制台</h1>
        
        <div style={{marginBottom: '2rem', background: '#f5f5f5', padding: '1rem', borderRadius: '8px'}}>
          <h2>📝 新建文章</h2>
          <form onSubmit={handleSubmit}>
            <div style={{marginBottom: '1rem'}}>
              <label>标题：</label>
              <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{width: '100%', padding: '0.5rem'}}
                required
              />
            </div>
            
            <div style={{marginBottom: '1rem'}}>
              <label>发布到：</label>
              <select 
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                style={{width: '100%', padding: '0.5rem'}}
              >
                <option value="geek">🚀 极客空间</option>
                <option value="help">❓ 帮助中心</option>
                <option value="wiki">📚 维基知识库</option>
              </select>
            </div>
            
            <div style={{marginBottom: '1rem'}}>
              <label>内容：</label>
              <textarea 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="10"
                style={{width: '100%', padding: '0.5rem', fontFamily: 'monospace'}}
                required
              />
            </div>
            
            <button 
              type="submit"
              style={{
                background: '#660874',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              发布文章
            </button>
          </form>
        </div>
        
        <div>
          <h2>📋 近期草稿</h2>
          {data?.recentPosts?.length > 0 ? (
            <ul>
              {data.recentPosts.map(post => (
                <li key={post.path}>
                  <a href={post.path}>{post.title}</a> ({post.platform})
                </li>
              ))}
            </ul>
          ) : (
            <p>暂无草稿</p>
          )}
        </div>
      </main>
    </Layout>
  );
}