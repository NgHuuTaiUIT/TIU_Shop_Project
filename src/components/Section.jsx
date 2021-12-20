import React from "react";

const Section = props => {
  return (
    <div className="section" style={props.style}>
      {props.children}
    </div>
  );
};

const SectionTitle = props => {
  return (
    <div className="section__title" style={props.style}>
      {props.children}
    </div>
  );
};

const SectionBody = props => {
  return <div className="section__body">{props.children}</div>;
};

export { SectionTitle, SectionBody };

export default Section;
