/* eslint-disable eqeqeq */
/* eslint-disable no-eval */
import React, { useState } from "react";
import "./ex9.css";

const Ex9 = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ["+", "-", "*", "/", "."];

  const updateCalc = (value) => {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };
  const calculator = () =>{
    setCalc(eval(calc).toString());
    setResult(null);
  };

  const deleteCalc = () =>{
    if (calc == '') {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
    if (value == "") {
      setResult("");
    }
  }

  const reset = () =>{
    setCalc("");
    setResult("");
  }
  return (
    <div className="ex9">
      <div className="calculator">
        <header className="display">
          {result ? <h1>({result})</h1> : ""}
          <h1>{calc || "0"}</h1>
        </header>
        <div className="buttons">
          <button onClick={reset} className="botones-item AC">AC</button>
          <button onClick={deleteCalc} className="botones-item">DEL</button>
          <button onClick={() => updateCalc("/")} className="botones-item">
            ÷
          </button>
          <button onClick={() => updateCalc("7")} className="botones-item">
            7
          </button>
          <button onClick={() => updateCalc("8")} className="botones-item">
            8
          </button>
          <button onClick={() => updateCalc("9")} className="botones-item">
            9
          </button>
          <button onClick={() => updateCalc("*")} className="botones-item">
            X
          </button>
          <button onClick={() => updateCalc("4")} className="botones-item">
            4
          </button>
          <button onClick={() => updateCalc("5")} className="botones-item">
            5
          </button>
          <button onClick={() => updateCalc("6")} className="botones-item">
            6
          </button>
          <button onClick={() => updateCalc("-")} className="botones-item">
            -
          </button>
          <button onClick={() => updateCalc("1")} className="botones-item">
            1
          </button>
          <button onClick={() => updateCalc("2")} className="botones-item">
            2
          </button>
          <button onClick={() => updateCalc("3")} className="botones-item">
            3
          </button>
          <button onClick={() => updateCalc("+")} className="botones-item">
            +
          </button>
          <button onClick={() => updateCalc("0")} className="botones-item cero">
            0
          </button>
          <button onClick={() => updateCalc(".")} className="botones-item">
            .
          </button>
          <button onClick={calculator} className="botones-item">=</button>
        </div>
      </div>
    </div>
  );
};

export default Ex9;
