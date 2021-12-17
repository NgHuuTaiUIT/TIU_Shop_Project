import React from "react";
import PropTypes from "prop-types";

const Card = props => {
  const { style, children } = props;
  console.log(style);
  return (
    <div className="card" style={style}>
      {/* <div className="card__content">{children}</div> */}
      {children}
    </div>
  );
};
const CardTitle = props => {
  return <div className="card__title">{props.children}</div>;
};

const CardBody = props => {
  return <div className="card__body">{props.children}</div>;
};
Card.propTypes = {
  style: PropTypes.object
};
export { CardTitle, CardBody };
export default Card;
