import { Link } from 'react-router-dom'

export default function Home () {
  return (
    <div className='container'>
      <h2>Pagina home</h2>
      <Link to='/entrar'>Entrar</Link><br />
      <Link to='/cadastrar'>Cadastrar</Link><br />
      <Link to='/esqueceu-a-senha'>Esqueceu a senha</Link>
    </div>
  )
}
