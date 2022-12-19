import React from "react";
import ScientificCalculator from "./Calculators/ScientificCalculator";
import SimpleCalculator from "./Calculators/SimpleCalculator";

const Calculator = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <SimpleCalculator />
      <ScientificCalculator />
    </div>
  );
};

export default Calculator;
