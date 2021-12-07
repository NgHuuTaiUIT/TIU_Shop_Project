import React, { useRef } from "react";
import "./TopNav.css";
import logo from "../../assets/images/logo.png";
import DropDown from "../Dropdown/DropDown";
import dataDropdownShow from "../../assets/Json/dropdown.json";

let renderDropDownShop = (item, index) => (
  <div className="dropdown__items">
    <div className="dropdown__header">
      <a href="#">{item.header}</a>
    </div>

    {item.content.map((content, index) => (
      <div className="dropdown__content">{content}</div>
    ))}
  </div>
);

const headerTitleHoverAction = (e) => {
  
    document.addEventListener("mouseenter", e => {
      
    });
  };

const TopNav = () => {
  let rel_shop = useRef(null);
  return (
    <div className="topnav">
      <div className="topnav__left">
        <div className="topnav__items">
          <a href="#" className="topnav__logo">
            <img src={logo} alt="" srcset="" />
          </a>
        </div>
      </div>
      <div className="topnav__center">
        <div className="topnav__items">
          <span>
            Home<i class="bx bx-chevron-down"></i>
          </span>
        </div>
        <div rel={rel_shop} className="topnav__items">
          <span>
            Shop<i class="bx bx-chevron-down"></i>
          </span>
          <div className="topnav__dropdown dr__items__center">
            <DropDown content={dataDropdownShow} render={renderDropDownShop} />
          </div>
        </div>
        <div className="topnav__items">
          <span>
            Featured<i class="bx bx-chevron-down"></i>
          </span>
        </div>
        <div className="topnav__items">
          <span>
            Pages<i class="bx bx-chevron-down"></i>
          </span>
        </div>
        <div className="topnav__items">
          <span>
            Blogs<i class="bx bx-chevron-down"></i>
          </span>
        </div>
      </div>
      <div className="topnav__right">
        <div className="topnav__items">
          <i class="bx bx-search"></i>
        </div>
        <div className="topnav__items">
          <i class="bx bx-user"></i>
        </div>
        <div className="topnav__items">
          <i class="bx bx-heart"></i>
        </div>
        <div className="topnav__items">
          <i class="bx bx-shopping-bag"></i>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
