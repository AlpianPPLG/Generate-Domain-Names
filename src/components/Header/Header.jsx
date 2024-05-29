import React from "react";
import "./Header.css";

const Header = ({ headTitle, headerExpanded }) => {
  return (
    <div className="head-container">
      <h1 onClick={() => {window.location.reload();}} className="head-text">{headTitle}</h1>
    </div>
  );
};
export default Header;
