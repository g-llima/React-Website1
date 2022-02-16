import React from "react";
import "./styles/Slider.css";

const slidersList = [
  {
    title: "Lorem ipsum dolor",
    value: 100,
  },
  {
    title: "Lorem ipsum dolor",
    value: 70,
  },
  {
    title: "Lorem ipsum dolor",
    value: 60,
  },
];

function Slider() {
  return (
    <div className="slider" >
      {slidersList.map((item, key) => (
        <div className="slider__content" key={key}>
          <div className="slider__texts">
            <p className="slider__texts__title">{item.title}</p>
            <p className="slider__texts__value">{item.value}%</p>
          </div>
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
