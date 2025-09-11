import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'
import App from './App'
import './styles/global.css'

// Create a wrapper component that provides the styled-components theme
const ThemedApp = () => {
  const { theme } = useTheme()
  
  return (
    <StyledThemeProvider theme={theme}>
      <App />
    </StyledThemeProvider>
  )
}

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  </React.StrictMode>
)
