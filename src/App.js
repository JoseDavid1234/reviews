import React from "react";
import Review from "./Review";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [mensaje, setMensaje] = useState("");

  async function fetchFunctionHola() {
    const response = await axios.get(
      "https://funcion-hola-mundo-u7nfcrh3jq-uc.a.run.app"
    );
    console.log(response);
    setLoading(false);
    return response.data;
  }

  useEffect(() => {
    fetchFunctionHola().then((e) => {
      setMensaje(e);
    });
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    );
  }
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>{mensaje}</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
