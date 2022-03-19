import React from "react";
import "./styles/Slider.css";

function Slider({ slidersList }) {
  return (
    <div className="slider">
      {/* SLIDER ITEMS */}
      {slidersList.map((item, key) => (
        <div className="slider__content" key={key}>
          <div className="slider__texts">
            <p className="slider__texts__title">{item.title}</p>
            <p className="slider__texts__value">{item.value}%</p>
          </div>

          {/* SKILL SLIDER */}
          <div className="slider__container">
            <div
              className="slider__container__fill"
              style={{ width: item.value + "%" }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slider;
