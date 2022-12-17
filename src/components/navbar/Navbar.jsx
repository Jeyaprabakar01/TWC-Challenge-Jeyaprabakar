import "./navbar.css";
import React from "react";

const Navbar = () => {
  return (
    <div className="header">
      <div className="left">loopstudios</div>
      <div className="right">
        <li>About</li>
        <li>Careers</li>
        <li>Events</li>
        <li>Products</li>
        <li>Support</li>
      </div>
    </div>
  );
};

export default Navbar;
