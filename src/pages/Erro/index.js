import { Link } from 'react-router-dom'
import erro from './../img/image-error.svg'
import * as S from './styles/style'

export default function Erro() {
  return (
    <S.ContainerError>
      <S.GridError>
        <S.ContentErro>
          <h2>Oops!</h2>
          <p>Não a nada para ver por aqui. Câmbio! </p>
          <Link to='/'>Voltar</Link>
        </S.ContentErro>
        <img src={erro} alt='imagem de erro' />
      </S.GridError>
    </S.ContainerError>
  )
}
