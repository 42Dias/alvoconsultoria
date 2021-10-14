import './styles/login.css'
import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
    <div className='containerLogin'>
      <div className='bg-login'>
        <div className='container'>
          <section className='content-login-form'>
            <div className='card p-5 '>
              <h2 className='title-card'>Bem-vindo de volta.</h2>
              <p className='subtitle'>
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </p>
              <form className='d-flex flex-column'>
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
                  placeholder='Senha'
                  required
                  name='senha'
                />
                <div className='d-flex justify-content-between'>
                  <div className='form-group d-flex align-items-center'>
                    <input type='checkbox' id='renamber' name='renamber' />
                    <label htmlFor='renamber' className='p-0 m-0'>
                      Lembrar minha conta
                    </label>
                  </div>
                  <Link to='/esqueceu-a-senha' className='link-reset-password'>
                    Esqueceu sua senha?
                  </Link>
                </div>
                <button type='submit' className='btn-submit'>
                  Entrar
                </button>
                <Link to='/cadastrar' href='' className='register'>
                  Novo por aqui? <strong>Crie sua conta</strong>
                </Link>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
