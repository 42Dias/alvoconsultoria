import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    overflow-x: hidden;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

`

export const Container = styled.div`
  max-width: 1320px;
  padding: 0 4%;
`
