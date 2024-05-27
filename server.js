const { createServer } = require("http");
const next = require("next");
const dotenv = require("dotenv");
const fs = require("fs");

// Carregar variáveis de ambiente de um arquivo .env, se disponível
dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = createServer((req, res) => {
    if (req.url === "/events") {
      // Configurar cabeçalhos para SSE
      res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      });

      // Configurar um intervalo para enviar atualizações periódicas (opcional)
      const intervalId = setInterval(() => {
        const text = fs.readFileSync("data.txt", "utf8");
        res.write(`data: ${text}\n\n`);
      }, 1000);

      // Lidar com fechamento da conexão
      req.on("close", () => {
        clearInterval(intervalId);
        res.end();
      });
    } else {
      handle(req, res);
    }
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
