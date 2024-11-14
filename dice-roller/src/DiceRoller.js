import React, { useState } from "react";

function DiceRoller() {
  const [roll, setRoll] = useState(null);

  // Step 3: Function to roll the dice
  const rollDice = () => {
    const newRoll = Math.floor(Math.random() * 6) + 1;
    setRoll(newRoll);
  };

  return (
    <div>
      <button onClick={rollDice}>Roll the Dice</button>
      {roll && <p>You rolled: {roll}</p>}
    </div>
  );
}

export default DiceRoller;
