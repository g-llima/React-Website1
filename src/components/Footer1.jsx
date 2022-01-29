import React from "react";
import "./styles/Footer1.css";

function Footer1() {
  return (
    <footer className="footer1">
      <div className="footer1__content">
        <div className="footer1__content__texts">
          <div className="footer1__content__texts__about">
            <h2 className="footer1__content__texts__about__logo">LOREM</h2>
            <p className="footer1__content__texts__about__description">
              Proin eget tortor risus. Mauris blandit aliquet elit, eget
              tincidunt nibh pulvinar a. Praesent sapien massa, convallis a
              pellentesque nec, egestas non nisi. Mauris blandit aliquet elit,
              eget tincidunt nibh pulvinar a. Nulla porttitor accumsan
              tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas
              autem necessitatibus vitae aut.
            </p>
          </div>
          <div className="footer1__content__texts__join">
            <h4 className="footer1__content__texts__join__title">
              Get Notified
            </h4>
            <p className="footer1__content__texts__join__description">
              Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae
              aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt
              iusto porro.
            </p>
            <form className="footer1__content__texts__join__form">
              <div className="footer1__content__texts__join__form__input">
                <i className="far fa-envelope"></i>
                <input
                  className="footer1__content__texts__join__form__input__email"
                  type="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <button
                className="footer1__content__texts__join__form__btn"
                type="submit"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        <p className="footer1__content__copyright">
          &copy; Copyright LOREM 2022
        </p>
      </div>
    </footer>
  );
}

export default Footer1;
