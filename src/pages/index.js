import React, {useState, useEffect} from 'react';
import Layout from '@theme/Layout';

// GitHub Issues 配置
const GITHUB_REPO = 'Maxkore-Geek/docs-site';
const GITHUB_OWNER = 'Maxkore-Geek';
const ISSUES_API = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/issues`;

function IssueCard({issue}) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div style={{
      background: 'var(--ifm-card-background-color)',
      borderRadius: '12px',
      padding: '1.25rem',
      marginBottom: '1rem',
      border: '1px solid var(--ifm-color-emphasis-200)',
      transition: 'all 0.2s',
      cursor: 'pointer'
    }} onClick={() => setIsExpanded(!isExpanded)}>
      <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem'}}>
        <span style={{
          background: issue.state === 'open' ? '#2da44e' : '#8250df',
          color: 'white',
          padding: '2px 8px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: 600
        }}>{issue.state === 'open' ? '开放' : '已关闭'}</span>
        <span style={{fontSize: '12px', color: 'var(--ifm-color-emphasis-600)'}}>
          #{issue.number}
        </span>
        <span style={{fontSize: '12px', color: 'var(--ifm-color-emphasis-600)'}}>
          创建于 {new Date(issue.created_at).toLocaleDateString('zh-CN')}
        </span>
      </div>
      
      <h3 style={{margin: '0.5rem 0', fontSize: '1.1rem'}}>
        <a href={issue.html_url} target="_blank" rel="noopener noreferrer" 
           style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}
           onClick={(e) => e.stopPropagation()}>
          {issue.title}
        </a>
      </h3>
      
      {issue.labels.length > 0 && (
        <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '0.5rem 0'}}>
          {issue.labels.map(label => (
            <span key={label.id} style={{
              background: `#${label.color}`,
              color: '#1f2328',
              padding: '2px 8px',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: 500
            }}>
              {label.name}
            </span>
          ))}
        </div>
      )}
      
      <div style={{
        color: 'var(--ifm-color-emphasis-700)',
        fontSize: '14px',
        marginTop: '0.5rem',
        lineHeight: 1.5
      }}>
        {issue.body ? issue.body.slice(0, 200) + (issue.body.length > 200 ? '...' : '') : '无描述'}
      </div>
      
      {isExpanded && issue.body && (
        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          background: 'var(--ifm-color-emphasis-100)',
          borderRadius: '8px',
          fontSize: '14px',
          lineHeight: 1.6
        }}>
          {issue.body}
        </div>
      )}
      
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginTop: '0.75rem',
        fontSize: '13px',
        color: 'var(--ifm-color-emphasis-600)'
      }}>
        <span>💬 {issue.comments} 条评论</span>
        <span>👤 {issue.user.login}</span>
      </div>
    </div>
  );
}

export default function IssuesPage() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('created'); // 'created' or 'updated'
  const [state, setState] = useState('open');
  
  useEffect(() => {
    fetch(`${ISSUES_API}?state=${state}&sort=${sort}&per_page=20`)
      .then(res => res.json())
      .then(data => {
        setIssues(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('加载失败:', err);
        setLoading(false);
      });
  }, [state, sort]);
  
  return (
    <Layout title="Issue 讨论区" description="GitHub Issues 讨论区">
      <div style={{maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem'}}>
        {/* 头部 */}
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem'}}>
          <h1 style={{margin: 0}}>📋 Issue 讨论区</h1>
          <div style={{display: 'flex', gap: '0.75rem'}}>
            <button
              onClick={() => setState('open')}
              style={{
                padding: '0.5rem 1.25rem',
                background: state === 'open' ? '#2da44e' : 'transparent',
                color: state === 'open' ? 'white' : 'var(--ifm-color-emphasis-700)',
                border: state === 'open' ? 'none' : '1px solid var(--ifm-color-emphasis-300)',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: 500
              }}
            >
              开放中
            </button>
            <button
              onClick={() => setState('closed')}
              style={{
                padding: '0.5rem 1.25rem',
                background: state === 'closed' ? '#8250df' : 'transparent',
                color: state === 'closed' ? 'white' : 'var(--ifm-color-emphasis-700)',
                border: state === 'closed' ? 'none' : '1px solid var(--ifm-color-emphasis-300)',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: 500
              }}
            >
              已关闭
            </button>
            <a
              href={`https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/issues/new`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.5rem 1.25rem',
                background: '#660874',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                textDecoration: 'none',
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              ➕ 新建 Issue
            </a>
          </div>
        </div>
        
        {/* 排序按钮 */}
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          marginBottom: '1.5rem',
          borderBottom: '1px solid var(--ifm-color-emphasis-200)',
          paddingBottom: '0.75rem'
        }}>
          <button
            onClick={() => setSort('created')}
            className={`BtnGroup-item ${sort === 'created' ? 'BtnGroup-item--selected' : ''}`}
            style={{
              padding: '0.4rem 1rem',
              background: sort === 'created' ? 'var(--ifm-color-primary)' : 'transparent',
              color: sort === 'created' ? 'white' : 'var(--ifm-color-emphasis-700)',
              border: '1px solid var(--ifm-color-emphasis-200)',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            最早
          </button>
          <button
            onClick={() => setSort('updated')}
            className={`BtnGroup-item ${sort === 'updated' ? 'BtnGroup-item--selected' : ''}`}
            style={{
              padding: '0.4rem 1rem',
              background: sort === 'updated' ? 'var(--ifm-color-primary)' : 'transparent',
              color: sort === 'updated' ? 'white' : 'var(--ifm-color-emphasis-700)',
              border: '1px solid var(--ifm-color-emphasis-200)',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            最新
          </button>
        </div>
        
        {/* Issue 列表 */}
        {loading ? (
          <div style={{textAlign: 'center', padding: '3rem'}}>
            <div style={{
              width: '40px',
              height: '40px',
              border: '3px solid var(--ifm-color-emphasis-200)',
              borderTopColor: '#660874',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 1rem'
            }}></div>
            <p>正在加载讨论区...</p>
            <style>{`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        ) : issues.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '3rem',
            background: 'var(--ifm-color-emphasis-100)',
            borderRadius: '12px'
          }}>
            <p style={{fontSize: '1.1rem', marginBottom: '1rem'}}>📭 暂无 Issue</p>
            <a
              href={`https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/issues/new`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.5rem 1.25rem',
                background: '#660874',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                textDecoration: 'none'
              }}
            >
              创建第一个 Issue
            </a>
          </div>
        ) : (
          issues.map(issue => <IssueCard key={issue.id} issue={issue} />)
        )}
      </div>
    </Layout>
  );
}
