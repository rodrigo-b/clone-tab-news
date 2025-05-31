export default async function handler(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
    <html>
      <head><title>Chest Image</title></head>
      <body style="display: flex; justify-content: center; align-items: center; height: 100vh;">
        <img src="/chest.jpg" alt="Chest" style="max-width: 100%; height: auto;" />
      </body>
    </html>
  `);
}
