import React from "react";
import PropTypes from "prop-types";
import CEO from "../assets/images/CEO.jpg";

const TestimonialsCard = props => {
  const { item } = props;
  return (
    <div className="testimonial">
      <div className="testimonial__description">{item.description}</div>
      <div className="testimonial__image">
        <img src={CEO} alt="" />
      </div>
      <div className="testimonial__name">{item.name}</div>
      <div className="testimonial__position">{item.position}</div>
    </div>
  );
};

TestimonialsCard.propTypes = {};

export default TestimonialsCard;
