import styled from 'styled-components'

export const ContainerError = styled.div`
  height: 85vh !important;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: white;
`

export const GridError = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  img {
    max-width: 600px;
    margin-top: 80px;

    @media (max-width: 768px) {
      max-width: 400px;
      margin-left: 80px;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

export const ContentErro = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 80px;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h2 {
    font-size: 48px;
    font-weight: bold;
  }

  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #696969;
  }

  a {
    background: #d51072;
    border-radius: 5px;
    color: white;
    text-decoration: none;
    padding: 12px 40px;

    &:hover {
      background: #d51072;
      border-radius: 5px;
      color: #fff;
      text-decoration: none;
      padding: 12px 40px;
    }
  }
`
