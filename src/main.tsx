import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ConfigProvider } from 'antd'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
  theme={{
    token: {
      colorPrimary: 'hsl(0, 100%, 100%)',
    },
    components: {
      Input: {
        colorText: 'hsl(0, 100%, 100%)',
        colorBgContainer: 'hsl(209, 23%, 22%)',
        colorBorder: 'transparent',
        colorTextPlaceholder: 'hsl(0, 100%, 100%); ',
        borderRadius: 8,
        colorPrimaryHover: 'hsl(0, 100%, 100%)',
        colorIcon: 'hsl(0, 100%, 100%)',
      },
      Button: {
        colorBgContainer: 'hsl(209, 23%, 22%)',
        colorText: 'hsl(0, 100%, 100%)',
        colorPrimaryHover: 'hsl(0, 100%, 100%)',
        borderRadius: 8,
        colorBorder: 'transparent',
        
      },
    },
  }}
>
      <App />
    </ConfigProvider>
  </StrictMode>,
)
