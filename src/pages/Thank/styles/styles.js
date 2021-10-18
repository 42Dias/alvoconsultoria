import styled from 'styled-components'
import banner from './../../img/banner-login.svg'

export const ThankContainer = styled.div`
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

  h2,
  p {
    color: #fff;
  }
`
