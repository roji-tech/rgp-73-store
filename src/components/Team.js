import React from "react";
// import memo1 from "../img/memoji1.png";
// import memo from "../img/memoji-2.png";
import "../css/team.css";

const Member = () => {
  return (
    <div className="member">
      <div className="img-background"></div>
      <h3>Tom Cruise</h3>
      <p className="member-title">Co-founder</p>
      <div className="connect">facebook linkedIn</div>
    </div>
  );
};
const Team = () => {
  return (
    <section className="team-section">
      <h2 className="custom-title">
        Our Team <span></span>
      </h2>
      <Member />
    </section>
  );
};

export default Team;
