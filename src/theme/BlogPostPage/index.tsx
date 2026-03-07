import React from 'react';
import BlogPostPage from '@theme-original/BlogPostPage';
import Link from '@docusaurus/Link';

export default function BlogPostPageWrapper(props) {
  // 安全获取数据
  const {content} = props;
  if (!content || !content.metadata) {
    return <BlogPostPage {...props} />;
  }
  
  const {title, date} = content.metadata;
  let year = '', month = '';
  
  if (date) {
    const dateObj = new Date(date);
    year = dateObj.getFullYear();
    month = String(dateObj.getMonth() + 1).padStart(2, '0');
  }

  return (
    <>
      <nav style={{
        marginBottom: '2rem',
        padding: '0.5rem 1rem',
        background: 'var(--ifm-background-surface-color)',
        borderRadius: '8px',
        border: '1px solid var(--ifm-color-emphasis-200)',
      }}>
        <ol style={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: 0,
          padding: 0,
          listStyle: 'none',
        }}>
          <li style={{marginRight: '0.5rem'}}><Link to="/">首页</Link></li>
          <li style={{marginRight: '0.5rem'}}>/</li>
          <li style={{marginRight: '0.5rem'}}><Link to="/blog">博客</Link></li>
          {date && (
            <>
              <li style={{marginRight: '0.5rem'}}>/</li>
              <li style={{marginRight: '0.5rem'}}><Link to={`/blog/archive`}>归档</Link></li>
            </>
          )}
          <li style={{marginRight: '0.5rem'}}>/</li>
          <li style={{color: 'var(--ifm-color-primary)'}}>{title || ''}</li>
        </ol>
      </nav>
      <BlogPostPage {...props} />
    </>
  );
}