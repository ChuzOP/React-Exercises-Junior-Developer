import React from "react";
import "./ex5.css";

const Ex5 = () => {
  const animales = [
    "gato",
    "perro",
    "pato",
    "helicoptero",
    "pikachu",
    "raichu",
  ];
  return (
    <div className="ex-5">
      <div className="listas">
        {animales.map((animal) => (
          <li key={animal} className="lis">{animal} </li>
        ))}
      </div>
    </div>
  );
};

export default Ex5;
