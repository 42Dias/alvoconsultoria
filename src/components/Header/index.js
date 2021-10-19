import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as CloseMenu } from './img/menu-close.svg'
import { ReactComponent as MenuIcon } from './img/menu.svg'
import { ReactComponent as Logo } from './img/logo.svg'
import './styles/header.css'

export default function Header() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <header>
      <div className='logo-container'>
        <Link to='/'>
          <Logo className='logo' />
        </Link>
      </div>

      <nav>
        <ul className={click ? 'nav-options active' : 'nav-options'}>
          <li className='option' onClick={closeMobileMenu}>
            <Link className='professional-account' to='/seja-provedor'>
              Sou profissional
            </Link>
          </li>

          <li className='option' onClick={closeMobileMenu}>
            <Link className='btn-patterns' to='/cadastrar'>
              Criar minha conta
            </Link>
          </li>

          <li className='option' onClick={closeMobileMenu}>
            <Link className='create-account' to='/entrar'>
              Efetuar login
            </Link>
          </li>
        </ul>
      </nav>

      <div className='mobile-menu' onClick={handleClick}>
        {click ? (
          <CloseMenu className='menu-icon' />
        ) : (
          <MenuIcon className='menu-icon' />
        )}
      </div>
    </header>
  )
}
