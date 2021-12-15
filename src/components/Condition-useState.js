import React, { useState } from "react";
import "./ConditionOutput.css";

function MaxWords() {
  const [word, setWord] = useState("");
  const [length, setLength] = useState(0);

  const clickHandler = () => {
    if (length < 10) {
      alert("Atleast 10 character should present  ");
    } else {
      alert("passowrd is saved");
    }
  };

  return (
    <div>
      <input
        placeholder="password"
        type="text"
        value={word}
        onChange={(e) => {
          setWord(e.target.value);
          setLength(e.target.value.length);
        }}
      />

      <h1 className={length > 15 ? "counter" : ""}>{length}</h1>
      <button onClick={clickHandler}>CLICK</button>
    </div>
  );
}

export default MaxWords;
