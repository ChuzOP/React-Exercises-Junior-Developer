import React from "react";
import "./ex6.css";

const Ex6 = ({ values, setValues }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.userName || !values.password) {
      alert("Parametros vacios...!");
    } else {
      alert(
        `${"Hola"} ${values.userName}, ${"tu contraseña es: "} ${
          values.password
        } `
      );
    }
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="ex6">
      <div className="signup">
        <h2 className="title-item">Sing Up</h2>
        <form className="formulario" onSubmit={handleSubmit}>
          <label>User:</label>
          <input
            type="text"
            placeholder="Insert User name"
            className="inputs"
            id="3"
            onChange={handleChange}
            name="userName"
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Insert password"
            className="inputs"
            id="4"
            onChange={handleChange}
            name="password"
          />
          <button className="ea">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Ex6;
