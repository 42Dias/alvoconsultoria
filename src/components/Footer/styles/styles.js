import styled from 'styled-components'

export const Footer = styled.footer`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  color: #1a1a1a;
  background: white;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    p {
      padding: 5px 0 0 0;
    }
    span {
      padding: 0 0 20px 0;
    }
  }
`
