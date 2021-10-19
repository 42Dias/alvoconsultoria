import { Link } from 'react-router-dom'
import * as S from './styles/style'
import * as C from './../../styles/global'

export default function BeProvider() {
  return (
    <>
      <S.Banner>
        <C.Container>
          <S.ContentBanner>
            <h1>Seja Bem vindo!</h1>
            <S.BorderProvider />
            <p>
              Na Alvo Consultoria, prezamos pela excelência dos trabalhos
              prestados. Desta forma, ao prestarmos um serviço, observamos todos
              os detalhes, de modo a deixá-lo impecável! Dito isso, a seguir
              será apresentado um texto tpara realização de correção
              ortográfica, a fim de verificar sua qualificação para exercer o
              serviço que deseja!
              <br />
              <br />
              Trata-se apenas de um teste, e o resultado com feedback será
              enviado ao seu e-mail no prazo de 15 dias.
              <br />
              <br />
              Os dados informados serão utilizados apenas para fins de avaliação
              interna e não serão utilizados de outras maneiras sem prévia
              autorização.
            </p>
          </S.ContentBanner>
        </C.Container>
      </S.Banner>

      <C.Container>
        <S.ContentForm>
          <S.ContentTitle>
            <h2>Preencha os campos abaixo:</h2>
            <S.BorderProvider />
          </S.ContentTitle>

          <S.FormBox>
            <S.GridForm>
              <S.ContainerGrid>
                <S.FormGroup>
                  <input
                    placeholder='Nome completo'
                    type='text'
                    id='nome'
                    className='form-custom'
                  />
                </S.FormGroup>
                <S.FormGroup>
                  <input
                    placeholder='Email'
                    type='text'
                    id='Email'
                    className='form-custom'
                  />
                </S.FormGroup>
                <S.FormGroup>
                  <input
                    placeholder='Data de nascimento'
                    type='text'
                    id='data'
                    className='form-custom'
                  />
                </S.FormGroup>
                <S.FormGroup>
                  <input
                    placeholder='Senha'
                    type='text'
                    id='senha'
                    className='form-custom'
                  />
                </S.FormGroup>
                <S.FormGroup>
                  <input
                    placeholder='Confirmar senha'
                    type='text'
                    id='conf-senha'
                    className='form-custom'
                  />
                </S.FormGroup>

                <S.SelectCity>
                  <select name='' className='form-select'>
                    <option value=''>Cidade</option>
                  </select>
                  <select name='' className='form-select'>
                    <option value=''>Estado</option>
                  </select>
                </S.SelectCity>
              </S.ContainerGrid>

              <S.ContainerGrid>
                <S.SelectSize>
                  <select name='' className='form-select'>
                    <option value=''>Escolaridade</option>
                  </select>
                  <label>
                    Caso esteja cursando ou tenha finalizado o ensino superior,
                    diga a universidade e curso
                  </label>
                </S.SelectSize>

                <S.SelectSize>
                  <select name='' className='form-select'>
                    <option value=''>Universidade</option>
                  </select>
                  <select name='' className='form-select'>
                    <option value=''>Curso</option>
                  </select>
                </S.SelectSize>
                <label htmlFor=''>
                  Para qual área de atuação você deseja se inscrever?
                </label>
                <S.SelectSize>
                  <select name='' className='form-select'>
                    <option value=''>Seleciona sua área de atuação</option>
                  </select>
                  <label>
                    Caso esteja cursando ou tenha finalizado o ensino superior,
                    diga a universidade e curso
                  </label>
                </S.SelectSize>

                <S.FlexBoxCheck>
                  <label htmlFor='termo'>
                    Estou ciente dos Termos de uso da plataforma.
                  </label>
                  <input type='checkbox' id='termo' name='termo' />
                </S.FlexBoxCheck>
              </S.ContainerGrid>
            </S.GridForm>
            <S.ContentBtn>
              <Link
                to='/seja-provedor/cadastro-provedor'
                className='btn-patterns-submit'
              >
                Continuar cadastro
              </Link>
            </S.ContentBtn>
          </S.FormBox>
        </S.ContentForm>
      </C.Container>
    </>
  )
}
