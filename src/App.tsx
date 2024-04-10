import React from "react";
import "./App.css";
import Accordian from "./components/accordian/Accordian";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMoreData from "./components/load-more-data/LoadMoreData";
import TreeNav from "./components/tree-view/TreeNav";
import menus from "./components/tree-view/data";

const App: React.FC = () => {
  return (
    <div className="main-container">
      {/* Accordian Component */}
      {/* <Accordian /> */}

      {/* Random color Component */}
      {/* <RandomColor /> */}

      {/* Star Rating Component  */}
      {/* <StarRating noOfStars={10} /> */}

      {/* Image Slider Components */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} page={1} /> */}

      {/* Load more products components  */}
      {/* <LoadMoreData /> */}

      {/* Tree View Component / Menu UI component / Recursive navigation menu */}
      <TreeNav menus={menus} />
    </div>
  );
};

export default App;
