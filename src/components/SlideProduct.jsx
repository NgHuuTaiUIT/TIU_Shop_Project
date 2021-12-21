import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Grid from "./Grid";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { useCallback } from "react";

const SlideProduct = props => {
  const {
    data,
    size,
    control = true,
    _left,
    auto = true,
    timeOut = 3000,
    mdsize = size,
    smsize = size
  } = props;

  let tempData = [];
  //Cắt 4 phần tử
  for (let i = 0; i < props.children.length; i += size) {
    tempData.push(props.children.slice(i, i + size));
  }

  // const dots = Math.floor((data.length - 4) / 2) + 1;

  const dots = tempData.length;

  const range = [...Array(dots).keys()];

  let slideRef = useRef(null);

  const [dotSelected, setDotSelected] = useState(0);
  // let style = {};

  console.log(tempData);

  const selectDot = dot => {
    setDotSelected(dot);
    // const x = `calc(-${dot * _left}% + ${dot * 70}px)`;
    const x = `-${dot * (100 / tempData.length)}%`;

    slideRef.current.style.transform = `translateX(${x})`;
  };

  const nextSlider = useCallback(() => {
    const index = dotSelected + 1 === dots ? 0 : dotSelected + 1;

    // selectDot(index);
    selectDot(index);
  }, [dotSelected, dots]);

  const preSlider = () => {
    const index = dotSelected - 1 === -1 ? dots - 1 : dotSelected - 1;
    // selectDot(index);
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
      <div
        ref={slideRef}
        className="wrap"
        style={{
          width: `${tempData.length * 100}%`,
          display: "flex",
          position: "relative"
        }}>
        {tempData.map((item, index) => (
          <Grid
            col={size}
            mdCol={mdsize}
            smCol={smsize}
            gap={20}
            style={{
              width: `${100 / tempData.length}%`,
              padding: "20px",
              flex: "1"
            }}>
            {item}
          </Grid>
        ))}
      </div>
      {control ? (
        <div className="slide-product__control">
          {range.map((item, index) =>
            dotSelected === index ? (
              <span
                key={index}
                className="active"
                onClick={e => selectDot(index, e)}
                // onClick={e => setLoad(true)}
              ></span>
            ) : (
              <span
                key={index}
                onClick={e => selectDot(index, e)}
                // onClick={e => setLoad(true)}
              ></span>
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
