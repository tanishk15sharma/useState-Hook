import React, { useState } from "react";

function FormHandler() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [display, setDisplay] = useState(false);

  const handleFirstNameChange = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };
  const handleLastNameChange = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };
  const handleEmailChange = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  return (
    <div>
      <form>
        {display ? <h1>YUP! your are registered successfully </h1> : null}

        <input
          onChange={handleFirstNameChange}
          name="firstName"
          placeholder="FIRST NAME"
          value={values.firstName}
        />
        <input
          onChange={handleLastNameChange}
          name="lastName"
          placeholder="LAST NAME"
          value={values.lastName}
        />
        <input
          name="email"
          placeholder="EMAIL"
          value={values.email}
          onChange={handleEmailChange}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setDisplay(true);
          }}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default FormHandler;
