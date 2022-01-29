import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./styles/Navbar3.css";
import Scrollspy from "react-scrollspy";

function Navbar3() {
  const [navScroll, setNavScroll] = useState(false);
  const [click, setClick] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  window.addEventListener("resize", () => {
    setClick(false);
  });

  return (
    <>
      <header className={`navbar3 ${navScroll ? "navbar3Scroll" : null}`}>
        <nav className="navbar3__content">
          <h1 className={`navbar3__content__logo ${navScroll ? "navbar3ScrollItem" : null }`}><Link to="/#" onClick={() => setClick(false)}>BRAND</Link></h1>
          <Scrollspy
            items={["home", "skills", "about", "faq"]}
            currentClassName={`nav3Current${navScroll ? "Scroll" : ""}`}
            className={`navbar3__content__items ${
              click ? "nav3MobileActive" : null
            }`}
          >
            <li
              className={`navbar3__content__items__item ${
                navScroll || click ? "navbar3ScrollItem" : null
              }`}
            >
              <Link to="/#" onClick={() => setClick(false)}>HOME</Link>
            </li>
            <li
              className={`navbar3__content__items__item ${
                navScroll || click ? "navbar3ScrollItem" : null
              }`}
            >
              <Link to="/#skills" onClick={() => setClick(false)}>SKILLS</Link>
            </li>
            <li
              className={`navbar3__content__items__item ${
                navScroll || click ? "navbar3ScrollItem" : null
              }`}
            >
              <Link to="/#about" onClick={() => setClick(false)}>ABOUT ME</Link>
            </li>
            <li
              className={`navbar3__content__items__item ${
                navScroll || click ? "navbar3ScrollItem" : null
              }`}
            >
              <Link to="/#faq" onClick={() => setClick(false)}>FAQ</Link>
            </li>
          </Scrollspy>
          <div
            className={`navbar3__content__icon ${navScroll ? "navbarMobileActive" : null}`}
            onClick={() => setClick(!click)}
          >
            <i className={`fas fa-${click ? "times" : "bars"}`}></i>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar3;
