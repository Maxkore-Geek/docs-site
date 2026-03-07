import React, { useEffect } from 'react';
import docsearch from '@docsearch/js';
import '@docsearch/css';

export default function SearchButton() {
  useEffect(() => {
    // 初始化 DocSearch
    docsearch({
      container: '#docsearch',
      appId: 'ZHOZ1S2L94',
      indexName: 'docs-site.bbroot.com',
      apiKey: '8eade69f4d82f0dacc4c2a61f139e939',
      placeholder: '搜索文档...',
      searchParameters: {
        hitsPerPage: 8,
        facetFilters: ['language:zh-Hans'],
      },
      transformItems(items) {
        return items.map(item => ({
          ...item,
          content: item.content?.substring(0, 150) + '...',
        }));
      },
    });
  }, []);

  return (
    <div id="docsearch" style={{
      display: 'inline-block',
      marginRight: '1rem',
    }} />
  );
}