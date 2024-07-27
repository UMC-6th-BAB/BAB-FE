import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import {Splash} from '@pages/Splash/Splash'
import {MemberType} from '@pages/MemberType/MemberType'
import {Signup} from '@pages/Signup/Signup'
import {OAuth} from '@pages/OAuth/OAuth'
import {ShopDetail} from '@pages/ShopDetail/ShopDetail'
import Footer from '@components/Footer/Footer'
import StatusBar from '@components/StatusBar/StatusBar'

import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '@styles/GlobalStyle'
import { theme } from '@styles/theme'

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
        <StatusBar/>
        <Routes>
          <Route path="/" element={<Splash/>} />
          <Route path="/membertype" element={<MemberType/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/oauth" element={<OAuth/>} />
          <Route path="/shopdetail" element={<ShopDetail/>}/>
        </Routes>
        <Footer/>
        </Router>
        </ThemeProvider>
  )
}
