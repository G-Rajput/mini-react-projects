import React from "react";
import "./App.css";
import Accordian from "./components/accordian/Accordian";

const App: React.FC = () => {
  return (
    <div className="main-container">
      {/* Accordian Component */}
      <Accordian />
    </div>
  );
};

export default App;
