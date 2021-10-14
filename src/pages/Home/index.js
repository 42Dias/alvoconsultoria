import { Link } from 'react-router-dom'
import * as S from './styles/style.js'

export default function Home() {
  return (
    <S.Main>
      <S.Background>
        <S.ContainerMain>
          <S.ContentHome>
            <article className='d-flex'>
              <S.Title>
                <h2>Sua vida acadêmica descomplicada!</h2>
                <S.BorderHome />
                <p>
                  Com a Alvo, você tem a tranquilidade e segurança para
                  conquistar a tão sonhada aprovação! Aqui você formata, revisa
                  e traduz seu trabalho sem dor de cabeça!
                </p>
                <S.Buttons>
                  <Link to='/cadastrar'>Criar minha conta</Link>
                  <Link to='/entrar'>Ja tenho conta!</Link>
                </S.Buttons>
              </S.Title>
            </article>
          </S.ContentHome>
        </S.ContainerMain>
      </S.Background>
    </S.Main>
  )
}
