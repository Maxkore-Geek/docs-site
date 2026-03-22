import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';

// GitHub 仓库信息
const REPO_OWNER = 'Maxkore-Geek';
const REPO_NAME = 'docs-site';

export default function Issues() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newIssueTitle, setNewIssueTitle] = useState('');
  const [newIssueBody, setNewIssueBody] = useState('');
  const [showForm, setShowForm] = useState(false);

  // 加载 Issues
  useEffect(() => {
    fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues?state=open&per_page=20`)
      .then(res => res.json())
      .then(data => {
        setIssues(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('加载失败:', err);
        setLoading(false);
      });
  }, []);

  // 创建新 Issue
  const createIssue = async () => {
    const token = localStorage.getItem('github_token');
    if (!token) {
      alert('请先登录 GitHub');
      window.location.href = `https://github.com/login/oauth/authorize?client_id=Ov23li4gRzmIrirpWMZR`;
      return;
    }

    const response = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: newIssueTitle,
        body: newIssueBody
      })
    });

    if (response.ok) {
      setNewIssueTitle('');
      setNewIssueBody('');
      setShowForm(false);
      window.location.reload();
    } else {
      alert('创建失败，请确保已登录 GitHub');
    }
  };

  // GitHub OAuth 登录
  const loginWithGitHub = () => {
    const clientId = 'Ov23li4gRzmIrirpWMZR';
    const redirectUri = encodeURIComponent(window.location.href);
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=public_repo&redirect_uri=${redirectUri}`;
  };

  return (
    <Layout title="Issue 讨论区" description="GitHub Issues 讨论区">
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h1>📋 Issue 讨论区</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#660874',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            {showForm ? '取消' : '+ 新建 Issue'}
          </button>
        </div>

        {showForm && (
          <div style={{
            background: '#f6f8fa',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '2rem',
            border: '1px solid #e1e4e8'
          }}>
            <h3>新建 Issue</h3>
            <input
              type="text"
              placeholder="标题"
              value={newIssueTitle}
              onChange={(e) => setNewIssueTitle(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem',
                marginBottom: '1rem',
                border: '1px solid #e1e4e8',
                borderRadius: '4px'
              }}
            />
            <textarea
              placeholder="内容（支持 Markdown）"
              value={newIssueBody}
              onChange={(e) => setNewIssueBody(e.target.value)}
              rows={5}
              style={{
                width: '100%',
                padding: '0.5rem',
                marginBottom: '1rem',
                border: '1px solid #e1e4e8',
                borderRadius: '4px'
              }}
            />
            <button
              onClick={createIssue}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#2cbe4e',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              提交 Issue
            </button>
            <p style={{ fontSize: '0.8rem', color: '#6a737d', marginTop: '0.5rem' }}>
              需要 <a href="#" onClick={loginWithGitHub}>登录 GitHub</a> 才能创建 Issue
            </p>
          </div>
        )}

        {loading ? (
          <p>加载中...</p>
        ) : (
          <div>
            {issues.length === 0 ? (
              <p>暂无 Issue，来创建第一个吧！</p>
            ) : (
              issues.map(issue => (
                <div key={issue.id} style={{
                  border: '1px solid #e1e4e8',
                  borderRadius: '6px',
                  padding: '1rem',
                  marginBottom: '1rem',
                  background: 'var(--ifm-background-surface-color)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span style={{
                      padding: '0.25rem 0.5rem',
                      backgroundColor: '#e1e4e8',
                      borderRadius: '20px',
                      fontSize: '0.75rem'
                    }}>#{issue.number}</span>
                    <a href={issue.html_url} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                      {issue.title}
                    </a>
                    <span style={{
                      padding: '0.25rem 0.5rem',
                      backgroundColor: issue.state === 'open' ? '#2cbe4e' : '#cb2431',
                      color: 'white',
                      borderRadius: '20px',
                      fontSize: '0.7rem'
                    }}>
                      {issue.state}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#6a737d' }}>
                    由 {issue.user.login} 创建于 {new Date(issue.created_at).toLocaleDateString()}
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}