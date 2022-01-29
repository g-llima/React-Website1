import React from "react";
import "./styles/PageStart3.css";

function PageStart3() {
  return (
    <section className="pagestart3" id={"home"}>
      <div className="pagestart3__content">
        <div className="pagestart3__content__texts">
          <h1 className="pagestart3__content__texts__mainText">
          Lorem ipsum dolor sit amet
          </h1>
          <p className="pagestart3__content__texts__secondText">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          </p>
          <button className="pagestart3__content__texts__btn">
            Explore Now <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
        <img
          src="./imgs/undraw_programming_re_kg9v.svg"
          alt="IMG"
          className="pagestart3__content__img"
        />
      </div>
    </section>
  );
}

export default PageStart3;
