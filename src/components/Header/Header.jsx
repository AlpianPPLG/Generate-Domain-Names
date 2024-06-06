import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = ({ headTitle, headerExpanded }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < headTitle.length) {
        setDisplayText(displayText + headTitle.charAt(index));
        setIndex(index + 1);
      } else {
        setDisplayText("");
        setIndex(0);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [headTitle, index]);

  return (
    <div className="head-container">
      <h1 className="head-text" onClick={() => window.location.reload()}>
        {displayText}
      </h1>
    </div>
  );
};

export default Header;
