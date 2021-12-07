import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../sass/components/_header.scss";
const mainNav = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "Catalog",
    path: "/catalog"
  },
  {
    title: "News",
    path: "/news"
  },
  {
    title: "Contact",
    path: "/contact"
  }
];

const Header = () => {
  const { pathname } = useLocation();

  const activeNav = mainNav.findIndex(e => e.path === pathname);

  const headerRef = useRef(null);

  const menuLeftRef = useRef(null);

  const menuRightRef = useRef(null);

  const coverBgRef = useRef(null);

  const menuToggle = () => {
    console.log(document.body.offsetWidth);
    if (document.body.offsetWidth < 1024) {
      menuLeftRef.current.classList.toggle("active");
      coverBgRef.current.classList.toggle("active");
      menuRightRef.current.classList.toggle("disabled");
    }
  };
  useEffect(() => {
    let preScrollTop = 0;

    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop >= preScrollTop) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
      preScrollTop = document.documentElement.scrollTop;
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div ref={coverBgRef} className="cover-bg" onClick={menuToggle}></div>

      <div className="container">
        <div className="header__menu__left__mobile" onClick={menuToggle}>
          <i class="bx bx-menu"></i>
        </div>
        <div className="header__menu__left" ref={menuLeftRef}>
          <div className="header__menu__left__search">
            <input type="text" placeholder="Search" />
            <i class="bx bx-search"></i>
          </div>
          {mainNav.map((item, index) => (
            <div
              key={index}
              onClick={menuToggle}
              className={`header__menu__item header__menu__left__item ${
                index === activeNav ? "active" : ""
              }`}>
              <Link to={item.path}>
                <span>{item.title}</span>
              </Link>
            </div>
          ))}
          <div className="line"></div>
        </div>
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="header__menu__right" ref={menuRightRef}>
          <div className="header__menu__item header__menu__right__item">
            <i class="bx bx-search"></i>
          </div>
          <div className="header__menu__item header__menu__right__item">
            <i class="bx bx-user"></i>
          </div>
          <div className="header__menu__item header__menu__right__item">
            <i class="bx bx-heart"></i>
          </div>
          <div className="header__menu__item header__menu__right__item">
            <i class="bx bx-shopping-bag"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
