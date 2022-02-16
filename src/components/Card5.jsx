import React from "react";
import "./styles/Card5.css";

function Card5({
  title = "Perfect Responsive",
  description = "Ut enim ad minim veniam, quis nostrud exercitation.",
  icon = "fas fa-mobile-alt",
  flipType= "up",
}) {
  return (
    <div className="card5" data-aos={`flip-${flipType}`}>
      <div className="card5__content">
        <i className={icon + " car5Icon"}></i>
        <h1 className="card5__content__title">{title}</h1>
        <p className="card5__content__description">{description}</p>
      </div>
    </div>
  );
}

export default Card5;
