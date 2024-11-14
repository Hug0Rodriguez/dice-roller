// Dependencies
import React from "react";
import DiceRoller from "./DiceRoller";

// Styles
import "./tailwind.output.css";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-500">
      <h2 className="text-center text-4xl font-bold text-blue-900">
        Hugo Dice Roller
      </h2>
      <div className="text-center">
        Good Luck
        <DiceRoller />
      </div>
    </div>
  );
};

export default App;
