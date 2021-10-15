import './styles/signup.css'
import * as S from './styles/style'

export default function SignUp() {
  return (
    <S.ContainerSignUp>
      <S.Background>
        <S.Container>
          <S.ContentLoginForm>
            <S.Card>
              <h2>Não tem uma conta?</h2>
              <p>Insira seus dados para começarmos o cadastro</p>
              <form action=''>
                <input
                  type='text'
                  className='form'
                  placeholder='Nome completo'
                  required
                  name='nome'
                />
                <input
                  type='email'
                  className='form'
                  placeholder='Email'
                  required
                  name='email'
                />
                <input
                  type='password'
                  className='form'
                  placeholder='Criar senha'
                  required
                  name='senha'
                />
                <input
                  type='password'
                  className='form'
                  placeholder='Confirmar senha'
                  required
                  name='senha'
                />

                <button type='submit' id='btn-submit'>
                  Continuar cadastro
                </button>
              </form>
            </S.Card>
          </S.ContentLoginForm>
        </S.Container>
      </S.Background>
    </S.ContainerSignUp>
  )
}
