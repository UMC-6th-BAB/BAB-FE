import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'
import { theme } from './styles/theme'
import FirstRegisterStoreInfo from './pages/FirstRegisterStoreInfo/FirstRegisterStoreInfo'
import SecondRegisterStoreInfo from './pages/SecondRegisterStoreInfo/SecondRegisterStoreInfo'
import ThirdRegisterStoreInfo from './pages/ThirdRegisterStoreInfo/ThirdRegisterStoreInfo'

const Container = styled.div`
  display: flex;
  justify-content: center;
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
        <Router>
          <Routes>
            <Route path="/" element={<Container>임시 메인 페이지</Container>} />
            <Route
              path="/firstregisterstoreinfo"
              element={<FirstRegisterStoreInfo />}
            />
            <Route
              path="/secondregisterstoreinfo"
              element={<SecondRegisterStoreInfo />}
            />
            <Route
              path="/thirdregisterstoreinfo"
              element={<ThirdRegisterStoreInfo />}
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}
