import "./App.css";
import React from "react";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounter2";
import HookCounter3 from "./components/HookCounter3";
import ArrayList from "./components/Hook-Array";
import HookInput from "./components/Hook-usestate";
import FormHandler from "./components/Form-useState";
import Addfunction from "./components/Add-useState";
import MaxWords from "./components/Condition-useState";
import PasswordHandler from "./components/PasswordCheck";

function App() {
  return (
    <div className="App">
      <PasswordHandler />
      {/* <MaxWords /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter3 /> */}
      {/* <ArrayList /> */}
      {/* <HookInput /> */}
      {/* <FormHandler /> */}
      {/* <Addfunction /> */}
    </div>
  );
}

export default App;
