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
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '2rem 1.5rem',
      }}>
        {/* 头部区域 */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <h1 style={{
              fontSize: '2.2rem',
              marginBottom: '0.25rem',
              background: 'linear-gradient(135deg, #660874 0%, #b84acf 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              📋 Issue 讨论区
            </h1>
            <p style={{ color: 'var(--ifm-color-emphasis-600)', margin: 0 }}>
              参与讨论、反馈问题、提出建议
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            style={{
              padding: '0.6rem 1.2rem',
              backgroundColor: showForm ? '#6c757d' : '#660874',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: '500',
              transition: 'all 0.2s ease',
              boxShadow: showForm ? 'none' : '0 2px 8px rgba(102, 8, 116, 0.3)'
            }}
            onMouseEnter={(e) => {
              if (!showForm) {
                e.currentTarget.style.backgroundColor = '#b84acf';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseLeave={(e) => {
              if (!showForm) {
                e.currentTarget.style.backgroundColor = '#660874';
                e.currentTarget.style.transform = 'translateY(0)';
              }
            }}
          >
            {showForm ? '✖ 取消' : '+ 新建 Issue'}
          </button>
        </div>

        {/* 新建 Issue 表单 */}
        {showForm && (
          <div style={{
            background: 'var(--ifm-background-surface-color)',
            padding: '1.5rem',
            borderRadius: '16px',
            marginBottom: '2rem',
            border: '1px solid var(--ifm-color-emphasis-200)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{ marginBottom: '1rem', color: '#660874' }}>✨ 新建 Issue</h3>
            <input
              type="text"
              placeholder="标题"
              value={newIssueTitle}
              onChange={(e) => setNewIssueTitle(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                marginBottom: '1rem',
                border: '1px solid var(--ifm-color-emphasis-200)',
                borderRadius: '8px',
                backgroundColor: 'var(--ifm-background-surface-color)',
                color: 'var(--ifm-font-color-base)',
                fontSize: '0.95rem'
              }}
            />
            <textarea
              placeholder="内容（支持 Markdown）"
              value={newIssueBody}
              onChange={(e) => setNewIssueBody(e.target.value)}
              rows={5}
              style={{
                width: '100%',
                padding: '0.75rem',
                marginBottom: '1rem',
                border: '1px solid var(--ifm-color-emphasis-200)',
                borderRadius: '8px',
                backgroundColor: 'var(--ifm-background-surface-color)',
                color: 'var(--ifm-font-color-base)',
                fontSize: '0.95rem',
                fontFamily: 'monospace'
              }}
            />
            <button
              onClick={createIssue}
              style={{
                padding: '0.6rem 1.2rem',
                backgroundColor: '#2cbe4e',
                color: 'white',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#3dd068';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2cbe4e';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              提交 Issue
            </button>
            <p style={{ fontSize: '0.8rem', color: 'var(--ifm-color-emphasis-500)', marginTop: '1rem' }}>
              需要 <a href="#" onClick={loginWithGitHub} style={{ color: '#660874' }}>登录 GitHub</a> 才能创建 Issue
            </p>
          </div>
        )}

        {/* Issue 列表 */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              border: '3px solid var(--ifm-color-emphasis-200)',
              borderTopColor: '#660874',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 1rem'
            }} />
            <p>加载讨论中...</p>
            <style>{`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        ) : (
          <div>
            {issues.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '3rem',
                background: 'var(--ifm-background-surface-color)',
                borderRadius: '16px',
                border: '1px solid var(--ifm-color-emphasis-200)'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🎉</div>
                <p style={{ fontSize: '1.1rem', margin: 0 }}>暂无 Issue，来创建第一个吧！</p>
              </div>
            ) : (
              issues.map(issue => (
                <div key={issue.id} style={{
                  border: '1px solid var(--ifm-color-emphasis-200)',
                  borderRadius: '12px',
                  padding: '1rem 1.25rem',
                  marginBottom: '1rem',
                  background: 'var(--ifm-background-surface-color)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 8, 116, 0.15)';
                  e.currentTarget.style.borderColor = '#660874';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--ifm-color-emphasis-200)';
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{
                      padding: '0.2rem 0.6rem',
                      background: 'var(--ifm-color-emphasis-100)',
                      borderRadius: '20px',
                      fontSize: '0.7rem',
                      fontWeight: '500'
                    }}>
                      #{issue.number}
                    </span>
                    <a href={issue.html_url} target="_blank" rel="noopener noreferrer" style={{
                      fontWeight: '600',
                      fontSize: '1rem',
                      color: '#660874',
                      textDecoration: 'none',
                      flex: 1
                    }}>
                      {issue.title}
                    </a>
                    <span style={{
                      padding: '0.2rem 0.6rem',
                      backgroundColor: issue.state === 'open' ? '#2cbe4e20' : '#cb243120',
                      color: issue.state === 'open' ? '#2cbe4e' : '#cb2431',
                      borderRadius: '20px',
                      fontSize: '0.7rem',
                      fontWeight: '500'
                    }}>
                      {issue.state === 'open' ? '开放中' : '已关闭'}
                    </span>
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--ifm-color-emphasis-500)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span>👤 {issue.user.login}</span>
                    <span>📅 {new Date(issue.created_at).toLocaleDateString('zh-CN')}</span>
                    {issue.comments > 0 && (
                      <span>💬 {issue.comments} 条评论</span>
                    )}
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
