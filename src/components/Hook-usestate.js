import React, { useState } from "react";

function HookInput() {
  const [input, setInput] = useState("");
  const [showOutput, setshowOutput] = useState(false);

  return (
    <div>
      <label>Name:</label>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => setshowOutput(true)}>Click</button>
      <h1> {showOutput && input} </h1>
    </div>
  );
}
export default HookInput;
