import './App.css'

import styled from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'

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
      <Container>화면 적용</Container>
    </>
  )
}
