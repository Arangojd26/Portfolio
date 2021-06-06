import React from "react";
import "./CardSkills.css";

const CardSkills = ({ imgCard, title }) => {
  return (
    <div className="o-content-skill">
      <div className="o-card-skill">
        <img src={imgCard} alt="card" style={{ width: "70%" }} />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default CardSkills;
