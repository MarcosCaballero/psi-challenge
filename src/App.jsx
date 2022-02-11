import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    username: "", // string
    heigh: undefined, // number
    age: undefined, // number
    weigth: undefined, // number
  });
  const [result, setResult] = useState({ imc: 0, tipoP: "" });
  const [message, setMessage] = useState("");

  // handlerChange
  const handlerChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // handlerSubmit
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!data.username || !data.heigh || !data.age || !data.weigth) {
      setMessage("¡Todos los campos son requeridos!");
    } else {
      const imc = data.weigth / (data.heigh * data.heigh);
      if (imc > 25) {
        setResult({ imc, tipoP: " sobrepeso" });
      } else if (imc < 20) {
        setResult({ imc, tipoP: " bajo peso" });
      } else {
        setResult({ imc, tipoP: " peso ideal" });
      }
    }
  };

  // handlerReset
  const handlerReset = () => {
    setMessage("");
    setResult({ imc: 0, tipoP: "" });
    setData({
      username: "",
      heigh: undefined,
      age: undefined,
      weigth: undefined,
    });
  };

  return (
    <div className="container">
      {result.imc ? (
        <div className="modal-container">
          <h1>Resultado IMC</h1>
          <p>
            {data.username}, tenés{result.tipoP}
          </p>
          <button onClick={handlerReset}>Hacer otro calculo</button>
        </div>
      ) : (
        <div className="modal-container">
          <h1>Calculo Indice de Masa Corporal</h1>
          <form onSubmit={handlerSubmit}>
            <div className="field">
              <label htmlFor="username">Nombre:</label>
              <input
                type="text"
                name="username"
                placeholder="Marcos"
                value={data.username}
                onChange={handlerChange}
              />
            </div>
            <div className="field">
              <label htmlFor="high">Estatura:</label>
              <input
                type="number"
                name="heigh"
                placeholder="1.70"
                value={data.heigh}
                onChange={handlerChange}
              />
            </div>
            <div className="field">
              <label htmlFor="age">Edad:</label>
              <input
                type="number"
                name="age"
                placeholder="20"
                value={data.age}
                onChange={handlerChange}
              />
            </div>
            <div className="field">
              <label htmlFor="weigth">Peso:</label>
              <input
                type="number"
                name="weigth"
                placeholder="78"
                value={data.weigth}
                onChange={handlerChange}
              />
            </div>

            <h4>{message}</h4>

            <button>Calcular IMC</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
