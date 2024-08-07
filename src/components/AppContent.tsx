import { Routes, Route, useLocation } from 'react-router-dom'
import ManagerPage from '@pages/ManagerPage/ManagerPage'
import Footer from '@components/Footer/Footer'
import StatusBar from '@components/StatusBar/StatusBar'
import Splash from '@pages/Splash/Splash'
import MemberType from '@pages/MemberType/MemberType'
import Signup from '@pages/Signup/Signup'
import OAuth from '@pages/OAuth/OAuth'
import ShopDetail from '@pages/ShopDetail/ShopDetail'
import DiscountEventPage from '@pages/DiscountEventPage/DiscountEventPage/DiscountEventPage'
import DiscountEventPageTwo from '@pages/DiscountEventPage/DiscountEventPageTwo/DiscountEventPageTwo'
import DiscountEventRecordPage from '@pages/DiscountEventRecordPage/DiscountEventRecordPage'
import StoreInfoEditPage from '@pages/StoreInfoEditPage/StoreInfoEditPage'
import StoreInfoDeletePage from '@pages/StoreInfoDeletePage/StoreInfoDeletePage'
import TodayDiscountRestaurantPage from '@pages/TodayDiscountRestaurantPage/TodayDiscountRestaurantPage'
import DiscountRestaurantListPage from '@pages/DiscountRestaurantListPage/DiscountRestaurantListPage'
import StudentPage from '@pages/StudentPage/StudentPage'
import FirstRegisterStoreInfo from '@pages/FirstRegisterStoreInfo/FirstRegisterStoreInfo'
import SecondRegisterStoreInfo from '@pages/SecondRegisterStoreInfo/SecondRegisterStoreInfo'
import ThirdRegisterStoreInfo from '@pages/ThirdRegisterStoreInfo/ThirdRegisterStoreInfo'
import MapRender from '@pages/MapPage/MapRender'
import SchoolSearchPage from '@pages/SchoolSearchPage/SchoolSearchPage'

export default function AppContent() {
  const location = useLocation()
  const showFooter =
    location.pathname === '/manager' ||
    location.pathname === '/studentPage' ||
    location.pathname === '/shopdetail' ||
    location.pathname === '/list' ||
    location.pathname === '/map'
  return (
    <>
      <StatusBar />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/memberType" element={<MemberType />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/oauth" element={<OAuth />} />
        <Route path="/shopdetail" element={<ShopDetail />} />
        <Route path="/manager" element={<ManagerPage />} />
        <Route path="/discount-event" element={<DiscountEventPage />} />
        <Route path="/discount-eventTwo" element={<DiscountEventPageTwo />} />
        <Route path="/discount-record" element={<DiscountEventRecordPage />} />
        <Route path="/storeInfo-edit" element={<StoreInfoEditPage />} />
        <Route path="/storeInfo-delete" element={<StoreInfoDeletePage />} />
        <Route path="/studentPage" element={<StudentPage />} />
        <Route path="/map" element={<MapRender />} />
        <Route path="/schoolSearch" element={<SchoolSearchPage />} />
        <Route
          path="/todayDiscountRestaurant"
          element={<TodayDiscountRestaurantPage />}
        />
        <Route path="/list" element={<DiscountRestaurantListPage />} />
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
      {showFooter && <Footer />}
    </>
  )
}
