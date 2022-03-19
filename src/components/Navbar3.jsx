import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./styles/Navbar3.css";
import Scrollspy from "react-scrollspy";

const headerItems = [
  {
    link: "/#",
    text: "HOME",
  },
  {
    link: "/#skills",
    text: "SKILLS",
  },
  {
    link: "/#about",
    text: "ABOUT ME",
  },
  {
    link: "/#faq",
    text: "FAQ",
  },
];

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
  window.addEventListener("resize", () => setClick(false));

  return (
    <>
      <header className={`navbar3 ${navScroll ? "navbar3Scroll" : null}`}>
        <nav className="navbar3__content">
          {/* LOGO */}
          <h1
            className={`navbar3__content__logo 
            ${navScroll ? "navbar3ScrollItem" : null}`}
          >
            <Link to="/#" onClick={() => setClick(false)}>
              BRAND
            </Link>
          </h1>

          {/* ADD CLASS TO HEADER ITEMS WHEN COME TO SECTION */}
          <Scrollspy
            items={["home", "skills", "about", "faq"]}
            currentClassName={`nav3Current${navScroll ? "Scroll" : ""}`}
            className={`navbar3__content__items 
            ${click ? "nav3MobileActive" : null}`}
          >
            {/* HEADER ITEMS */}
            {headerItems.map((item, index) => (
              <li
                key={index}
                className={`navbar3__content__items__item 
                ${navScroll || click ? "navbar3ScrollItem" : null}`}
              >
                <Link to={item.link} onClick={() => setClick(false)}>
                  {item.text}
                </Link>
              </li>
            ))}
          </Scrollspy>

          {/* MOBILE HAMBURGUER */}
          <div
            className={`navbar3__content__icon 
            ${navScroll ? "navbarMobileActive" : null}`}
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
