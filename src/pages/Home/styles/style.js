import styled from 'styled-components'
import banner from './../../img/backgroud.png'

export const Main = styled.div`
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
  width: 100vw !important;
  height: 100vh !important;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
`

export const ContainerMain = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
`

export const ContentHome = styled.section`
  position: absolute;
  top: 50%;
  left: 6%;
  transform: translate(6%, -50%);
`

export const Buttons = styled.div`
  display: flex;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    max-width: 440px;
    font-size: 44px;
    color: #fff;
    font-weight: 800;
  }

  p {
    max-width: 700px;
    font-size: 20px;
    color: #fff;
  }

  a {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    letter-spacing: 0.3px;
    font-size: 14px;
    width: 152px;
    height: 42px;
    background: #d51072;
    border-radius: 10px;
    cursor: pointer;
    color: white !important;
    text-decoration: none;
  }

  a:nth-child(2) {
    color: #d51072 !important;
    text-decoration: underline;
    background: transparent;
  }
`

export const BorderHome = styled.div`
  width: 217px;
  height: 6px;
  background: #d51072;
  border-radius: 13px;
`
