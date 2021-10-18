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
`

export const ContentBanner = styled.article`
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

  span {
    background: #d51072;
    border-radius: 13px;
    width: 217px;
    height: 6px;
    margin: 0px 1px 20px 0px;
  }

  p {
    z-index: 9999;
    font-size: 17px;
    line-height: 150%;
    color: #ffffff;
  }
`

export const Container = styled.div`
  background: #fff;
  text-align: left;
`

export const FormattingStandards = styled.section`
  margin-top: 50px;
  h2 {
    font-weight: 600;
    font-size: 35px;
    line-height: 45px;
    color: #d51072;
  }

  p {
    font-size: 18px;
    line-height: 150%;

    color: #666666;
  }
`

export const FormattingStandardsContainer = styled.section``

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background: #f2f2f2;

  a {
    padding: 10px 100px;
    font-weight: 600;
    font-size: 20px;

    color: #ffffff;
    background: #d51072;
    border-radius: 10px;
    text-decoration: none;

    &:hover {
      color: #fff;
    }
  }
`
