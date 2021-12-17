import React from "react";
import PropTypes from "prop-types";

const Grid = props => {
  const { size = "1fr", style } = props;
  const styles = {
    ...style,
    gap: props.gap ? `${props.gap}px` : "0",
    gridTemplateColumns: `repeat(${props.col},${props.size})`
  };
  // if (props.size) {
  //   style["grid-template-columns"] = `repeat(${props.col},${props.size})`;
  // }
  let col = props.col ? `grid-col-${props.col}` : "";

  col = props.size ? `grid-col-${props.col}-size-${props.size}` : col;

  const mdCol = props.mdCol ? `grid-col-md-${props.mdCol}` : "";

  const smCol = props.smCol ? `grid-col-sm-${props.smCol}` : "";

  return (
    <div className={`grid ${col} ${mdCol} ${smCol}`} style={styles}>
      {props.children}
    </div>
  );
};

Grid.propTypes = {
  col: PropTypes.number.isRequired,
  mdCol: PropTypes.number,
  smCol: PropTypes.number,
  gap: PropTypes.number,
  size: PropTypes.string,
  style: PropTypes.object
};

export default Grid;
