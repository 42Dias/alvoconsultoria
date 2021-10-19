import styled from 'styled-components'
import banner from './../../img/background-login.png'

export const ContainerLogin = styled.div`
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
    color: #000000;
  }

  p {
    color: #2f2f2f;
    font-size: 15px;
    text-align: center;
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
    height: 490px;
    padding: 10px 10px;
    margin-top: 40px;
  }
`

export const Form = styled.form`
  border: none;
  margin: 15px 0px;
  outline: none;
  width: 100%;
  background: rgba(255, 255, 255, 0);
  display: flex;
  flex-direction: column;

  > input {
    background: transparent;
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;
    border-bottom: 1px solid #3c3c4360;
    margin: 9px 22px 10px 5px;
    padding: 10px 10px 10px 0;
  }

  button {
    color: white;
    width: 384px;
    height: 60px;
    background: #d51072;
    border-radius: 10px;
    border: 0px solid;
    margin-top: 51px;
    font-weight: 600;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    button {
      color: white;
      width: 180px;
      height: 48px;
      background: #d51072;
      margin-top: 51px;
      font-size: 14px;
    }
  }

  a {
    text-decoration: none;
    color: #070707;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    a {
      font-size: 14px;
    }
  }

  strong {
    color: #d51072;
  }
`

export const ForgotPassword = styled.div`
  display: flex;

  a {
    font-size: 13px;
    color: #0a0a0a;
    text-decoration: none;
    margin-left: auto;
    font-size: 13px;
    margin-top: 2px;
  }

  label {
    margin-top: 6px;
    margin-left: 10px;
    font-size: 13px;
  }

  @media (max-width: 768px) {
    a {
      margin-left: 0;
    }

    label {
      margin-left: 0;
    }
  }

  input {
    width: 20px;
    height: 20px;
    margin: 5px 2px 3px 4px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
`
