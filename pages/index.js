import { useEffect, useState } from "react";

const Home = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const handleSSE = (event) => {
      setText(event.data);
    };

    const eventSource = new EventSource("/events");
    eventSource.addEventListener("message", handleSSE);

    return () => {
      eventSource.close();
    };
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSave = () => {
    fetch("/update-text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
  };

  return (
    <div>
      <textarea rows="10" cols="30" value={text} onChange={handleChange} />
      <br />
      <button onClick={handleSave}>Salvar</button>
    </div>
  );
};

export default Home;
