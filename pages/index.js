import { useEffect, useState } from "react";
import io from "socket.io-client";

const Home = () => {
  const [text, setText] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Recuperar o texto do armazenamento local ao carregar a página
    const savedText = localStorage.getItem("savedText");
    if (savedText) {
      setText(savedText);
    }

    // Conectar ao servidor WebSocket
    const socket = io("https://underthehood.com.br");
    setSocket(socket);

    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("textChange", (data) => {
      setText(data.text);
      // Salvar o texto atualizado no armazenamento local
      localStorage.setItem("savedText", data.text);
    });

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    // Emitir evento de alteração de texto apenas se houver uma conexão de socket
    // Isso previne que o texto seja perdido se a conexão com o servidor não estiver estabelecida
    if (socket) {
      socket.emit("textChange", { text: newText });
      // Salvar o texto atualizado no armazenamento local
      localStorage.setItem("savedText", newText);
    }
  };

  return (
    <div>
      <textarea rows="10" cols="30" value={text} onChange={handleChange} />
    </div>
  );
};

export default Home;
