import React from "react";
import PropTypes from "prop-types";

const RatingStart = props => {
  const { number = 0 } = props;
  const handleRatingStart = () => {
    const start1 = number;
    const start2 = 5 - number;
    let result = [];
    for (let i = 0; i < start1; i++) {
      result.push(1);
    }
    for (let i = 0; i < start2; i++) {
      result.push(0);
    }
    // console.log(result[0]);

    return result;
  };
  return (
    <div className="rating-start">
      {handleRatingStart().map((vl, index) => {
        return vl === 1 ? (
          <i key={index} className="bx bxs-star"></i>
        ) : (
          <i key={index} className="bx bx-star"></i>
        );
      })}
    </div>
  );
};

export default RatingStart;
