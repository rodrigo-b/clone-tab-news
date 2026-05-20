export default async function handler(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Parabeeens Lucila 🍻</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700;800&display=swap" rel="stylesheet">

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Baloo 2', cursive;
      background: linear-gradient(135deg, #ffdd00 0%, #f6b300 45%, #e0181f 100%);
      min-height: 100vh;
      overflow-x: hidden;
      color: #fff;
      position: relative;
    }

    body::before {
      content: "";
      position: fixed;
      inset: 0;
      background:
        radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12), transparent 20%),
        radial-gradient(circle at 80% 30%, rgba(255,255,255,0.08), transparent 20%),
        radial-gradient(circle at 50% 80%, rgba(255,255,255,0.10), transparent 20%);
      pointer-events: none;
    }

    .hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 50px 20px 80px;
      text-align: center;
      position: relative;
      z-index: 2;
    }

    .badge {
      background: #e0181f;
      color: #ffeb3b;
      padding: 12px 28px;
      border-radius: 999px;
      font-size: 1.2rem;
      font-weight: 800;
      letter-spacing: 1px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.25);
      transform: rotate(-3deg);
      margin-bottom: 25px;
    }

    h1 {
      font-size: clamp(3rem, 8vw, 6.5rem);
      line-height: 0.95;
      font-weight: 800;
      text-transform: uppercase;
      color: #fffbe7;
      text-shadow:
        0 6px 0 #d91c23,
        0 12px 20px rgba(0,0,0,0.35);
      margin-bottom: 20px;
    }

    .sub {
      max-width: 850px;
      font-size: clamp(1.1rem, 2vw, 1.6rem);
      background: rgba(255,255,255,0.12);
      backdrop-filter: blur(8px);
      border: 2px solid rgba(255,255,255,0.25);
      border-radius: 24px;
      padding: 20px 24px;
      line-height: 1.5;
      box-shadow: 0 15px 40px rgba(0,0,0,0.25);
    }

    .gallery {
      margin-top: 45px;
      width: min(1100px, 95%);
      position: relative;
    }

    .photo-card {
      position: relative;
      border-radius: 32px;
      overflow: hidden;
      border: 8px solid #ffe600;
      box-shadow:
        0 20px 60px rgba(0,0,0,0.35),
        0 0 0 10px #d91c23;
      transform: rotate(-1deg);
    }

    .photo-card img {
      width: 100%;
      display: block;
    }

    .ribbon {
      position: absolute;
      bottom: 25px;
      left: 50%;
      transform: translateX(-50%) rotate(-2deg);
      background: #e0181f;
      color: #ffe600;
      font-size: clamp(1.3rem, 3vw, 2.4rem);
      font-weight: 800;
      padding: 14px 28px;
      border-radius: 18px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
      white-space: nowrap;
    }

    .floating {
      position: absolute;
      font-size: clamp(2rem, 5vw, 4rem);
      animation: bounce 4s infinite ease-in-out;
      opacity: 0.9;
    }

    .f1 { top: 8%; left: 6%; }
    .f2 { top: 18%; right: 8%; animation-delay: 1s; }
    .f3 { bottom: 10%; left: 10%; animation-delay: 2s; }
    .f4 { bottom: 15%; right: 12%; animation-delay: 1.5s; }

    @keyframes bounce {
      0%,100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-18px) rotate(8deg); }
    }

    footer {
      margin-top: 40px;
      font-size: 1rem;
      opacity: 0.95;
      letter-spacing: 0.5px;
    }

    @media (max-width: 768px) {
      .ribbon {
        white-space: normal;
        width: 90%;
      }

      .photo-card {
        transform: none;
      }
    }
  </style>
</head>
<body>

  <div class="floating f1">🍺</div>
  <div class="floating f2">🎉</div>
  <div class="floating f3">🥳</div>
  <div class="floating f4">🍻</div>

  <section class="hero">
    <div class="badge">FESTA MODO TURBINADO</div>

    <h1>Parabeeens<br>Lucila 🎉</h1>

    <div class="sub">
      Hoje o churrasco virou carnaval líquido, o cooler entrou em estado de euforia e a resenha atingiu níveis históricos 🍺✨<br><br>
      Que nunca faltem risadas, amigos reunidos e aquele brinde caprichado pra celebrar você. Bora aproveitar porque hoje o universo inteiro está em clima de comemoração!
    </div>

    <div class="gallery">
      <div class="photo-card">
        <img src="/mrod.png" alt="Foto da comemoração" />
      </div>
    </div>

    <footer>
      Feito com espuma, confete e energia de sexta-feira ☀️🍻
    </footer>
  </section>

</body>
</html>

  `);
}
