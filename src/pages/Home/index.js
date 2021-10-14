import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="image-banner">
      <div className="bg-primary">
          <div class="container">
            <section>
              <article class="d-flex">
                <div class="content  col-6">
                  <h2 class="font-weight-500">
                    A plataforma número um para consultoria de TCC.
                  </h2>
                  <p>
                    Com a Alvo, você tem a tranquilidade e segurança para conquistar
                    a tão sonhada aprovação!
                  </p>
                  <div class="d-flex align-items-center mt-2">
                    <a href="" class="mr-2 btn-patterns">
                      Criar minha conta
                    </a>
                    <a href="" class="link-conta">
                      Ja tenho conta!
                    </a>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </div>
    </div>
  );
}
