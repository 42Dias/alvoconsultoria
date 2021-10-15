import { Link } from 'react-router-dom'
import './styles/beprovider.css'

export default function BeProvider() {
  return (
    <>
      <section className='banner'>
        <div className='container content-banner'>
          <article className='content-banner'>
            <h1>Seja Bem vindo!</h1>
            <span className='border-bottom'></span>
            <p>
              Na Alvo Consultoria, presamos pela excelência dos trabalhos
              prestados. Desta forma, ao prestarmos um serviço, observamos todos
              os detalhes do texto, de modo a deixa-lo impecável! As formatações
              são realizadas em Word, de acordo normas pré-estabelecidas. A
              baixo serão realizados questionamentos a respeito dos seus
              conhecimentos sobre Word e capacidade se seguir orientações
              fornecidas para formatar um trabalho.
            </p>
          </article>
        </div>
      </section>

      <section className='my-4'>
        <div className='container'>
          <article>
            <div className='mb-4 content-title text-center d-flex  flex-column align-items-center'>
              <h2>Preencha os campos abaixo:</h2>
              <div className='border-bottom-form'></div>
            </div>

            <form action=''>
              <div className='d-flex flex-xs-column flex-sm-column flex-md-column  flex-lg-row'>
                <div className='content-left col-sm-12 col-md-12 col-lg-6  justify-content-between '>
                  <div className='form-group p-0 col-12'>
                    <label htmlFor='nome'>Nome completo</label>
                    <input type='text' id='nome' className='form-custom' />
                  </div>
                  <div className='form-group  p-0 col-12'>
                    <label htmlFor='Email'>Email</label>
                    <input type='text' id='Email' className='form-custom' />
                  </div>
                  <div className='form-group p-0 col-12'>
                    <label htmlFor='data'>Data de nascimento</label>
                    <input type='text' id='data' className='form-custom' />
                  </div>
                  <div className='form-group  p-0col-12'>
                    <label htmlFor='senha'>Criar senha</label>
                    <input type='text' id='senha' className='form-custom' />
                  </div>
                  <div className='form-group col p-0 col-12'>
                    <label htmlFor='conf-senha'>Confirmar senha</label>
                    <input
                      type='text'
                      id='conf-senha'
                      className='form-custom'
                    />
                  </div>

                  <div className='d-flex flex-xs-column flex-ms-column justify-content-md-between'>
                    <div className='p-0'>
                      <select name='' className='form-select col'>
                        <option value=''>Cidade</option>
                      </select>
                    </div>
                    <div className='p-0'>
                      <select name='' className='form-select col'>
                        <option value=''>Estado</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className='content-right d-flex flex-column justify-content-between col-sm-12 col-md-12 col-lg-6'>
                  <div className='mb-2'>
                    <select name='' className='form-select-right mb-2'>
                      <option value=''>Cidade</option>
                    </select>
                    <label>
                      Caso esteja cursando ou tenha finalizado o ensino
                      superior, diga a universidade e curso
                    </label>
                  </div>

                  <div className='d-flex p-0  mb-2 flex-xs-column justify-content-between'>
                    <div className='col p-0'>
                      <select name='' className='form-select'>
                        <option value=''>Universidade</option>
                      </select>
                    </div>
                    <div className='col p-0'>
                      <select name='' className='form-select'>
                        <option value=''>Curso</option>
                      </select>
                    </div>
                  </div>
                  <label htmlFor=''>
                    Para qual área de atuação você deseja se inscrever?
                  </label>
                  <div className='mb-2'>
                    <select name='' className='form-select-right mb-2'>
                      <option value=''>Seleciona sua área de atuação</option>
                    </select>
                    <label>
                      Caso esteja cursando ou tenha finalizado o ensino
                      superior, diga a universidade e curso
                    </label>
                  </div>

                  <div className='check d-flex justify-content-between'>
                    <label htmlFor='termo'>
                      Estou ciente dos Termos de uso da plataforma.
                    </label>
                    <input type='checkbox' id='termo' name='termo' />
                  </div>
                </div>
              </div>
              <div className='content-btn'>
                <Link
                  to='/seja-provedor/cadastro-provedor'
                  className='btn-patterns-submit my-4'
                >
                  Continuar cadastro
                </Link>
              </div>
            </form>
          </article>
        </div>
      </section>
    </>
  )
}
