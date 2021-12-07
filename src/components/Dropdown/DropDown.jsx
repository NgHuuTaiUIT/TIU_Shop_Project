import React from "react";
import "./DropDown.css";
const DropDown = props => {
  console.log(props);
  return (
    <div className="dropdown">
      {props.content && props.render
        ? props.content.map((item, index) => props.render(item, index))
        : null}
    </div>
  );
};

export default DropDown;
