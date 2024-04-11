import React, { useState } from "react";

const Tabs = ({ tabsContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex: number) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }
  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div
            key={tabItem.label}
            onClick={() => handleOnClick(index)}
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
