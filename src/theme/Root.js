import React, { useEffect } from 'react';

export default function Root({ children }) {
  useEffect(() => {
    // 定时移除 Giscus 水印
    const removeGiscusWatermark = () => {
      const iframes = document.querySelectorAll('iframe[src*="giscus"]');
      iframes.forEach(iframe => {
        try {
          // 尝试访问 iframe 内部
          const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
          if (iframeDoc) {
            // 移除 iframe 内的水印元素
            const watermarks = iframeDoc.querySelectorAll('.giscus-footer, .powered-by, [class*="footer"], [class*="powered"]');
            watermarks.forEach(el => el.style.display = 'none');
          }
        } catch (e) {
          // 跨域限制，无法访问内部，用外部方法
        }
      });
      
      // 移除 iframe 外部的水印
      const externalWatermarks = document.querySelectorAll(
        '.giscus iframe + div, iframe[src*="giscus"] + div, .giscus-footer, .giscus__footer'
      );
      externalWatermarks.forEach(el => el.style.display = 'none');
    };
    
    // 立即执行一次
    removeGiscusWatermark();
    
    // 监听 DOM 变化，Giscus 是动态加载的
    const observer = new MutationObserver(() => {
      removeGiscusWatermark();
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }, []);
  
  return children;
}
