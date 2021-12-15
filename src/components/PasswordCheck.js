import React, { useState } from "react";
import "./Password.css";

function PasswordHandler() {
  const [value, setValue] = useState({
    firstInput: "",
    secondInput: "",
  });

  const checkValidity = () => {
    if (value.firstInput === value.secondInput) {
      //   return <h1>Password saved</h1>;
      alert(" ta da !  SUBMITTED");
    } else {
      //   return <h1>Password does not match</h1>;
      alert("Password not matching ");
    }
  };

  return (
    <div className="container">
      <label>Password:</label>
      <input
        type="text"
        className="input1"
        placeholder="password"
        value={value.firstInput}
        // onChange={(e) => setValue(e.target.value)}
        onChange={(e) => setValue({ ...value, firstInput: e.target.value })}
      />

      <label>Re-password:</label>
      <input
        type="text"
        className="input2"
        placeholder="re-password"
        value={value.secondInput}
        // onChange={(e) => setValue(e.target.value)}
        onChange={(e) => setValue({ ...value, secondInput: e.target.value })}
      />
      <button className="sub-btn" onClick={checkValidity}>
        SUBMIT
      </button>
    </div>
  );
}

export default PasswordHandler;
