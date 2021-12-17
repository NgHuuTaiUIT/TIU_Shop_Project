import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Grid from "./Grid";
import ProductCard from "./ProductCard";
import { useState } from "react";

const SlideProduct = props => {
  const {
    data,
    size,
    control = true,
    _left,
    auto = true,
    timeOut = 3000
  } = props;

  const dots = Math.floor((data.length - 4) / 2) + 1;

  const range = [...Array(dots).keys()];

  let slideRef = useRef(null);

  const [dotSelected, setDotSelected] = useState(0);
  // let style = {};

  const selectDot = dot => {
    setDotSelected(dot);
    const x = `${dot * _left}%`;
    slideRef.current.style.transform = `translateX(-${x})`;
  };

  const nextSlider = () => {
    const index = dotSelected + 1 === dots ? 0 : dotSelected + 1;

    selectDot(index);
  };

  const preSlider = () => {
    const index = dotSelected - 1 === -1 ? dots - 1 : dotSelected - 1;
    selectDot(index);
  };

  useEffect(() => {
    if (auto) {
      const slideAuto = setInterval(() => {
        nextSlider();
      }, timeOut);

      return () => {
        clearInterval(slideAuto);
      };
    }
  }, [nextSlider, timeOut, auto]);

  return (
    <div className="slide-product">
      <div ref={slideRef}>
        <Grid col={data.length} gap={20} size={size}>
          {/* {data.map((item, index) => (
          <ProductCard
            key={index}
            title={item.title}
            images={item.images}
            slug={item.categorySlug}
            size={item.size}
            link={"/"}
            price={Number.parseFloat(item.price)}
          />
        ))} */}

          {props.children}
        </Grid>
      </div>
      {control ? (
        <div className="slide-product__control">
          {range.map((item, index) =>
            dotSelected === index ? (
              <span
                key={index}
                className="active"
                onClick={e => selectDot(index, e)}></span>
            ) : (
              <span key={index} onClick={e => selectDot(index, e)}></span>
            )
          )}
        </div>
      ) : null}
    </div>
  );
};

SlideProduct.propTypes = {
  data: PropTypes.array.isRequired,
  size: PropTypes.string,
  control: PropTypes.bool
};

export default SlideProduct;
