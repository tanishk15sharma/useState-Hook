import React, { useState } from "react";

function Addfunction() {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [displayValue, setDisplayValue] = useState(0);

  const addValues = () => {
    // if (value2 !== null && value1 !== null) {
    setDisplayValue(Number(value1) + Number(value2));
    // }

    // value2 !== null ? setDisplayValue(Number(value1) + Number(value2)) : "";
  };

  return (
    <div>
      <input
        type="number"
        placeholder="value1"
        value={value1}
        onChange={(e) => {
          setValue1(e.target.value);
          //   addValues();
        }}
      />
      <input
        type="number"
        placeholder="value2"
        value={value2}
        onChange={(e) => {
          setValue2(e.target.value);
          //   addValues();
        }}
      />
      <button onClick={addValues}>click</button>
      <h1> The Addition is : {displayValue} </h1>
    </div>
  );
}

export default Addfunction;
