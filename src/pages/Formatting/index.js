import { Link } from 'react-router-dom'
import * as S from './styles/style'
import * as C from './../../styles/global'
export default function Formatting() {
  return (
    <S.ColorBackground>
      <br />
      <S.BannerFormating>
        <div className='container'>
          <article className='container content-banner-formatting'>
            <h1>Formatação de artigos</h1>
            <S.BorderBottom />
            <S.DownDoc>
              <a href=''>
                Clique aqui para baixar o documento para formatação.
              </a>
            </S.DownDoc>
            <S.AddDoc>
              <a href=''>Clique aqui para anexar seu documento formatado.</a>
            </S.AddDoc>
          </article>
        </div>
      </S.BannerFormating>

      <S.FormattingStandards>
        <C.Container>
          <S.BoxQuestion>
            <h2>
              Abaixo serão listadas algumas referências para você formatar de
              acordo as normas da revista. Elas devem ser padronizadas, ou seja,
              devem seguir o mesmo estilo
            </h2>

            <S.ContentQuestion>
              <h5>Referência 1</h5>
              <p>
                Ministério da Saúde. Agência Nacional de Vigilância Sanitária.
                Resolução RDC nº 31, de 11 de agosto de 2010. Dispõe sobre a
                realização dos Estudos de Equivalência Farmacêutica e de Perfil
                de Dissolução Comparativo. Diário Oficial da República
                Federativa do Brasil, Brasília, 2010c{' '}
              </p>

              <input
                type='text'
                className='form-pergunta'
                placeholder='Sua resposta'
              />
            </S.ContentQuestion>

            <S.ContentQuestion>
              <h5>Referência 2</h5>
              <p>
                KNAPPMANN, André Leandro; MELO, Eduardo Borges de. Qualidade de
                medicamentos isentos de prescrição: um estudo com marcas de
                dipirona comercializadas em uma drogaria de Cascavel (PR,
                Brasil). Ciência&SaúdeColetiva, Pr, v. 11, n. 1, p.467-3476,
                jan. 2010.{' '}
              </p>

              <input
                type='text'
                className='form-pergunta'
                placeholder='Sua resposta'
              />
            </S.ContentQuestion>

            <S.ContentQuestion>
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
            </S.ContentQuestion>
          </S.BoxQuestion>
        </C.Container>
      </S.FormattingStandards>

      <S.ContentBtn>
        <Link
          to='/seja-provedor/cadastro-provedor/candidatar'
          className='btn-patterns-next'
        >
          Próximo passo
        </Link>
      </S.ContentBtn>
    </S.ColorBackground>
  )
}
