import styled from 'styled-components'
import banner from './../../img/banner.svg'

export const Banner = styled.div`
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  width: 100vw !important;
  height: 100vh !important;
`

export const BorderProvider = styled.div`
  width: 217px;
  height: 6px;
  background: #d51072;
  border-radius: 13px;

  @media (max-width: 768px) {
    margin: 10px auto;
  }
`

export const ContentBanner = styled.div`
  position: absolute;
  top: 55%;
  left: 6%;
  transform: translate(6%, -50%);

  h1 {
    color: white;
    font-weight: bold;
  }

  p {
    color: white;
    font-size: 16px;
    max-width: 700px;
    font-weight: regular;
    padding: 20px 0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 28px;
      text-align: center !important;
      width: 100% !important;
    }

    p {
      font-size: 14px;
      text-align: center;
      padding: 20px 0;
      max-width: 400px !important;
    }
  }

  @media (max-width: 500px) {
    p {
      max-width: 340px !important;
    }
  }

  @media (max-width: 360px) {
    p {
      max-width: 280px !important;
    }
  }
`

export const ContentForm = styled.article`
  padding: 80px 0;
`

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h2 {
    text-align: center;
  }
  padding-bottom: 50px;
`

export const FormBox = styled.form`
  padding: 20px;
`

export const GridForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ContentBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    padding: 10px 20px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    text-decoration: none;
    letter-spacing: -0.02em;

    color: #ffffff;
    background: #d51072;
    border: 0px solid;
    border-radius: 10px;

    margin: 50px 0 0 0;
  }

  a:hover {
    & {
      transition: 0.6s;
      background: #b80d62;
      color: white;
    }
  }
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  input {
    border: none;
    border-bottom: 0.5px solid #c9c9cb;
    padding: 5px 10px;
    outline: none;
    width: 400px;
    margin-top: 20px;
  }

  ::placeholder {
    color: black;
  }
  @media (max-width: 500px) {
    input {
      width: 290px;
    }
  }
`

export const SelectCity = styled.div`
  display: flex;
  margin-top: 20px;
`

export const ContainerGrid = styled.div`
  select {
    max-width: 200px;
  }

  label {
    color: rgba(60, 60, 67, 1);
    padding: 10px 0;
  }
`

export const SelectSize = styled.div`
  select {
    max-width: 100%;
  }
`

export const FlexBoxCheck = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
