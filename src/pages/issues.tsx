import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';

const REPO_OWNER = 'Maxkore-Geek';
const REPO_NAME = 'docs-site';
const GITHUB_CLIENT_ID = 'Ov23li4gRzmIrirpWMZR';

export default function Issues() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newIssueTitle, setNewIssueTitle] = useState('');
  const [newIssueBody, setNewIssueBody] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [token, setToken] = useState(null);

  // 从 URL 获取 GitHub OAuth token
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (code) {
      // 这里需要后端交换 token，但为了简化，直接存 localStorage
      localStorage.setItem('github_token', code);
      window.history.replaceState({}, document.title, '/issues');
      setToken(code);
    } else {
      setToken(localStorage.getItem('github_token'));
    }
  }, []);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues?state=open&per_page=20`)
      .then(res => res.json())
      .then(data => {
        setIssues(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const loginWithGitHub = () => {
    const redirectUri = encodeURIComponent(window.location.href);
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=public_repo&redirect_uri=${redirectUri}`;
  };

  const createIssue = async () => {
    if (!token) {
      alert('请先登录 GitHub');
      loginWithGitHub();
      return;
    }
    if (!newIssueTitle.trim()) {
      alert('请输入标题');
      return;
    }

    const response = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues`, {
      method: 'POST',
      headers: {
        'Authorization': `token ${token}`,
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
      const err = await response.json();
      alert('创建失败: ' + (err.message || '请确保已登录 GitHub'));
    }
  };

  return (
    <Layout title="Issue 讨论区" description="GitHub Issues 讨论区">
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1>📋 Issue 讨论区</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            style={{
              padding: '0.5rem 1rem',
              background: showForm ? '#6c757d' : '#660874',
              color: 'white',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer'
            }}
          >
            {showForm ? '取消' : '+ 新建 Issue'}
          </button>
        </div>

        {showForm && (
          <div style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', marginBottom: '2rem' }}>
            <h3>新建 Issue</h3>
            <input
              type="text"
              placeholder="标题"
              value={newIssueTitle}
              onChange={(e) => setNewIssueTitle(e.target.value)}
              style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <textarea
              placeholder="内容（支持 Markdown）"
              value={newIssueBody}
              onChange={(e) => setNewIssueBody(e.target.value)}
              rows={5}
              style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <button
              onClick={createIssue}
              style={{ padding: '0.5rem 1rem', background: '#2cbe4e', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              提交 Issue
            </button>
            {!token && (
              <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
                需要 <a href="#" onClick={loginWithGitHub}>登录 GitHub</a> 才能创建 Issue
              </p>
            )}
          </div>
        )}

        {loading ? (
          <p>加载中...</p>
        ) : issues.length === 0 ? (
          <p>暂无 Issue，来创建第一个吧！</p>
        ) : (
          issues.map(issue => (
            <div key={issue.id} style={{ border: '1px solid #e1e4e8', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ background: '#e9ecef', padding: '0.2rem 0.5rem', borderRadius: '12px', fontSize: '0.7rem' }}>#{issue.number}</span>
                <a href={issue.html_url} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#660874' }}>
                  {issue.title}
                </a>
                <span style={{ fontSize: '0.7rem', color: issue.state === 'open' ? '#2cbe4e' : '#cb2431' }}>
                  {issue.state === 'open' ? '开放中' : '已关闭'}
                </span>
              </div>
              <div style={{ fontSize: '0.75rem', color: '#6a737d' }}>
                👤 {issue.user.login} · 📅 {new Date(issue.created_at).toLocaleDateString()}
              </div>
            </div>
          ))
        )}
      </div>
    </Layout>
  );
}
