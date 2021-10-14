import { Link } from 'react-router-dom'
import './styles/home.css'

export default function Home() {
  return (
    <div className='containerHome'>
      <div className='bg-primary'>
        <div className='container'>
          <section className='content-home'>
            <article className='d-flex'>
              <div className='content  col-6'>
                <h2 className='font-weight-500'>
                  Sua vida acadêmica descomplicada!
                </h2>
                <div className='border-home'></div>
                <p>
                  Com a Alvo, você tem a tranquilidade e segurança para
                  conquistar a tão sonhada aprovação! Aqui você formata, revisa
                  e traduz seu trabalho sem dor de cabeça!
                </p>
                <div className='d-flex align-items-center mt-2'>
                  <Link to='/cadastrar' href='' className='mr-2 btn-patterns'>
                    Criar minha conta
                  </Link>
                  <Link to='/entrar'>Ja tenho conta!</Link>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  )
}
