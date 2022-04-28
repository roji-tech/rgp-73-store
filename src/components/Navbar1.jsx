import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../css/navbar1.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">RGP-73 Store</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/rgp-73-store" className="link">
          HOME
        </Link>
        <Link to="/rgp-73-store/about" className="link">
          ABOUT
        </Link>
        <Link to="/rgp-73-store/products" className="link">
          PRODUCTS
        </Link>
        <Link to="/rgp-73-store/contact" className="link">
          CONTACT
        </Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
