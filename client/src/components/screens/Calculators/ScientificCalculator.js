import React, { useState } from "react";
import "./ScientificCalculator.css";

const ScientificCalculator = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }

    return digits;
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };
  const deleteLast = () => {
    if (calc == "") {
      return;
    }

    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const sine = () => {
    setCalc(Math.sin(calc));
  };
  const cosine = () => {
    setCalc(Math.cos(calc));
  };
  const tangent = () => {
    setCalc(Math.tan(calc));
  };
  const trigonometry = (value) => {
    switch (value) {
      case "sin":
        setCalc(Math.sin(calc));
        break;
      case "cos":
        setCalc(Math.cos(calc));
        break;
      case "tan":
        setCalc(Math.tan(calc));
        break;
    }
  };
  const resetCalc = () => {
    setCalc("");
    setResult("");
  };

  const productRoot = (value) => {
    switch (value) {
      case "x2":
        let ans = calc * calc;
        setCalc(ans);
        break;
      case "x3":
        setCalc(calc * calc * calc);
        break;
      case "u2":
        setCalc(Math.pow(calc, 1 / 2));
        break;
      case "c3":
        setCalc(Math.pow(calc, 1 / 3));
        break;
    }
  };

  return (
    <>
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""} &nbsp; {calc || "0"}
        </div>

        <div className="operators">
          {/* <button onClick={() => sine()}>sin</button>
          <button onClick={() => cosine()}>cos</button>
          <button onClick={() => tangent()}>tan</button> */}
          <button onClick={() => trigonometry("sin")}>sin</button>
          <button onClick={() => trigonometry("cos")}>cos</button>
          <button onClick={() => trigonometry("tan")}>tan</button>
          {/* <button onClick={() => updateCalc("-")}>-</button> */}

          <button onClick={resetCalc}>AC</button>
        </div>

        <div className="operators">
          <button onClick={() => productRoot("x2")}>
            x<sup>2</sup>
          </button>
          <button onClick={() => productRoot("x3")}>
            x<sup>3</sup>
          </button>
          <button onClick={() => productRoot("u2")}>√</button>
          <button onClick={() => productRoot("c3")}>∛</button>
        </div>

        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>

          <button onClick={deleteLast}>DEL</button>
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </>
  );
};

export default ScientificCalculator;
