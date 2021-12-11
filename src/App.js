import "./App.css";
import React from "react";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounter2";
import HookCounter3 from "./components/HookCounter3";

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      <HookCounter3 />
    </div>
  );
}

export default App;
