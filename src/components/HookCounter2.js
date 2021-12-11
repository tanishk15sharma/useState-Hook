import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((previousCount) => previousCount + 1);
    }
  };

  return (
    <div>
      count :{count}
      <button onClick={() => setCount(initialCount)}>RESET</button>
      <button onClick={() => setCount((previousCount) => previousCount + 1)}>
        Increase
      </button>
      <button onClick={() => setCount((previousCount) => previousCount - 1)}>
        Decrease
      </button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
}

export default HookCounterTwo;
