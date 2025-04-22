import React, { useState } from "react";
function IncremntValue() {
  const [value, setValue] = useState(0);
  const handleIncremnt =()=>{
    setValue(value+1)

  }
  return <div>
    <p>This vlaue{value}</p>
    <button onClick={handleIncremnt}>
        +
    </button>
  </div>;
}
export default IncremntValue;