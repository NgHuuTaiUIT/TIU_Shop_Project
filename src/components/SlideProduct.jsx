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
    smsize = size,
    dataAos
  } = props;

  let tempData = [];
  //Cắt 4 phần tử
  for (let i = 0; i < props.children.length; i += size) {
    tempData.push(props.children.slice(i, i + size));
  }

  const dots = tempData.length;

  const range = [...Array(dots).keys()];

  let slideRef = useRef(null);
  const productSlide = useRef(null);

  const [dotSelected, setDotSelected] = useState(0);

  //Even Lướt

  const selectDot = dot => {
    if (dot < 0 || dot >= range.length) return;
    setDotSelected(dot);
    const x = `-${dot * (100 / tempData.length)}%`;

    slideRef.current.style.transform = `translateX(${x})`;
  };

  const nextSlider = useCallback(() => {
    const index = dotSelected + 1 === dots ? 0 : dotSelected + 1;

    selectDot(index);
  }, [dotSelected, dots]);

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

  useEffect(() => {
    let startX;

    const handleMouseDown = e => {
      startX = e.pageX;
      console.log("mousedown");
    };

    const handleMouseUp = e => {
      if (e.pageX < startX) {
        selectDot(dotSelected + 1);
      } else if (e.pageX > startX) {
        selectDot(dotSelected - 1);
      }
      console.log("mouseup");
    };

    if (productSlide && productSlide.current) {
      // productSlide.addEventListener("mousedown", handleMouseDown);

      productSlide.current.onmousedown = handleMouseDown;
      productSlide.current.onmouseup = handleMouseUp;
      // productSlide.addEventListener("mouseup", handleMouseUp);
    }
  }, [dotSelected]);

  return (
    <>
      <div className="slide-product" ref={productSlide} data-aos={dataAos}>
        <div
          ref={slideRef}
          className="wrap"
          style={{
            width: `${tempData.length * 100}%`,
            display: "flex",
            position: "relative",
            cursor: "move"
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
    </>
  );
};

SlideProduct.propTypes = {
  data: PropTypes.array.isRequired,
  size: PropTypes.string,
  control: PropTypes.bool
};

export default SlideProduct;
