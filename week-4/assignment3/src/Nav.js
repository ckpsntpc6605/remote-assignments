import React from "react";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">Website Title / Logo</div>

      <label className="trigger" for="switch">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </label>
      <input type="checkbox" id="switch" />
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
      <label className="close" for="switch">
        X
      </label>
    </div>
  );
};

export default Nav;
