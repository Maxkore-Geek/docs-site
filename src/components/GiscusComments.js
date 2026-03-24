import React, { useEffect, useRef } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

// 隐藏水印的自定义 CSS（增强版）
const hideWatermarkStyle = `
  /* 隐藏 Giscus 所有水印和页脚 */
  .giscus-footer,
  .giscus .giscus-footer,
  .powered-by,
  [class*="giscus"] [class*="footer"],
  [class*="giscus"] [class*="powered"],
  iframe[src*="giscus"] + div,
  .giscus-widget .giscus-footer,
  .giscus > div:last-child,
  .giscus > div:has(.powered-by),
  .giscus-frame + div,
  .giscus-frame ~ div {
    display: none !important;
    visibility: hidden !important;
    height: 0 !important;
    overflow: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }
  
  /* 确保评论区容器正常显示 */
  .giscus,
  .giscus-frame,
  .giscus-widget {
    width: 100% !important;
    min-height: 200px !important;
  }
  
  /* 隐藏 iframe 加载完成后的额外元素 */
  iframe[src*="giscus"] {
    display: block !important;
    visibility: visible !important;
  }
`;

export default function GiscusComments() {
  const { colorMode } = useColorMode();
  const containerRef = useRef<HTMLDivElement>(null);
  const styleRef = useRef<HTMLStyleElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // 清空容器
    containerRef.current.innerHTML = '';
    
    // 注入隐藏水印样式（确保只注入一次）
    if (!styleRef.current) {
      const style = document.createElement('style');
      style.textContent = hideWatermarkStyle;
      document.head.appendChild(style);
      styleRef.current = style;
    }
    
    // 加载 Giscus 脚本
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'Maxkore-Geek/docs-site');
    script.setAttribute('data-repo-id', 'R_kgDORbCQcg');
    script.setAttribute('data-category', 'Announcements');
    script.setAttribute('data-category-id', 'DIC_kwDORbCQcs4C4hEd');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', colorMode === 'dark' ? 'dark_dimmed' : 'light');
    script.setAttribute('data-lang', 'zh-CN');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;
    
    // 加载完成后持续清除水印
    script.onload = () => {
      // 立即执行一次
      const removeWatermarks = () => {
        const watermarks = document.querySelectorAll(
          '.giscus-footer, .powered-by, iframe[src*="giscus"] + div, [class*="powered"]'
        );
        watermarks.forEach(el => {
          if (el instanceof HTMLElement) {
            el.style.display = 'none';
            el.style.visibility = 'hidden';
            el.style.height = '0';
            el.style.overflow = 'hidden';
          }
        });
      };
      
      removeWatermarks();
      
      // 定时检查（因为 Giscus 可能会动态添加元素）
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(removeWatermarks, 1000);
      
      // 60秒后停止检查
      setTimeout(() => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }, 60000);
    };
    
    containerRef.current.appendChild(script);
    
    // 清理函数
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [colorMode]);
  
  // 组件卸载时清理样式（可选，保留样式不影响其他页面）
  useEffect(() => {
    return () => {
      if (styleRef.current && document.head.contains(styleRef.current)) {
        // 不删除样式，因为可能其他页面也需要
        // styleRef.current.remove();
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '100%', 
        minHeight: '200px',
        marginTop: '2rem'
      }} 
    />
  );
}
