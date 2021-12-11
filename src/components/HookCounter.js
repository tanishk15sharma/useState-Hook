import React, { useState } from "react";

// const [state, setstate] = useState(initialState)

function HookCounter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Count {count} </button>;
}

export default HookCounter;
