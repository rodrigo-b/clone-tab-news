const { createServer } = require("http");
const next = require("next");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = createServer((req, res) => {
    if (req.url === "/events") {
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
    } else if (req.url === "/update-text" && req.method === "POST") {
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
      handle(req, res);
    }
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
