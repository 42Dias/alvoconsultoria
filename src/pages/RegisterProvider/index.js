import { Link } from 'react-router-dom'
import './styles/registerprovider.css'
import circle from './../img/cicle.svg'

export default function RegisterProvider() {
  return (
    <>
      <section className='banner'>
        <div className='container content-banner'>
          <article className='content-banner'>
            <h1>Teste para seleção:</h1>
            <h2>Formatação de artigos</h2>
            <span className='border-bottom'></span>
            <p>
              Na Alvo Consultoria, presamos pela excelência dos trabalhos
              prestados. Desta forma, ao prestarmos um serviço, observamos todos
              os detalhes do texto, de modo a deixa-lo impecável!
              <br />
              As formatações são realizadas em Word, de acordo normas
              pré-estabelecidas. A baixo serão realizados questionamentos a
              respeito dos seus conhecimentos sobre Word e capacidade se seguir
              orientações fornecidas para formatar um trabalho.
            </p>
          </article>
          <img src={circle} className='cicle' alt='' />
        </div>
      </section>

      <div className='container'>
        <section className='normas-formatacao mt-5'>
          <article className='colsm-12 col-md-10 col-lg-10'>
            <h2>Normas de Formatação</h2>
            <p>
              Anexar em Documento Original o texto completo: iniciar com o
              título, sem referência a autoria, e acrescentar o resumo de no
              máximo 250 palavras, com versão português, ingles(Abstract) e
              espanhol (Resumen). As palavras RESUMO, ABSTRACT E RESUMEN devem
              ser grafadas em negrito e com todas as letras em maiúsculas.
              Grafar corretamente: Palavras - chave, Keywords e Palavras -
              clave. Trabalhos em espanhol ou em inglês devem também apresentar
              resumo em português.
              <br />
              As referências no corpo do texto deverão ser numeradas em
              sobrescrito, consecutivamente, na ordem em que forem mencionadas a
              primeira vez no texto.
              <br />
              As referências devem aparecer no final do trabalho, listadas pela
              ordem de citação, alinhadas apenas à esquerda da página, seguindo
              as regras propostas pelo Comitê Internacional de Editores de
              Revistas Médicas ( Requisitos uniformes para manuscritos
              apresentados a periódicos biomédicos/ Vancouver), disponíveis em
              http://www.icmje.org ou http://www.abec-editores.com.br.
              <br />
              Quando os autores forem mais de seis (6), indicar apenas os seis
              primeiros, acrescentando a expressão et al.
            </p>
          </article>
        </section>
      </div>

      <hr />

      <section className='container normas-formatacao mt-5'>
        <article className='m-0 col-sm-12 col-md-10 col-lg-12'>
          <h2>Exemplos</h2>
          <div className='d-flex justify-content-between flex-xs-column flex-md-column flex-lg-row'>
            <div className='p-0 col-sm-12  col-md-12 col-lg-5'>
              <strong>a) LIVRO</strong>
              <p>
                Acha PN, Szyfres B. Zoonosis y enfermedades transmisibles
                comunes al hombre y a los animales. 2ª ed. Washington:
                Organizacion Panamericana de la Salud; 1989.
              </p>
              <strong>b) CAPÍTULO DE LIVRO</strong>
              <p>
                Almeida JP, Rodriguez TM, Arellano JLP. Exantemas infecciosos
                infantiles. In: Arellano JLP, Blasco AC, Sánchez MC, García JEL,
                Rodríguez FM, Álvarez AM, editores. Guía de autoformación en
                enfermedades infecciosas. Madrid: Panamericana; 1996. p.
                1155-68.
              </p>
              <strong> c) ARTIGO</strong>
              <p>
                Azevêdo ES, Fortuna CMM, Silva KMC, Sousa MGF, Machado MA, Lima
                AMVMD, et al. Spread and diversity of human populations in
                Bahia, Brazil. Human Biology. 1982;54:329-41.
              </p>
            </div>
            <div className='p-0 col-sm-12  col-md-12 col-lg-5'>
              <strong>a) LIVRO</strong>
              <p>
                Acha PN, Szyfres B. Zoonosis y enfermedades transmisibles
                comunes al hombre y a los animales. 2ª ed. Washington:
                Organizacion Panamericana de la Salud; 1989.
              </p>
              <strong>b) CAPÍTULO DE LIVRO</strong>
              <p>
                Almeida JP, Rodriguez TM, Arellano JLP. Exantemas infecciosos
                infantiles. In: Arellano JLP, Blasco AC, Sánchez MC, García JEL,
                Rodríguez FM, Álvarez AM, editores. Guía de autoformación en
                enfermedades infecciosas. Madrid: Panamericana; 1996. p.
                1155-68.
              </p>
              <strong> c) ARTIGO</strong>
              <p>
                Azevêdo ES, Fortuna CMM, Silva KMC, Sousa MGF, Machado MA, Lima
                AMVMD, et al. Spread and diversity of human populations in
                Bahia, Brazil. Human Biology. 1982;54:329-41.
              </p>
            </div>
          </div>
        </article>
      </section>

      <div className='d-flex align-items-center justify-content-center proximo-passo'>
        <Link
          to='/seja-provedor/cadastro-provedor/formatacao'
          className='btn-patterns-next'
        >
          Próximo passo
        </Link>
      </div>
    </>
  )
}
