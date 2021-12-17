import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  let { backgroundColor, size, animate, icon, onClick, children, color } =
    props;
  backgroundColor = backgroundColor ? "bg-" + backgroundColor : "bg-main";
  color = backgroundColor ? "color-" + color : "color-main";

  size = size ? "btn-" + size : "";
  animate = animate ? "btn-animate" : "";
  const handleOnClick = onClick ? () => onClick() : null;
  return (
    <button
      className={`btn ${backgroundColor}  ${size} ${animate}`}
      onClick={handleOnClick}>
      <span className={`btn__txt ${color}`}>{children}</span>
      {icon ? (
        <span className="btn__icon">
          <i className={`${icon} btn__tada`}></i>
        </span>
      ) : null}
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.number,
  icon: PropTypes.string,
  animation: PropTypes.bool,
  onClick: PropTypes.func
};

export default Button;
