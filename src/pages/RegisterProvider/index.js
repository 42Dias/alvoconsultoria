import { Link } from 'react-router-dom'
import circle from './../img/cicle.svg'
import * as S from './styles/styles'
import * as C from './../../styles/global'

export default function RegisterProvider() {
  return (
    <>
      <S.Banner>
        <S.ContainerBanner>
          <S.ContentBanner>
            <h1>Teste para seleção:</h1>
            <h2>Formatação de artigos</h2>
            <S.Border />
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
          </S.ContentBanner>
          <img src={circle} alt='' />
        </S.ContainerBanner>
      </S.Banner>

      <S.Container>
        <S.FormattingStandards>
          <C.Container>
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
          </C.Container>
        </S.FormattingStandards>
      </S.Container>

      <hr />

      <S.FormattingStandardsContainer>
        <C.Container>
          <article className='m-0 col-sm-12 col-md-10 col-lg-12'>
            <h2>Exemplos</h2>
            <div className='d-flex justify-content-between flex-xs-column flex-md-column flex-lg-row'>
              <div className='p-0 col-sm-12 padding-exemplos col-md-12 col-lg-5'>
                <strong>a) LIVRO</strong>
                <p>
                  Acha PN, Szyfres B. Zoonosis y enfermedades transmisibles
                  comunes al hombre y a los animales. 2ª ed. Washington:
                  Organizacion Panamericana de la Salud; 1989.
                </p>
                <strong>b) CAPÍTULO DE LIVRO</strong>
                <p>
                  Almeida JP, Rodriguez TM, Arellano JLP. Exantemas infecciosos
                  infantiles. In: Arellano JLP, Blasco AC, Sánchez MC, García
                  JEL, Rodríguez FM, Álvarez AM, editores. Guía de autoformación
                  en enfermedades infecciosas. Madrid: Panamericana; 1996. p.
                  1155-68.
                </p>
                <strong> c) ARTIGO</strong>
                <p>
                  Azevêdo ES, Fortuna CMM, Silva KMC, Sousa MGF, Machado MA,
                  Lima AMVMD, et al. Spread and diversity of human populations
                  in Bahia, Brazil. Human Biology. 1982;54:329-41.
                </p>
              </div>
              <div className='p-0 col-sm-12 padding-exemplos col-md-12 col-lg-5'>
                <strong>D) TESE E DISSERTAÇÃO</strong>

                <p>
                  Santos-Neto L, Muniz-Junqueira I, Tosta CE. Infecção por
                  Plasmodium vivax não apresenta disfunção endotelial e aumento
                  de fator de necrose tumoral-a (FNT-a) e interleucina-1b
                  (IL-1b). In: Anais do 30º Congresso da Sociedade Brasileira de
                  Medicina Tropical. Salvador, Bahia; 1994. p. 272.
                </p>
                <strong>e) CAPÍTULO DE LIVRO</strong>
                <p>
                  Almeida JP, Rodriguez TM, Arellano JLP. Exantemas infecciosos
                  infantiles. In: Arellano JLP, Blasco AC, Sánchez MC, García
                  JEL, Rodríguez FM, Álvarez AM, editores. Guía de autoformación
                  en enfermedades infecciosas. Madrid: Panamericana; 1996. p.
                  1155-68.
                </p>
                <strong> f) ARTIGO</strong>
                <p>
                  Formato:Autor(es). Título [suporte]. Local de
                  publicação:Editora; Ano. [data de acesso com a expressão
                  “citado em”]. Endereço do site com a expressão “Disponível
                  em:” .
                </p>
              </div>
            </div>
          </article>
        </C.Container>
      </S.FormattingStandardsContainer>

      <hr />

      <S.FormattingStandardsContainer>
        <S.FormattingStandards>
          <C.Container>
            <article className='colsm-12  col-md-10 col-lg-10'>
              <h2>Exemplo de texto</h2>
              <p>
                Sangenis LFC, Oliveira EFR, Carreiro HJS, editores. Formação de
                professores para uma educação plural e democrática: narrativas,
                saberes, práticas e políticas educativas na América Latina
                [Internet]. Rio de Janeiro: EdUERJ; 2018. [citado em 2019 set.
                2]. Disponível
                em:http://books.scielo.org/id/ngnq4/pdf/sangenis-9788575114841.pdf.
                <br />
                <br />
                Não incluir nas Referências material não-publicado ou informação
                pessoal. Nestes casos, assinalar no texto: (i) Antunes Filho FF,
                Costa SD: dados não-publicados; ou (ii) Silva JA: comunicação
                pessoal, 1997. Todavia, se o trabalho citado foi aceito para
                publicação, incluí-lo entre as referências, citando os registros
                de identificação necessários (autores, título do trabalho ou
                livro e periódico ou editora), seguido da expressão latina In
                press e o ano.
                <br />
                <br />
                Quando o trabalho encaminhado para publicação tiver a forma de
                relato de investigação epidemiológica, relato de fato histórico,
                comunicação, resumo de trabalho final de curso de pós-graduação,
                relatórios técnicos, resenha bibliográfica e carta ao editor,
                o(s) autor(es) deve(m) utilizar linguagem objetiva e concisa,
                com informações introdutórias curtas e precisas, delimitando o
                problema ou a questão objeto da investigação. Seguir as
                orientações para referências, ilustrações e tabelas.
                <br />
                <br />
                As notas explicativas são permitidas, desde que em pequeno
                número, e devem ser ordenadas por letras minúsculas em
                sobrescrito.
                <br />
                TABELAS, GRÁFICOS E FIGURAS
                <br />
                Obrigatoriamente, os arquivos das ilustrações (quadros,
                gráficos, fluxogramas, fotografias, organogramas etc.) e tabelas
                devem encaminhados em arquivo independentes; suas páginas não
                devem ser numeradas. Estes arquivos devem ser compatíveis com
                processador de texto “Word for Windows” (formatos: PICT, TIFF,
                GIF, BMP).
                <br />
                O número de ilustrações e tabelas deve ser o menor possível.
                <br />
                Na seção resultados, as ilustrações e tabelas devem ser
                numeradas com algarismos arábicos, por ordem de aparecimento no
                texto, e seu tipo e número destacados em negrito (e.g. “[...] na
                Tabela 2 as medidas [...]).
                <br />
                No corpo das tabelas, não utilizar linhas verticais nem
                horizontais; os quadros devem ser fechados.
                <br />
                Os títulos das ilustrações e tabelas devem ser objetivos, situar
                o leitor sobre o conteúdo e informar a abrangência geográfica e
                temporal dos dados, segundo Normas de Apresentação Tabular do
                IBGE (e.g.: Gráfico 2. Número de casos de AIDS por região
                geográfica – Brasil – 1986-1997).
                <br />
                Ilustrações e tabelas reproduzidas de outras fontes já
                publicadas devem indicar esta condição após o título.
                <br />
                (Baseado nas normas de formatação da Revista Baiana de saúde
                pública)
              </p>
            </article>
          </C.Container>
        </S.FormattingStandards>
      </S.FormattingStandardsContainer>

      <S.ContentBtn>
        <Link
          to='/seja-provedor/cadastro-provedor/formatacao'
          className='btn-patterns-next'
        >
          Próximo passo
        </Link>
      </S.ContentBtn>
    </>
  )
}
