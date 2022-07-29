import React from "react";
import "./count.css";
const Contador = ({ count, setCount }) => {
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="count">
      <h2 className="number">{count} </h2>
      <div>
        <button className="butoneta" onClick={handleClick}>
          Sumar
        </button>
        <button className="butoneta" onClick={() => setCount(count - 1)}>
          restar
        </button>
        <button className="butoneta" onClick={() => setCount(count * 0)}>
          reiniciar
        </button>
      </div>
    </div>
  );
};

export default Contador;
