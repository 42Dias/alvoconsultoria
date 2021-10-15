import { Link } from 'react-router-dom'
import * as S from './styles/style'

export default function SignIn() {
  return (
    <S.ContainerLogin>
      <S.Background>
        <S.Container>
          <S.ContentLoginForm>
            <S.Card>
              <h2>Bem-vindo de volta</h2>
              <p>Informe seu e-mail e senha para continuar</p>
              <S.Form>
                <input type='email' placeholder='Email' required name='email' />
                <input
                  type='password'
                  placeholder='Senha'
                  required
                  name='senha'
                />
                <S.ForgotPassword>
                  <input type='checkbox' id='renamber' name='renamber' />
                  <label htmlFor='renamber'>Lembrar minha conta</label>
                  <Link to='/esqueceu-a-senha' className='link-reset-password'>
                    Esqueceu sua senha?
                  </Link>
                </S.ForgotPassword>
                <button>Entrar</button>
                <Link to='/cadastrar' href='' className='register'>
                  Novo por aqui?<strong> Crie sua conta</strong>
                </Link>
              </S.Form>
            </S.Card>
          </S.ContentLoginForm>
        </S.Container>
      </S.Background>
    </S.ContainerLogin>
  )
}
