import React from "react";
import "../css/newsletter.css";

const newsletter = () => {
  return (
    <section className="newsletter-section">
      <h3>Stay in touch</h3>
      <p className="promo">
        Get 10% off your first purchase by joining our mailing list, and receive
        some of the best deals possible..
      </p>
      <form className="form">
        <input type="text" />
        <button type="submit">subscribe</button>
      </form>
      <p>If you need anything don't hesitate to contact us!</p>
    </section>
  );
};

export default newsletter;
