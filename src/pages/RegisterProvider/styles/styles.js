import styled from 'styled-components'
import banner from './../../img/banner2.svg'

export const Banner = styled.section`
  background: url(${banner});
  height: 584px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const ContainerBanner = styled.div`
  height: 100%;
  img {
    position: absolute;
    right: 0;
    top: 345px;
  }
  @media (max-width: 768px) {
    img {
      display: none;
    }
  }
`

export const ContentBanner = styled.article`
  position: absolute;
  top: 55%;
  left: 0%;
  transform: translate(0%, -50%);
  max-width: 1320px;
  padding: 0 4%;
  margin: 0 auto;
  h1 {
    z-index: 9999;
    font-weight: bold;
    font-size: 35px;
    color: #ffffff;
  }
  h2 {
    z-index: 9999;
    font-size: 35px;
    color: #ffffff;
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
    h2 {
      font-size: 24px;
      text-align: center !important;
      width: 100% !important;
    }
    p {
      font-size: 14px;
      text-align: center;
      padding: 20px 0;
      max-width: 350px !important;
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

export const Border = styled.div`
  width: 217px;
  height: 6px;
  background: #d51072;
  border-radius: 13px;
  margin: 20px 0;
  @media (max-width: 768px) {
    margin: 10px auto;
  }
`

export const Container = styled.div`
  background: #fff;
  text-align: left;
  max-width: 1320px;
  padding: 0 4%;
`

export const FormattingStandards = styled.section`
  padding: 50px 0;
  h2 {
    font-weight: 600;
    font-size: 35px;
    line-height: 45px;
    color: #d51072;
  }
  p {
    font-size: 16px;
    line-height: 150%;
    color: #666666;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 28px;
      text-align: center;
    }
    p {
      font-size: 14px;
      text-align: center;
      line-height: 120%;
    }
  }
`

export const FormattingStandardsContainer = styled.section`
  max-width: 1320px;
  margin: 0 auto;
  margin-top: 50px;
  h2 {
    color: rgba(213, 16, 114, 1);
    font-weight: bold;
    padding: 20px 0;
  }
  @media (max-width: 768px) {
    .padding-exemplos strong {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .col-lg-5 p {
      font-size: 14px;
      text-align: center;
    }
    h2 {
      text-align: center;
    }
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

export const ArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
`

export const ArticleProvider = styled.article`
  display: flex;
  flex-direction: column;
`

export const BoxExemples = styled.article`
  display: flex;
  flex-direction: column;
`

export const ContentExemples = styled.article`
  display: flex;
  flex-direction: column;
`

export const Button = styled.div`
  display: flex;
`
