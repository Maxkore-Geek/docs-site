import React from 'react';
import {useLocation} from '@docusaurus/router';
import {useDoc} from '@docusaurus/theme-common/internal';

function EditFooter() {
  const location = useLocation();
  const isDocs = location.pathname.startsWith('/docs');
  const isBlog = location.pathname.startsWith('/blog');
  
  if (!isDocs && !isBlog) return null;
  
  let editUrl = '';
  if (isDocs) {
    // 文档编辑链接
    const docPath = location.pathname.replace('/docs/', '');
    editUrl = `https://github.com/Maxkore-Geek/docs-site/edit/main/docs/${docPath}.md`;
  } else if (isBlog) {
    // 博客编辑链接
    const blogPath = location.pathname.replace('/blog/', '');
    editUrl = `https://github.com/Maxkore-Geek/docs-site/edit/main/blog/${blogPath}.md`;
  }
  
  return (
    <footer className="theme-doc-footer docusaurus-mt-lg">
      <div className="row margin-top--sm">
        <div className="col">
          <a
            href={editUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="theme-edit-this-page"
            style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem'}}
          >
            <svg fill="currentColor" height="20" width="20" viewBox="0 0 40 40">
              <path d="m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"/>
            </svg>
            编辑此页面
          </a>
        </div>
        <div className="col lastUpdated_OHCJ">
          <span className="theme-last-updated">
            上次更新于 <b><time dateTime={new Date().toISOString()}>{new Date().toLocaleDateString('zh-CN')}</time></b>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return <EditFooter />;
}
