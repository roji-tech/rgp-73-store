import React from "react";
import { Link } from "react-router-dom";

const Button = (text) => {
  return (
    <>
      <Link to="/products">
        <button className="custom-btn">Explore &#8594;</button>
      </Link>
    </>
  );
};

export default Button;
