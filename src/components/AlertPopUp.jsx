import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { alertPopupItemsSelector } from "../redux/selector";
import { removeAlertItem } from "../redux/alert-popup/alertPopupItemsSlice";
import Aos from "aos";

const AlertPopUp = props => {
  const alertPopupItems = useSelector(alertPopupItemsSelector);
  const [alerts, setAlerts] = useState(alertPopupItems);
  const dispatch = useDispatch(null);
  console.log(alertPopupItems.length);

  useEffect(() => {
    Aos.init({
      offset: 50,
      duration: 500,
      easing: "linear",
      // delay: 100
      once: true
    });
  }, []);

  useEffect(() => {
    setAlerts(alertPopupItems);
    const removeAlert = setTimeout(() => {
      if (alertPopupItems.length < 0) {
        clearInterval(removeAlert);
        console.log("đã clear");
      }
      dispatch(removeAlertItem());
    }, 3000);

    return () => {
      clearTimeout(removeAlert);
    };
  }, [alertPopupItems]);

  return (
    <div className="alert-popup">
      {alerts.map((item, index) => (
        <div className="alert-popup__item" data-aos="fade-right">
          <div className="alert-popup__icon">
            <i className="bx bxs-check-circle"></i>
          </div>
          <div>
            <h2 className="alert-popup__status">Success</h2>
            <p className="alert-popup__content">{item.content}</p>
          </div>
          <div className="alert-popup__close">
            <i className="bx bx-x"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

AlertPopUp.propTypes = {};

export default AlertPopUp;
