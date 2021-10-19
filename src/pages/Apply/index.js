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
                <div className='d-flex align-items-center justify-content-center mt-4'>
                  <label className='mb-0 mr-2'>Sim</label>
                  <input type='checkbox' className='mr-2' />
                  <label className='mb-0 mr-2'>Não</label>
                  <input type='checkbox' className='mr-2' />
                </div>

                <hr />
                <div className='d-flex justify-content-between mb-5'>
                  <select name='' className='form-select' id=''>
                    <option value=''>Escolha uma nova vaga</option>
                  </select>
                </div>
                <span className='mb-5'>Clique em Enviar para concluir.</span>
                <br />
                <Link
                  to='/seja-provedor/cadastro-provedor/agradecimento'
                  type='submit'
                  className='btn-send'
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
