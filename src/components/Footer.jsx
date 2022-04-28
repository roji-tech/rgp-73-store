import React from "react";

import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="nav-logo">Tasty</div>
        <div>
          <p>
            Purpose is to sustainably make Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptas reprehenderit doloribus
            placeat est tenetur, deserunt ducimus quis labore saepe tempora?
          </p>
        </div>
        <div>
          <h3 className="footer-subtitle ">services</h3>
          <ul>
            <li>home deivery</li>
            <li>quality food </li>
            <li>affordable price </li>
          </ul>
        </div>
        <div>
          <h3 className="footer-subtitle">quick links</h3>
          <ul>
            <li>home</li>
            <li>about </li>
            <li>product </li>
            <li>contact </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copyright"> copyright &copy; SideHustle React group 73</p>
    </footer>
  );
};

export default Footer;
