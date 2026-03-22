import React from 'react';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import Link from '@docusaurus/Link';

export default function DocItemFooter() {
  const { metadata } = useDoc();
  const { editUrl, lastUpdatedAt, lastUpdatedBy, formattedLastUpdatedAt } = metadata;

  if (!editUrl && !lastUpdatedAt) {
    return null;
  }

  return (
    <footer className="theme-doc-footer docusaurus-mt-lg">
      <div className="row margin-top--sm theme-doc-footer-edit-meta-row">
        {editUrl && (
          <div className="col">
            <Link
              href={editUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-edit-this-page"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
            >
              <svg
                fill="currentColor"
                height="16"
                width="16"
                viewBox="0 0 40 40"
                className="iconEdit_IMw_"
                aria-hidden="true"
                style={{ verticalAlign: 'middle' }}
              >
                <g>
                  <path d="m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z" />
                </g>
              </svg>
              编辑此页面
            </Link>
          </div>
        )}
        {lastUpdatedAt && (
          <div className="col lastUpdated_OHCJ">
            <span className="theme-last-updated">
              上次更新 <b>于</b>
              <b>
                <time dateTime={new Date(lastUpdatedAt * 1000).toISOString()}>
                  {formattedLastUpdatedAt}
                </time>
              </b>{' '}
              由 <b>{lastUpdatedBy || '未知'}</b>
            </span>
          </div>
        )}
      </div>
    </footer>
  );
}
