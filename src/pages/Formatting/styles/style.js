import styled from 'styled-components'

export const ColorBackground = styled.div`
  background: #d7d7d0 !important;
`

export const BannerFormating = styled.div`
  margin-top: 60px !important;
  height: 300px;
  background-size: cover;
  background: white;
  background-position: center;

  .content-banner-formatting {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 40px;
  }
`

export const BorderBottom = styled.div`
  background: #d51072;
  border-radius: 13px;
  width: 217px;
  height: 6px;
  margin: 0px 1px 20px 0px;
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

    margin: 20px 0 20px 0;
  }

  a:hover {
    & {
      transition: 0.6s;
      background: #b80d62;
      color: white;
    }
  }
`

export const AddDoc = styled.div`
  margin-top: 40px;
  a {
    background: #d51072;
    padding: 15px 26px;
    border-radius: 10px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    color: #f6f6f6;
    text-decoration: none;
  }

  a:hover {
    & {
      color: #f6f6f6;
      transition: 0.5s;
      background: #be0e66;
    }
  }

  @media (max-width: 768px) {
    a {
      padding: 15px 0;
      font-size: 12px;
      content: 'helodsd';
    }
  }
`

export const DownDoc = styled.div`
  margin-top: 10px;
  a {
    background: #f2f2f2;
    padding: 15px 10px;
    border-radius: 10px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    color: #d51072;
    text-decoration: none;
  }

  a:hover {
    & {
      color: #d51072;
      transition: 0.5s;
      background: #d4d4d4;
    }
  }

  @media (max-width: 768px) {
    a {
      padding: 15px 0;
      font-size: 11px;
    }
  }
`

export const FormattingStandards = styled.section`
  background: white;
  padding: 50px 0;
  margin: 40px 0;
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
      font-size: 20px;
      text-align: center;
      line-height: 30px;
    }

    p {
      font-size: 14px;
      text-align: center;
      line-height: 120%;
      padding: 20px 0;
    }
  }
`

export const BoxQuestion = styled.article`
  h2 {
    color: rgba(213, 16, 114, 1);
  }
`

export const ContentQuestion = styled.div`
  margin-top: 50px;
  p {
    font-size: 16px;
    color: #666666;
  }

  h5 {
    color: rgba(213, 16, 114, 1);
  }

  .form-pergunta {
    border: 0px solid;
    width: 100%;
    border-bottom: 1px solid #666666;
  }

  @media (max-width: 768px) {
    h5 {
      text-align: center;
    }
  }
`

export const ContentArticle = styled.article`
  display: flex;
`
