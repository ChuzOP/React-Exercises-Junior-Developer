import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home">
        <h1 className="home-items">Ejercicios React JS</h1>
        <h2 className="home-items">
          Estos son algunos ejercicios que todo programador <br /> junior
          frontend deberia saber
        </h2>
        <p className="home-items">
          Estos ejerecicios fueron hechos con ReactJS y CSS Grid
        </p>
        <h3 className="home-items-end">-Miguel García Jul 2022</h3>
      </div>
    </div>
  );
};

export default Home;
