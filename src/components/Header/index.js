import { Link } from 'react-router-dom';
import './styles/header.css';

import logo from './img/logo.svg';

export default function Header() {

  return (
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <Link to="/" class="navbar-brand" href=""><img src={logo} alt="" /></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link active link-conta" href="#">Sou profissional</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link btn-patterns" href="#">Criar minha conta</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link btn-patterns-outline" href="#">Efetuar login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  );
 }