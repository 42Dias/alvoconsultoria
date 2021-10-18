import * as S from './styles/style'

export default function ForgetPassword() {
  return (
    <S.ContainerForget>
      <S.Background>
        <S.Container>
          <S.ContentLoginForm>
            <S.Card>
              <h2>Esqueceu sua senha?</h2>
              <p>
                Insira o email de sua conta para conseguirmos recuperar sua
                conta.
              </p>
              <S.Form action=''>
                <input
                  type='email'
                  className='form'
                  placeholder='Seu email'
                  required
                  name='email'
                />
                <button type='submit'>Recuperar minha senha</button>
              </S.Form>
            </S.Card>
          </S.ContentLoginForm>
        </S.Container>
      </S.Background>
    </S.ContainerForget>
  )
}
