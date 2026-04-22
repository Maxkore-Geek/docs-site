import React, { useEffect } from 'react';
import SearchBar from '@theme-original/SearchBar';

export default function SearchBarWrapper(props) {
  useEffect(() => {
    // 修改搜索框的 placeholder
    const interval = setInterval(() => {
      const input = document.querySelector('.DocSearch-Input');
      if (input && input.placeholder === 'Search') {
        input.placeholder = '搜索';
        clearInterval(interval);
      }
    }, 100);
    
    // 修改搜索按钮的文字
    const buttonInterval = setInterval(() => {
      const placeholder = document.querySelector('.DocSearch-Button-Placeholder');
      if (placeholder && placeholder.textContent === 'Search') {
        placeholder.textContent = '搜索';
        clearInterval(buttonInterval);
      }
    }, 100);
    
    return () => {
      clearInterval(interval);
      clearInterval(buttonInterval);
    };
  }, []);

  return <SearchBar {...props} />;
}