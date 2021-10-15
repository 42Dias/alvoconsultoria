import { Link } from 'react-router-dom'
import './styles/erro.css'
import erro from './../img/image-error.svg'

export default function Erro() {
  return (
    <div className='container-error'>
      <div className='container'>
        <div className='grid-error'>
          <div className='content-erro'>
            <h2>Oops!</h2>
            <p>Não a nada para ver por aqui. Câmbio! </p>
            <Link to='/'>Voltar</Link>
          </div>

          <img src={erro} alt='imagem de erro' />
        </div>
      </div>
    </div>
  )
}
