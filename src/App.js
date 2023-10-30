import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [piada, setPiada] = useState("");
  const [favoritos, setFavoritos] = useState([]);

  const BuscarPiada = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((response) => {
        setPiada(response.value);
      });
  };

  const PiadaFavoritada = () => {
    setFavoritos((estadoPassado) => {
      return [...estadoPassado, piada];
    });
  };

  const RemoverPiada = (piadaAtual) => {
    setFavoritos((estadoPassado) => {
      return estadoPassado.filter(
        (piadaNaLista) => piadaNaLista !== piadaAtual
      );
    });
  };

  const ListarPiadas = () => {
    return favoritos.map((piada) => {
      return (
        <div>
          <label>{piada}</label>
          <button onClick={() => RemoverPiada(piada)}>Remover</button>
          <br></br>
        </div>
      );
    });
  };

  return (
    <div className="App">
      <div className="piadas-container">
        <h1>Piada Atual</h1>
        <label>{piada}</label>

        <div className="button-container">
          <button onClick={BuscarPiada}>Nova Piada</button>
          <button onClick={PiadaFavoritada}>Favoritar</button>
        </div>
      </div>

      <div className="favoritos-container">
        <h1>Favoritos</h1>
        <label>{ListarPiadas()}</label>
      </div>
    </div>
  );
}
