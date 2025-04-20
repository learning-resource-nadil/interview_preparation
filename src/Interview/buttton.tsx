import React, { useState } from "react";
function ValueButtton() {
  const [increment, setIncrement] = useState(0);

  const handleIncrement = () => {
    setIncrement(increment + 1);
  };

  const handleDecrement = () => {
    setIncrement(increment - 1);
  };
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <div>value is :{increment}</div>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}
export default ValueButtton;
