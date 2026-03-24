import React, { useEffect } from 'react';
import SearchBar from '@theme-original/SearchBar';

export default function SearchBarWrapper(props) {
  useEffect(() => {
    const interval = setInterval(() => {
      const input = document.querySelector('.DocSearch-Input');
      if (input && input.placeholder === 'Search') {
        input.placeholder = '搜索';
        clearInterval(interval);
      }
    }, 100);
  }, []);

  return <SearchBar {...props} />;
}
