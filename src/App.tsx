import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import {Splash} from './pages/Splash/Splash'
import {MemberType} from './pages/MemberType/MemberType'
import {Signup} from './pages/Signup/Signup'

import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'
import { theme } from './styles/theme'

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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Splash/>} />
          <Route path="/membertype" element={<MemberType/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
        </ThemeProvider>
    </BrowserRouter>
  )
}
