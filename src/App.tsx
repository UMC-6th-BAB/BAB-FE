import './App.css'

import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'
import { theme } from './styles/theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import StudentPage from './pages/StudentPage'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <BrowserRouter>
            <Routes>
              <Route path="/studentPage" element={<StudentPage />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </>
  )
}
