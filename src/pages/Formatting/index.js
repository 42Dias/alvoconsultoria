import { Link } from 'react-router-dom'
import './styles/formatting.css'

export default function Formatting() {
  return (
    <>
      <div className='color-bg-gray'>
        <section className='banner-formatting'>
          <div className='container content-banner'>
            <article className='container content-banner-formatting'>
              <h1>Formatação de artigos</h1>
              <span className='border-bottom'></span>
              <a href='' className='down-doc mb-3'>
                Clique aqui para baixar o documento para formatação.
              </a>
              <a href='' className='add-doc'>
                Clique aqui para anexar seu documento formatado.
              </a>
            </article>
          </div>
        </section>

        <section className='normas-formatacao mt-5'>
          <div className='container'>
            <article className='col-sm-12 col-md-12 col-lg-12 py-5'>
              <h5>
                Abaixo serão listadas algumas referências para você formatar de
                acordo as normas da revista. Elas devem ser padronizadas, ou
                seja, devem seguir o mesmo estilo
              </h5>

              <div className='content-pergunta my-5'>
                <h5>Referência 1</h5>
                <p>
                  Ministério da Saúde. Agência Nacional de Vigilância Sanitária.
                  Resolução RDC nº 31, de 11 de agosto de 2010. Dispõe sobre a
                  realização dos Estudos de Equivalência Farmacêutica e de
                  Perfil de Dissolução Comparativo. Diário Oficial da República
                  Federativa do Brasil, Brasília, 2010c{' '}
                </p>

                <input
                  type='text'
                  className='form-pergunta'
                  placeholder='Sua resposta'
                />
              </div>

              <div className='content-pergunta my-5'>
                <h5>Referência 2</h5>
                <p>
                  KNAPPMANN, André Leandro; MELO, Eduardo Borges de. Qualidade
                  de medicamentos isentos de prescrição: um estudo com marcas de
                  dipirona comercializadas em uma drogaria de Cascavel (PR,
                  Brasil). Ciência&SaúdeColetiva, Pr, v. 11, n. 1, p.467-3476,
                  jan. 2010.{' '}
                </p>

                <input
                  type='text'
                  className='form-pergunta'
                  placeholder='Sua resposta'
                />
              </div>

              <div className='content-pergunta my-5'>
                <h5>Referência 3</h5>
                <p>
                  KÖHLER, Luis Fernando et al. Avaliação biofarmacotécnica e
                  perfil de dissolução de comprimidos de dipirona: equivalências
                  farmacêutica entre medicamentos de referência, genéricos e
                  similares. Revista Brasileira de Farmácia, [S.l.], v. 90, n.4,
                  p. 309-315, 2009.{' '}
                </p>

                <input
                  type='text'
                  className='form-pergunta'
                  placeholder='Sua resposta'
                />
              </div>
            </article>
          </div>
        </section>

        <div className='d-flex align-items-center justify-content-center proximo-passo'>
          <Link
            to='/seja-provedor/cadastro-provedor/candidatar'
            className='btn-patterns-next'
          >
            Próximo passo
          </Link>
        </div>
      </div>
    </>
  )
}
