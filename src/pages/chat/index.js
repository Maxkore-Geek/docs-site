import React, {useState, useEffect} from 'react';
import Layout from '@theme/Layout';

// 简单的聊天室（可以用 GitHub Discussions 或自定义）
export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);
  
  // 从 GitHub Discussions 或自定义 API 获取消息
  useEffect(() => {
    // 模拟加载
    setTimeout(() => {
      setMessages([
        {id: 1, user: 'Admin', content: '欢迎来到聊天室！', time: new Date(), avatar: '👤'},
        {id: 2, user: 'User', content: '大家好！', time: new Date(), avatar: '👤'}
      ]);
      setLoading(false);
    }, 1000);
  }, []);
  
  const sendMessage = () => {
    if (!input.trim()) return;
    // 发送消息逻辑
    setMessages([...messages, {
      id: Date.now(),
      user: '你',
      content: input,
      time: new Date(),
      avatar: '👤'
    }]);
    setInput('');
  };
  
  return (
    <Layout title="聊天室" description="实时聊天讨论">
      <div style={{maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem'}}>
        <div style={{
          background: 'var(--ifm-card-background-color)',
          borderRadius: '16px',
          border: '1px solid var(--ifm-color-emphasis-200)',
          overflow: 'hidden',
          height: '70vh',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* 聊天室头部 */}
          <div style={{
            padding: '1rem 1.5rem',
            borderBottom: '1px solid var(--ifm-color-emphasis-200)',
            background: 'var(--ifm-color-emphasis-100)'
          }}>
            <h3 style={{margin: 0}}>💬 实时聊天室</h3>
            <p style={{margin: '0.25rem 0 0', fontSize: '12px', color: 'var(--ifm-color-emphasis-600)'}}>
              GitHub Discussions 驱动
            </p>
          </div>
          
          {/* 消息列表 */}
          <div style={{flex: 1, overflowY: 'auto', padding: '1rem'}}>
            {loading ? (
              <div style={{textAlign: 'center', padding: '2rem'}}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  border: '2px solid var(--ifm-color-emphasis-200)',
                  borderTopColor: '#660874',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                  margin: '0 auto'
                }}></div>
                <p style={{marginTop: '1rem'}}>正在加载聊天记录...</p>
              </div>
            ) : (
              messages.map(msg => (
                <div key={msg.id} style={{
                  display: 'flex',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  background: msg.user === '你' ? 'var(--ifm-color-emphasis-100)' : 'transparent'
                }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#660874',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem'
                  }}>
                    {msg.avatar}
                  </div>
                  <div style={{flex: 1}}>
                    <div style={{display: 'flex', gap: '0.75rem', alignItems: 'baseline', flexWrap: 'wrap'}}>
                      <strong>{msg.user}</strong>
                      <span style={{fontSize: '11px', color: 'var(--ifm-color-emphasis-500)'}}>
                        {msg.time.toLocaleTimeString()}
                      </span>
                    </div>
                    <p style={{margin: '0.25rem 0 0', lineHeight: 1.4}}>{msg.content}</p>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {/* 输入框 */}
          <div style={{
            padding: '1rem',
            borderTop: '1px solid var(--ifm-color-emphasis-200)',
            display: 'flex',
            gap: '0.75rem'
          }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="输入消息..."
              style={{
                flex: 1,
                padding: '0.75rem 1rem',
                borderRadius: '24px',
                border: '1px solid var(--ifm-color-emphasis-300)',
                background: 'var(--ifm-background-color)',
                color: 'var(--ifm-font-color-base)',
                outline: 'none'
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                padding: '0.75rem 1.5rem',
                background: '#660874',
                color: 'white',
                border: 'none',
                borderRadius: '24px',
                cursor: 'pointer',
                fontWeight: 500
              }}
            >
              发送
            </button>
          </div>
        </div>
        
        <p style={{
          textAlign: 'center',
          fontSize: '12px',
          color: 'var(--ifm-color-emphasis-500)',
          marginTop: '1rem'
        }}>
          💡 所有消息将同步到 GitHub Discussions
        </p>
      </div>
    </Layout>
  );
}
