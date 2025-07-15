import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ConfigProvider, theme } from 'antd'

export const lightTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: '#1890ff',
    colorBgBase: '#ffffff',
    colorTextBase: '#000000',
    borderRadius: 8,
  },
};

export const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: '#ff7f50',
    colorBgBase: '#141414',
    colorTextBase: '#e0e0e0',
    borderRadius: 8,
  },
};

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
      },


    },

    

  }}
>
      <App />
    </ConfigProvider>
  </StrictMode>,
)
