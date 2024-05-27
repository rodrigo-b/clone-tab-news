const { createServer } = require("http");
const next = require("next");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

dotenv.config();

const dev = process.env.NODE_ENV;
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

    if (parsedUrl.pathname === "/events") {
      if (req.method === "GET") {
        res.writeHead(200, {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
        });

        const intervalId = setInterval(() => {
          const text = fs.readFileSync("data.txt", "utf8");
          res.write(`data: ${text}\n\n`);
        }, 1000);

        req.on("close", () => {
          clearInterval(intervalId);
          res.end();
        });
      } else {
        res.writeHead(405, { Allow: "GET" });
        res.end();
      }
    } else if (parsedUrl.pathname.startsWith("/_next")) {
      // Servir arquivos estáticos do Next.js
      handle(req, res);
    } else if (parsedUrl.pathname === "/update-text") {
      if (req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });
        req.on("end", () => {
          const { text } = JSON.parse(body);
          fs.writeFileSync("data.txt", text);
          res.end();
        });
      } else {
        res.writeHead(405, { Allow: "POST" });
        res.end();
      }
    } else {
      // Servir páginas do Next.js
      handle(req, res);
    }
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
