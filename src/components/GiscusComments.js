import React, {useEffect, useRef} from 'react';
import {useColorMode} from '@docusaurus/theme-common';

export default function GiscusComments() {
  const {colorMode} = useColorMode();
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // 清空容器
    containerRef.current.innerHTML = '';
    
    // 加载 Giscus 脚本
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'Maxkore-Geek/docs-site');
    script.setAttribute('data-repo-id', 'YOUR_REPO_ID');
    script.setAttribute('data-category', 'Announcements');
    script.setAttribute('data-category-id', 'YOUR_CATEGORY_ID');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', colorMode === 'dark' ? 'dark' : 'light');
    script.setAttribute('data-lang', 'zh-CN');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;
    
    containerRef.current.appendChild(script);
  }, [colorMode]);
  
  return <div ref={containerRef} />;
}
