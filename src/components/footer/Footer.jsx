import "./footer.css";
import React from "react";

import Facebook from "../../assets/icon-facebook.svg";
import Twitter from "../../assets/icon-twitter.svg";
import Pinterest from "../../assets/icon-pinterest.svg";
import Instagram from "../../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="footer-header">loopstudios</div>
        <div className="nav-link">
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </div>
      </div>
      <div className="footer-right">
        <div className="social-media">
          <img src={Facebook} alt="" />
          <img src={Twitter} alt="" />
          <img src={Pinterest} alt="" />
          <img src={Instagram} alt="" />
        </div>
        <div className="copyright">
          &copy; 2021 Loopstudios. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
