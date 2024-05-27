import { useEffect, useState } from "react";

const Home = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    // Função para lidar com eventos SSE
    const handleSSE = (event) => {
      setText(event.data);
    };

    // Criar uma nova instância de EventSource para se conectar ao servidor SSE
    const eventSource = new EventSource("/events");
    // Adicionar ouvinte para o evento "message"
    eventSource.addEventListener("message", handleSSE);

    return () => {
      // Fechar a conexão quando o componente é desmontado
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <textarea rows="10" cols="30" value={text} />
    </div>
  );
};

export default Home;
