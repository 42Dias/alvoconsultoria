import styled from 'styled-components'
import banner from './../../img/banner-login.svg'

export const ContainerApply = styled.div`
  height: 85vh !important;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

export const BgApply = styled.div`
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  width: 100vw !important;
  height: 100vh !important;
`

export const ContentApplyForm = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  width: 500px;
  height: 400px;
  padding: 20px;
  h2 {
    text-align: center;
    font-family: Poppins;
    font-weight: bold;
    font-size: 28px;
    line-height: 45px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #000000;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 500px;
    padding: 30px 30px;
    h2 {
      font-size: 22px;
    }
  }

  @media (max-width: 380px) {
    width: 300px;
    height: 440px;
    padding: 30px 30px;
  }
`

export const FormContent = styled.form`
  background: rgba(255, 255, 255, 0);
  text-align: center;
  .btn-send {
    padding: 10px 70px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    letter-spacing: -0.02em;

    color: #ffffff;
    background: #d51072;
    border: 0px solid;
    border-radius: 10px;

    margin: 10px 0 0 0;
  }

  .btn-send:hover {
    & {
      transition: 0.6s;
      background: #b80d62;
      color: white;
    }
  }
`
