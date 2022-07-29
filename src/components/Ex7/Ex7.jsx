/* eslint-disable eqeqeq */
import React, { useState } from "react";
import "./ex7.css";

const Ex7 = ({ values }) => {
  const [newValues, setNewValues] = useState({
    userName: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newValues.userName || !newValues.password) {
      alert("Parametros vacios...!");
    } else if (
      values.userName == newValues.userName &&
      values.password == newValues.password
    ) {
      alert(
        `${"Hola de nuevo"} ${newValues.userName}, ${"tu contraseña era: "} ${
          newValues.password
        } `
      );
      setNewValues("");
    } else {
      alert("Quién eres?");
    }
  };
  const handleChange = (e) => {
    setNewValues({ ...newValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="ex7">
      <div className="login">
        <h2>Login</h2>
        <form className="formulario" onSubmit={handleSubmit}>
          <label>User:</label>
          <input
            type="text"
            placeholder="Insert User name"
            className="inputs"
            id="1"
            onChange={handleChange}
            name="userName"
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Insert password"
            className="inputs"
            id="2"
            onChange={handleChange}
            name="password"
          />
          <button className="ea">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Ex7;
