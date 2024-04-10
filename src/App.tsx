import React from "react";
import "./App.css";
import Accordian from "./components/accordian/Accordian";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";

const App: React.FC = () => {
  return (
    <div className="main-container">
      {/* Accordian Component */}
      {/* <Accordian /> */}

      {/* Random color Component */}
      {/* <RandomColor /> */}

      {/* Star Rating Component  */}
      <StarRating noOfStars={10} />
    </div>
  );
};

export default App;
