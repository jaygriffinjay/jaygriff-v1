import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider } from './contexts/ThemeContext'
import { useTheme } from './contexts/ThemeContext'
import { getTheme } from './styles/theme'
import App from './App'
import './styles/global.css'

// Create a wrapper component that provides the styled-components theme
const ThemedApp = () => {
  const { isDarkMode } = useTheme()
  const theme = getTheme(isDarkMode)
  
  return (
    <StyledThemeProvider theme={theme}>
      <App />
    </StyledThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  </React.StrictMode>
)
