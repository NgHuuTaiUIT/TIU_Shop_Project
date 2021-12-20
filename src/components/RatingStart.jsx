import React, { useEffect, useState } from "react";
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
  console.log(handleRatingStart());
  return (
    <div className="rating-start">
      {handleRatingStart().map((vl, index) => {
        return vl === 1 ? (
          <i key={index} className="bx bxs-star"></i>
        ) : (
          // <Start fullstart />
          <i key={index} className={`bx bx-star`}></i>
          // <Start />
        );
      })}
    </div>
  );
};

// const Start = props => {
//   const { fullstart } = props;
//   const [hover, setHover] = useState(false);

//   return <i className={`bx bx${hover ? "s" : ""}-star`}></i>;
// };

export default RatingStart;
