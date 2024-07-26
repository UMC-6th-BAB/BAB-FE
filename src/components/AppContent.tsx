import { Routes, Route, useLocation } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import ManagerPage from '@pages/ManagerPage/ManagerPage'
import Footer from '@components/Footer/Footer'
import StatusBar from '@components/StatusBar/StatusBar'
import DiscountEventPage from '@pages/DiscountEventPage/DiscountEventPage/DiscountEventPage'
import DiscountEventPageTwo from '@pages/DiscountEventPage/DiscountEventPageTwo/DiscountEventPageTwo'
import DiscountEventRecordPage from '@pages/DiscountEventRecordPage/DiscountEventRecordPage'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export default function AppContent() {
  const location = useLocation()
  const showFooter =
    location.pathname === '/manager' ||
    location.pathname === '/student-page' ||
    location.pathname === '/' ||
    location.pathname === '/list'

  return (
    <>
      <StatusBar />
      <Routes>
        <Route path="/" element={<Container>임시 메인 페이지</Container>} />
        <Route path="/manager" element={<ManagerPage />} />
        <Route path="/discount-event" element={<DiscountEventPage />} />
        <Route path="/discount-eventTwo" element={<DiscountEventPageTwo />} />
        <Route path="/discountRecord" element={<DiscountEventRecordPage />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  )
}
