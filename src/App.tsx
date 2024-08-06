import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '@styles/GlobalStyle'
import { theme } from '@styles/theme'
import ManagerPage from '@pages/ManagerPage/ManagerPage'
import Footer from '@components/Footer/Footer'
import StatusBar from '@components/StatusBar/StatusBar'
import DiscountEventPage from '@pages/DiscountEventPage/DiscountEventPage'
import StudentPage from './pages/StudentPage/StudentPage'
import BusinessDocUpload from './pages/BusinessDocUpload/BusinessDocUpload'
import RegisterSuccess from './pages/RegisterSuccess/RegisterSuccess'
import MapRender from '@pages/MapPage/MapRender'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
import AppContent from '@components/AppContent'

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
          <Route path="/studentPage" element={<StudentPage />} />
          <Route path="/managerUpload" element={<BusinessDocUpload />} />
          <Route path="/registerSuccess" element={<RegisterSuccess />} />
          <Route path="/map" element={<MapRender />} />
        </Routes>
        <Footer />
        <AppContent />
      </Router>
    </ThemeProvider>
  )
}
