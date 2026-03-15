import React, { useEffect } from 'react';
import SearchBar from '@theme-original/SearchBar';

export default function SearchBarWrapper(props) {
  useEffect(() => {
    // 注入自定义样式到 head
    const style = document.createElement('style');
    style.textContent = `
      /* 强制覆盖 Algolia 搜索框样式 */
      .DocSearch-Container {
        background: rgba(0, 0, 0, 0.5) !important;
        backdrop-filter: blur(4px) !important;
      }
      
      .DocSearch-Modal {
        position: fixed !important;
        left: 50% !important;
        top: 1rem !important;
        transform: translateX(-50%) !important;
        width: calc(100% - 2rem) !important;
        max-width: 640px !important;
        background: var(--ifm-background-surface-color) !important;
        border-radius: 12px !important;
        border: 1px solid var(--ifm-color-emphasis-200) !important;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
        overflow: hidden !important;
      }
      
      .DocSearch-SearchBar {
        border-bottom: none !important;
      }
      
      .DocSearch-Form {
        display: flex !important;
        align-items: center !important;
        gap: 0.5rem !important;
        padding: 0.75rem 1rem !important;
      }
      
      .DocSearch-Search-Icon {
        width: 18px !important;
        height: 18px !important;
        color: var(--ifm-color-emphasis-500) !important;
      }
      
      .DocSearch-Input {
        font-size: 1rem !important;
      }
      
      .DocSearch-Commands li:first-child {
        display: none !important;
      }
      
      .DocSearch-Commands li:last-child .DocSearch-Commands-Key {
        background: var(--ifm-color-emphasis-200) !important;
        border: 1px solid var(--ifm-color-emphasis-300) !important;
        border-radius: 6px !important;
        padding: 0.2rem 0.5rem !important;
      }
      
      .DocSearch-Commands li:last-child span {
        display: none !important;
      }
      
      .DocSearch-Footer,
      .DocSearch-Logo {
        display: none !important;
      }
      
      [data-theme='dark'] .DocSearch-Modal {
        background: #1e1e2e !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <SearchBar {...props} />;
}
