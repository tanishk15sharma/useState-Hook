import "./App.css";
import React from "react";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounter2";
import HookCounter3 from "./components/HookCounter3";
import ArrayList from "./components/Hook-Array";
import HookInput from "./components/Hook-usestate";

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter3 /> */}
      {/* <ArrayList /> */}
      <HookInput />
    </div>
  );
}

export default App;
