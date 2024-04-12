import React, { useRef, useState } from "react";
import useOutSideClick from "./useOutSideClick";

const UseOnclickOutsideTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref: any = useRef();
  useOutSideClick(ref, () => setShowContent(false));
  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is random content</h1>
          <p>
            Please click outside of this to close this. It won't close if you
            click inside of this content
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default UseOnclickOutsideTest;
