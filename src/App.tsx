import React from "react";
import "./App.css";
import Accordian from "./components/accordian/Accordian";
import RandomColor from "./components/random-color/RandomColor";

const App: React.FC = () => {
  return (
    <div className="main-container">
      {/* Accordian Component */}
      {/* <Accordian /> */}

      {/* Random color Component */}
      <RandomColor />
    </div>
  );
};

export default App;
