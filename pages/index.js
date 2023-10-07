function Home() {
  return;
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>Níver</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      ></link>
      <header>
        <div class="navbar navbar-dark bg-dark box-shadow">
          <div class="container d-flex justify-content-between">
            <button
              class="navbar-toggler collapsed"
              type="button"
              data-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>
    </head>
    <body>
      <main role="main">
        <section class="jumbotron text-center">
          <div class="container border-bottom">
            <h1 class="jumbotron-heading mb-3 mt-3">Iniciativa Bebedores</h1>
            <img
              class="img-thumbnail mb-3"
              src="./pegueiAReferencia.jpg"
              alt="capitao america"
            />
            <p class="lead text-muted">
              Agora você tem a missão de beber junto comigo , menos a
              Leticia(que vai ser mamãe da Helena). Boora rachar o coco! no dia
              <b>21/10 - Sábado</b>
            </p>

            <p class="lead text-dark">Aqui estão os dados do local!</p>
          </div>
        </section>
        <section>
          <div class="container border-bottom">
            <p>
              <b>Busca no Google:</b>
              <a href="https://www.google.com/search?q=venezas+bar&sca_esv=571571458&rlz=1C1VDKB_pt-PTBR1070BR1070&ei=A34hZYqXL8Pc1sQP-PSc2AU&ved=0ahUKEwjKpNTopOSBAxVDrpUCHXg6B1sQ4dUDCBA&uact=5&oq=venezas+bar&gs_lp=Egxnd3Mtd2l6LXNlcnAiC3ZlbmV6YXMgYmFyMgsQLhivARjHARiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyGhAuGK8BGMcBGIAEGJcFGNwEGN4EGOAE2AEDSLETUOkFWPURcAN4AZABAJgBpgGgAZoLqgEEMC4xMbgBA8gBAPgBAcICChAAGEcY1gQYsAPCAgoQABiKBRiwAxhDwgIOEAAY5AIY1gQYsAPYAQHCAhYQLhivARjHARiKBRjIAxiwAxhD2AECwgIWEC4YigUYxwEYrwEYyAMYsAMYQ9gBAsICDRAuGIoFGMcBGK8BGEPCAgcQLhiKBRhDwgILEC4YgAQYsQMYgwHCAggQABiABBixA8ICERAuGIAEGLEDGIMBGMcBGNEDwgIHEAAYigUYQ8ICCxAuGIoFGLEDGIMBwgILEAAYgAQYsQMYgwHCAhwQLhiKBRjHARivARhDGJcFGNwEGN4EGOAE2AEDwgILEAAYigUYsQMYgwHCAgsQLhiABBixAxjUAsICCBAuGIAEGLEDwgIIEC4YsQMYgATCAhEQLhiABBixAxiDARjHARivAcICBRAuGIAEwgILEC4YgAQYxwEYrwHCAgcQABiABBgK4gMEGAAgQYgGAZAGEboGBggBEAEYCboGBggCEAEYCLoGBggDEAEYFA&sclient=gws-wiz-serp">
                Venezas Bar
              </a>
            </p>
            <p class="text-dark text-left">
              {" "}
              <b>Opções de serviço</b>: Refeição no local{" "}
            </p>
            <p class="text-dark text-left">
              <b>Endereço</b>: R. Brg. Jordão, 294 - Ipiranga, São Paulo - SP,
              04210-000
            </p>
            <p class="text-dark text-left">
              <b>Telefone</b>: (11) 2914-1284
            </p>
            <p class="text-dark text-left">
              <b>Horário de funcionamento</b>:13:00 às 23:00
            </p>
          </div>
        </section>

        <section class="jumbotron text-center">
          <div class="container border-bottom">
            <h1 class="jumbotron-heading mb-3 mt-3">Conto com Você!</h1>
            <img
              class="rounded float-right w-25 p-3 h-25 d-inline-block"
              src="./contoComVoce.jpg"
              alt="JHO"
            />
          </div>
        </section>
      </main>
    </body>
  </html>;
}

export default Home;
