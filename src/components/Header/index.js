import { Link } from 'react-router-dom'
import './styles/header.css'

import logo from './img/logo.svg'

export default function Header() {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container'>
          <Link to='/' class='navbar-brand' href=''>
            <img src={logo} alt='' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='nav justify-content-end'>
              <li className='nav-item'>
                <a className='nav-link active link-conta' href='#'>
                  Sou profissional
                </a>
              </li>
              <li className='nav-item'>
                <Link
                  to='/cadastrar'
                  className='nav-link btn-patterns'
                  href='#'
                >
                  Criar minha conta
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/entrar'
                  className='nav-link btn-patterns-outline'
                  href='#'
                >
                  Efetuar login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
