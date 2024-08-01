import { BrowserRouter as Router } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '@styles/GlobalStyle'
import { theme } from '@styles/theme'
import AppContent from '@components/AppContent'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  )
}
