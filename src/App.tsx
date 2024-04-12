import React from "react";
import "./App.css";
import Accordian from "./components/accordian/Accordian";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMoreData from "./components/load-more-data/LoadMoreData";
import TreeNav from "./components/tree-view/TreeNav";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator/QRCodeGenerator";
import LightDarkMode from "./components/light-dark-mode/LightDarkMode";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";
import TabTest from "./components/custom-tabs/TabTest";
import ModalTest from "./components/custom-modal-component/ModalTest";
import GithubProfileFinder from "./components/github-profile-finder/GithubProfileFinder";
import SearchAutoComplete from "./components/search-auto-complete-with-api/SearchAutoComplete";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import FeatureFlags from "./components/feature-flag/FeatureFlags";
import UseFetchHookTest from "./components/use-fetch/UseFetchHookTest";
import UseOnclickOutsideTest from "./components/use-outside-click/UseOnclickOutsideTest";
import UseWindowResizeTest from "./components/use-window-resize/UseWindowResizeTest";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom/ScrollToTopAndBottom";

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
      {/* <TreeNav menus={menus} /> */}

      {/* QR Code Generator */}
      {/* <QRCodeGenerator /> */}

      {/* Light and dark theme switch */}
      {/* <LightDarkMode /> */}

      {/* Scroll Indicator component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* Custom tabs Component */}
      {/* <TabTest /> */}

      {/* Custom Modal PopUp */}
      {/* <ModalTest /> */}

      {/* Github Profile Finder */}
      {/* <GithubProfileFinder /> */}

      {/* Search Auto Complete with api  */}
      {/* <SearchAutoComplete /> */}

      {/* Tic Tac Toe  */}
      {/* <TicTacToe /> */}

      {/* Feature Flag Implementation  */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* useFetch - Custom Hook Test*/}
      {/* <UseFetchHookTest /> */}

      {/* Use Onclick Outside Hook Test */}
      {/* <UseOnclickOutsideTest /> */}

      {/* Use Window Resize Hook Test */}
      {/* <UseWindowResizeTest /> */}

      {/* Scroll to Top and Bottom */}
      <ScrollToTopAndBottom />
    </div>
  );
};

export default App;
