import './styles/signup.css'

export default function SignUp() {
  return (
    <div className='containerSignUp'>
      <div className='bg-register'>
        <div className='container'>
          <section className='content-login-form'>
            <div className='card p-5'>
              <h2 className='title-card'>Não tem uma conta?</h2>
              <p className='subtitle'>
                Insira seus dados para começarmos o cadastro
              </p>
              <form action='' className='d-flex flex-column'>
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

                <button type='submit' id='btn-submit' className='btn-submit'>
                  Continuar cadastro
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
