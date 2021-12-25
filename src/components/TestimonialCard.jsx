import React from "react";
import PropTypes from "prop-types";

import CEO from "../assets/images/CEO.jpg";
import Culi1 from "../assets/images/Culi1.jpg";
import Culi2 from "../assets/images/Culi2.jpg";
import cafe from "../assets/images/cafe.jpg";

const TestimonialsCard = props => {
  const { item } = props;

  const image = [CEO, Culi1, Culi2, cafe];

  return (
    <div className="testimonial">
      <div className="testimonial__description">{item.description}</div>
      <div className="testimonial__image">
        <img src={image[Number(item.image)]} alt="" />
      </div>
      <div className="testimonial__name">{item.name}</div>
      <div className="testimonial__position">{item.position}</div>
    </div>
  );
};

TestimonialsCard.propTypes = {};

export default TestimonialsCard;
