import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Helmet = props => {
  document.title = "TIU - " + props.title;

  useEffect(() => {
    window.scroll(0, 0);
  }, [props.title]);

  return <div>{props.children}</div>;
};

Helmet.propTypes = {
  title: PropTypes.string
};

export default Helmet;
