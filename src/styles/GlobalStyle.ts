import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    position: relative;
    margin: 0 auto;
    height: 100%;
    min-height: 99vh;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    background-color: #f9faff;
    border-color: black;
    align-items: center;
  }
`

export default GlobalStyle
