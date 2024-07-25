import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'
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
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Container>임시 메인 페이지</Container>} />
          <Route path="/managerUpload" element={<BusinessDocUpload />} />
          <Route path="/registerSuccess" element={<RegisterSuccess />} />
        </Routes>
      </Router>
    </>
  )
}
