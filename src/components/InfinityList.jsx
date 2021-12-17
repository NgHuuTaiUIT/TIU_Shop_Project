import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
import Grid from "./Grid";

const InfinityList = props => {
  const perLoad = 6; // items each load

  const listRef = useRef(null);

  const { col, data } = props;

  const [products, setProducts] = useState([]);

  const [load, setLoad] = useState(true);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setProducts(data);
    setIndex(1);
  }, [data]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (!listRef.current) return;
      if (
        window.scrollY + window.innerHeight >
        listRef.current.clientHeight + listRef.current.offsetTop + 200
      ) {
        setLoad(true);
      }
    });
    return () => {
      if (event) {
        window.removeEventListener(event);
      }
    };
  }, [listRef]);

  useEffect(() => {
    const getItems = () => {
      const pages = Math.floor(data.length / perLoad);
      const maxIndex =
        (data.length % perLoad) % perLoad === 0 ? pages : pages + 1;

      if (load && index <= maxIndex) {
        const start = perLoad * index;
        const end = start + perLoad;

        setProducts(products.concat(data.slice(start, end)));
        setIndex(index + 1);
      }
    };

    getItems();
    setLoad(false);
  }, [load, index, data, products]);

  return (
    <div ref={listRef}>
      <Grid col={col} mdCol={2} smCol={1} gap={20}>
        {products.map((item, index) => (
          <ProductCard
            key={index}
            title={item.title}
            images={item.images}
            slug={item.slug}
            size={item.size}
            link={"/"}
            price={Number.parseFloat(item.price)}
          />
        ))}{" "}
      </Grid>
    </div>
  );
};

InfinityList.propTypes = {
  data: PropTypes.array.isRequired,
  col: PropTypes.number
};

export default InfinityList;
