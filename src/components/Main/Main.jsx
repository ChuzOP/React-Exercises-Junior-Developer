import "./main.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Ex1 from "../Ex1/Ex1";
import Ex2 from "../Ex2/Ex2";
import Ex3 from "../Ex3/Ex3";
import Ex4 from "../Ex4/Ex4";
import Ex5 from "../Ex5/Ex5";
import Ex6 from "../Ex6/Ex6";
import Ex7 from "../Ex7/Ex7";
import Ex8 from "../Ex8/Ex8";
import Ex9 from "../Ex9/Ex9";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home";
import { useState } from "react";

const Main = () => {
  const [values, setValues] = useState({
    userName: "",
    password: "",
  });
  return (
    <Router>
      <header className="header">{!!values.userName ? <h1>Bienvenido {values.userName}!</h1> : <h1>Hola.... (?)</h1> }</header>
      <div className="main">
        <div className="side-bar">
          <div className="items-sidebar">
            <Link to="">Home</Link>
            <Link to="ex-1">Hello World</Link>
            <Link to="ex-2">Click me!</Link>
            <Link to="ex-3">Buttons</Link>
            <Link to="ex-4">Counter</Link>
            <Link to="ex-5">Animals</Link>
            <Link to="ex-6">Sign Up</Link>
            <Link to="ex-7">Login</Link>
            <Link to="ex-8">Fetch API</Link>
            <Link to="ex-9">Calculator</Link>
          </div>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ex-1" element={<Ex1 />} />
            <Route path="/ex-2" element={<Ex2 />} />
            <Route path="/ex-3" element={<Ex3 />} />
            <Route path="/ex-4" element={<Ex4 />} />
            <Route path="/ex-5" element={<Ex5 />} />
            <Route path="/ex-6" element={<Ex6 values={values} setValues={setValues}/>} />
            <Route path="/ex-7" element={<Ex7 values={values}/>} />
            <Route path="/ex-8" element={<Ex8 />} />
            <Route path="/ex-9" element={<Ex9 />} />
            <Route path="/error" element={<Error />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Main;
