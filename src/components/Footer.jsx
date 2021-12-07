import React from "react";

import Grid from "./Grid";

import logo from "../assets/images/logo.png";

import moduleName from "../sass/components/_footer.scss";

import { Link } from "react-router-dom";

const footerGetHelp = [
  { display: "Contact Us", path: "/" },
  { display: "Size Guide", path: "/" },
  { display: "Shipping", path: "/" },
  { display: "Returns & Exchanges", path: "/" },
  { display: "Payment & Security", path: "/" },
  { display: "Order Tracking", path: "/" },
  { display: "Special Orders", path: "/" }
];

const footerInfomation = [
  { display: "About Us", path: "/" },
  { display: "Store Locator", path: "/" },
  { display: "Careers", path: "/" },
  { display: "Sustainability", path: "/" },
  { display: "Diversity & Inclusion", path: "/" },
  { display: "Accessibility", path: "/" },
  { display: "Accessibility", path: "/" },
  { display: "Gift Cards", path: "/" },
  { display: "Investor Relations", path: "/" }
];

const footerCustomerServices = [
  { display: "Premium", path: "/" },
  { display: "Luxury", path: "/" },
  { display: "New Arrivals", path: "/" },
  { display: "Weddings", path: "/" },
  { display: "Sale", path: "/" }
];
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
              <p>Subscribe our newsletter and get discount 30% off</p>
              <div className="footer__logo__email">
                <input type="email" placeholder="Your email address..." />
                <i class="bx bxs-paper-plane"></i>
              </div>
              <div className="footer__logo__brand">
                <i class="bx bxl-facebook-circle"></i>
                <i class="bx bxl-twitter"></i>
                <i class="bx bxl-youtube"></i>
                <i class="bx bxl-instagram"></i>
              </div>
            </div>
          </div>
          <div>
            <div className="footer__title">Get Help</div>
            <div className="footer__content">
              <ul>
                {footerGetHelp.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path}>{item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="footer__title">Infomation</div>
            <div className="footer__content">
              <ul>
                {footerInfomation.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path}>{item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="footer__title">Customer Services</div>
            <div className="footer__content">
              <ul>
                {footerCustomerServices.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path}>{item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
