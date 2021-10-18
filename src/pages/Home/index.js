import { Link } from 'react-router-dom'
import * as S from './styles/style.js'
import * as C from './../../styles/global'

export default function Home() {
  return (
    <S.Main>
      <S.Background>
        <S.ContainerMain>
          <C.Container>
            <S.ContentHome>
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
            </S.ContentHome>
          </C.Container>
        </S.ContainerMain>
      </S.Background>
    </S.Main>
  )
}
