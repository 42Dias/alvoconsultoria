import styled from 'styled-components'
import banner from './../../img/background-login.png'

export const ContainerForget = styled.div`
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

  h2 {
    text-align: center;
    font-family: Poppins;
    font-weight: bold;
    font-size: 36px;
    line-height: 45px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #000000;
  }

  p {
    color: #666666;
    font-size: 15px;
    text-align: center;
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
  align-items: center;

  input {
    padding: 10px 10px 10px 0;
  }

  button {
    color: white;
    width: 384px;
    height: 60px;
    background: #d51072;
    border-radius: 10px;
    border: 0px solid;
    margin-top: 55px;
  }
`
