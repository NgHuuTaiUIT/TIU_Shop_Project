import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { cartItemsSelector } from "../redux/selector";
import "../sass/components/_header.scss";
import products from "../assets/fake-data/product";
import Grid from "./Grid";
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
  const productData = products.getAllProducts();

  const [text, setText] = useState("");

  const [result, setResult] = useState([]);

  const [isShowSearch, setIsShowSearch] = useState(false);

  const { pathname } = useLocation();

  const activeNav = mainNav.findIndex(e => e.path === pathname);

  const headerRef = useRef(null);

  const menuLeftRef = useRef(null);

  const menuRightRef = useRef(null);

  const coverBgRef = useRef(null);

  const cartItems = useSelector(cartItemsSelector);

  const menuToggle = () => {
    console.log(document.body.offsetWidth);
    if (document.body.offsetWidth < 1024) {
      menuLeftRef.current.classList.toggle("active");
      coverBgRef.current.classList.toggle("active");
      menuRightRef.current.classList.toggle("disabled");
    }
  };
  useEffect(() => {}, [isShowSearch]);

  useEffect(() => {
    const dataTemp = productData.filter(item => {
      return item.title.toLowerCase().includes(text.toLowerCase());
    });
    if (text !== "") {
      setResult(dataTemp);
    } else {
      setResult([]);
    }

    let preScrollTop = 0;

    window.addEventListener("scroll", () => {
      if (!headerRef) return;
      if (document.documentElement.scrollTop >= preScrollTop && !isShowSearch) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
      preScrollTop = document.documentElement.scrollTop;
    });
    // console.log(dataTemp);
  }, [text, productData, isShowSearch]);

  return (
    <div ref={headerRef} className="header">
      <div ref={coverBgRef} className="cover-bg" onClick={menuToggle}></div>
      <div className={`header__tab-search ${isShowSearch ? "show" : ""}`}>
        <h1>Start Typing and hit enter</h1>
        <div
          className="header__tab-search__close"
          onClick={() => setIsShowSearch(false)}>
          <i className="bx bx-x"></i>
        </div>
        <div className="header__tab-search__input">
          <input type="text" onChange={e => setText(e.target.value)} />
          <i className="bx bx-search"></i>
        </div>
        <div className="header__tab-search__result">
          <Grid col={3} gap={20}>
            {result.map((item, index) => (
              <div className="header__tab-search__result__item">
                <img src={item.images[0]} alt="" />
                <div className="header__tab-search__result__item__info">
                  <Link
                    to={`/catalog/${item.slug}`}
                    onClick={() => setIsShowSearch(false)}>
                    <h3 className="">{item.title}</h3>
                  </Link>

                  <div className="price">
                    <h4>$ {Math.floor(item.price)} USD</h4>
                    <del>${item.price} USD</del>
                  </div>
                </div>
              </div>
            ))}
          </Grid>
        </div>
      </div>
      <div className="container">
        <div className="header__menu__left__mobile" onClick={menuToggle}>
          <i className="bx bx-menu"></i>
        </div>
        <div className="header__menu__left" ref={menuLeftRef}>
          <div className="header__menu__left__search">
            <input type="text" placeholder="Search" />
            <i className="bx bx-search"></i>
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
          <div
            className="header__menu__item header__menu__right__item"
            onClick={() => setIsShowSearch(true)}>
            <i className="bx bx-search"></i>
          </div>
          <div className="header__menu__item header__menu__right__item">
            <i className="bx bx-user"></i>
          </div>
          <Link
            to="/wishlist"
            className="header__menu__item header__menu__right__item">
            <i className="bx bx-heart"></i>
          </Link>
          <Link
            to="/cart"
            className="header__menu__item header__menu__right__item">
            <i className="bx bx-shopping-bag"></i>
            {cartItems.length > 0 ? <span>{cartItems.length}</span> : ""}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
