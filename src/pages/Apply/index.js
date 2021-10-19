import { Link } from 'react-router-dom'
import * as S from './styles/style'
import * as C from './../../styles/global'

export default function Apply() {
  return (
    <S.ContainerApply>
      <S.BgApply>
        <C.Container>
          <S.ContentApplyForm>
            <S.Card>
              <h2>Gostaria de se candidatar para outra vaga?</h2>
              <S.FormContent>
                <S.ContentLabels>
                  <label>Sim</label>
                  <input type='checkbox' />
                  <label>Não</label>
                  <input type='checkbox' />
                </S.ContentLabels>

                <hr />
                <S.ContentLabels>
                  <select name='' id=''>
                    <option value=''>Escolha uma nova vaga</option>
                  </select>
                </S.ContentLabels>
                <span>Clique em Enviar para concluir.</span>
                <br />
                <Link
                  to='/seja-provedor/cadastro-provedor/agradecimento'
                  type='submit'
                >
                  Enviar
                </Link>
              </S.FormContent>
            </S.Card>
          </S.ContentApplyForm>
        </C.Container>
      </S.BgApply>
    </S.ContainerApply>
  )
}
