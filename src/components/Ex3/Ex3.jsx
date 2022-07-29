import React from "react";
import "./ex3.css";

const Ex3 = () => {
  const botones = [
    { name: "Boton 1", description: "Yo no soy un boton" },
    { name: "Boton 2", description: "Yo no se que soy" },
    {
      name: "Boton 3",
      description: "Yo no tengo un concepto de identidad, soy un boton...",
    },
  ];
  return (
    <div className="ex3">
      {botones.map((boton) => (
        <button
          key={boton.name}
          className="botonyepa"
          onClick={() => alert(boton.description)}
        >
          {boton.name}
        </button>
      ))}
    </div>
  );
};

export default Ex3;
