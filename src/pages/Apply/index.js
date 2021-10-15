import { Link } from 'react-router-dom'
import './styles/apply.css'

export default function Apply() {
  return (
    <>
      <div className='containerApply'>
        <div className='bg-apply'>
          <div className='container'>
            <section className='content-apply-form '>
              <div className='card p-5'>
                <h2 className='title-card'>
                  Gostaria de se candidatar <br /> para outra vaga?
                </h2>
                <form
                  action=''
                  className='d-flex flex-column align-items-center'
                >
                  <div className='d-flex align-items-center justify-content-center mt-4'>
                    <label className='mb-0 mr-2'>Sim</label>
                    <input type='checkbox' className='mr-2' />
                    <label className='mb-0 mr-2'>Não</label>
                    <input type='checkbox' className='mr-2' />
                  </div>

                  <hr />
                  <div className='d-flex justify-content-between mb-5'>
                    <select name='' className='form-select-login' id=''>
                      <option value=''>Escolha uma nova vaga</option>
                    </select>
                  </div>
                  <span className='mb-5'>Clique em Enviar para concluir.</span>
                  <Link
                    to='/seja-provedor/cadastro-provedor/agradecimento'
                    type='submit'
                    className='btn-submit'
                  >
                    Confirmar cadastro
                  </Link>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
