import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'
import Map from './components/Map'
import { SearchStore } from './stores/searchStore'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import { theme } from './styles/theme'
import BasicLayout from './components/BasicLayout'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <>로딩중...</>
    case Status.FAILURE:
      return <>에러 발생</>
    case Status.SUCCESS:
      return <Map />
  }
}
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route element={<BasicLayout />}>
              <Route
                path="/map-page"
                element={
                  <Wrapper
                    apiKey={import.meta.env.VITE_API_KEY}
                    render={render}
                  />
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}
