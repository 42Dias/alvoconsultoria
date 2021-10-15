// import { Link } from 'react-router-dom'
import './styles/forgetpassword.css'

export default function ForgetPassword() {
  return (
    <div className='containerForget'>
      <div className='bg-reset'>
        <div className='container'>
          <section className='content-login-form'>
            <div className='card p-5'>
              <h2 className='title-card'>Esqueceu sua senha?</h2>
              <p className='subtitle'>
                Insira o email de sua conta para conseguirmos recuperar sua
                conta.
              </p>
              <form action='' className='d-flex flex-column align-items-center'>
                <input
                  type='email'
                  className='form'
                  placeholder='Seu email'
                  required
                  name='email'
                />

                <button type='submit' className='btn-submit'>
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
