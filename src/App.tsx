import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '@styles/GlobalStyle'
import { theme } from '@styles/theme'
import ManagerPage from '@pages/ManagerPage/ManagerPage'
import Footer from '@components/Footer/Footer'
import StatusBar from '@components/StatusBar/StatusBar'
import DiscountEventPage from '@pages/DiscountEventPage/DiscountEventPage'
import BusinessDocUpload from './pages/BusinessDocUpload/BusinessDocUpload'
import RegisterSuccess from './pages/RegisterSuccess/RegisterSuccess'

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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <StatusBar />
        <Routes>
          <Route path="/" element={<Container>임시 메인 페이지</Container>} />
          <Route path="/manager" element={<ManagerPage />} />
          <Route path="/discount-event" element={<DiscountEventPage />} />
          <Route path="/managerUpload" element={<BusinessDocUpload />} />
          <Route path="/registerSuccess" element={<RegisterSuccess />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}
