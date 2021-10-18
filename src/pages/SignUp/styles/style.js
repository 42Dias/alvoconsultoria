import styled from 'styled-components'
import banner from './../../img/background-register.png'

export const ContainerSignUp = styled.div`
  height: 85vh !important;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: linear-gradient(
    270deg,
    #c4c4c4 9.21%,
    rgba(196, 196, 196, 0) 85.55%
  );
`

export const Background = styled.div`
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  width: 100vw !important;
  height: 100vh !important;
`

export const Container = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
`

export const ContentLoginForm = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Card = styled.div`
  background: linear-gradient(
    142.31deg,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.6) 99.95%
  );
  border-radius: 20px;
  padding: 50px;
  width: 500px;
  height: 500px;
  h2 {
    text-align: center;
    font-weight: bold;
    font-size: 30px;
    line-height: 45px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #000000;
  }

  p {
    color: #666666;
    font-size: 15px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    border: none;
    margin: 15px 0px;
    outline: none;
  }

  input {
    font-size: 17px;
    color: rgba(60, 60, 67, 0.3);
    padding: 8px 0 8px 0;
    width: 384px;
  }

  button {
    color: white;
    width: 180px;
    height: 48px;
    background: #d51072;
    border-radius: 10px;
    border: none;
    margin-top: 53px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 500px;
    padding: 30px 30px;
    h2 {
      font-size: 28px;
    }

    p {
      font-size: 14px;
    }

    input {
      font-size: 14px;
      color: rgba(60, 60, 67, 0.3);
      padding: 2px 0 2px 0;
      width: 100% !important;
    }

    form button {
      margin: 12px auto;
      font-size: 14px;
    }
  }

  @media (max-width: 380px) {
    width: 300px;
    height: 440px;
    padding: 30px 30px;
    h2 {
      font-size: 22px;
    }

    p {
      font-size: 14px;
    }

    input {
      font-size: 14px;
      color: rgba(60, 60, 67, 0.3);
      padding: 0;
      width: 100% !important;
    }

    form button {
      margin: 12px auto;
      font-size: 14px;
    }
  }
`
