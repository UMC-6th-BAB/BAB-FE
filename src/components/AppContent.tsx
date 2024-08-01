import { Routes, Route, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import ManagerPage from '@pages/ManagerPage/ManagerPage'
import Footer from '@components/Footer/Footer'
import StatusBar from '@components/StatusBar/StatusBar'
import DiscountEventPage from '@pages/DiscountEventPage/DiscountEventPage/DiscountEventPage'
import DiscountEventPageTwo from '@pages/DiscountEventPage/DiscountEventPageTwo/DiscountEventPageTwo'
import DiscountEventRecordPage from '@pages/DiscountEventRecordPage/DiscountEventRecordPage'
import StoreInfoEditPage from '@pages/StoreInfoEditPage/StoreInfoEditPage'
import StoreInfoDeletePage from '@pages/StoreInfoDeletePage/StoreInfoDeletePage'
import TodayDiscountRestaurantPage from '@pages/TodayDiscountRestaurantPage/TodayDiscountRestaurantPage'
import DiscountRestaurantListPage from '@pages/DiscountRestaurantListPage/DiscountRestaurantListPage'
import StudentPage from '@pages/StudentPage/StudentPage'
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
    location.pathname === '/studentPage' ||
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
        <Route path="/discount-record" element={<DiscountEventRecordPage />} />
        <Route path="/storeInfo-edit" element={<StoreInfoEditPage />} />
        <Route path="/storeInfo-delete" element={<StoreInfoDeletePage />} />
        <Route path="/studentPage" element={<StudentPage />} />
        <Route
          path="/todayDiscountRestaurant"
          element={<TodayDiscountRestaurantPage />}
        />
        <Route path="/list" element={<DiscountRestaurantListPage />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  )
}
