import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Grid from "./Grid";
import ProductCard from "./ProductCard";
import CheckBox from "./CheckBox";
import Button from "./Button";
import InfinityList from "./InfinityList";

const CollectionList = props => {
  const { productData, category, size, color, price } = props;

  const [grid, setGrid] = useState(4);

  const initFilter = {
    category: [],
    color: [],
    price: [],
    size: []
  };

  const [filter, setFilter] = useState(initFilter);

  // const cloneProductData = productData.slice(0, perLoad);

  const [products, setProducts] = useState(productData);

  const filterSelect = (type, checked, item) => {
    console.log(type, checked, item);
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug]
          });
          break;
        case "COLOR":
          setFilter({
            ...filter,
            color: [...filter.color, item]
          });
          break;
        case "SIZE":
          setFilter({
            ...filter,
            size: [...filter.size, item.size]
          });
          break;
        case "PRICE":
          setFilter({
            ...filter,
            price: [...filter.price, item]
          });
          break;
        default:
          break;
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(
            e => e !== item.categorySlug
          );
          setFilter({
            ...filter,
            category: newCategory
          });
          break;
        case "COLOR":
          const newColor = filter.color.filter(e => e !== item);
          setFilter({
            ...filter,
            color: newColor
          });
          break;
        case "SIZE":
          const newSize = filter.size.filter(e => e !== item.size);
          setFilter({
            ...filter,
            size: newSize
          });
          break;
        case "PRICE":
          const newPrice = filter.price.filter(e => e !== item);
          setFilter({
            ...filter,
            price: newPrice
          });
          break;
        default:
          break;
      }
    }
  };

  const clearFilter = () => setFilter(initFilter);

  const updateProducts = useCallback(() => {
    let temp = productData;
    if (filter.category.length > 0) {
      temp = temp.filter(e => filter.category.includes(e.categorySlug));
    }

    if (filter.color.length > 0) {
      temp = temp.filter(e => {
        const check = e.color.find(color => filter.color.includes(color));
        return check !== undefined;
      });
    }

    if (filter.size.length > 0) {
      temp = temp.filter(e => {
        const check = e.size.find(size => filter.size.includes(size));
        return check !== undefined;
      });
    }

    setProducts(temp);
    // if (filter.price.length > 0) {
    //   temp = temp.filter(e => {
    //     const check = e.price.filter(price => filter.size.includes(color))
    //     return check !== undefined
    //   });
    // }
  }, [filter, productData]);

  useEffect(() => {
    updateProducts();
    // setProducts(products.slice(0, perLoad));
  }, [updateProducts]);

  const filterRef = useRef(null);

  const showFilterRef = () => filterRef.current.classList.toggle("active");

  return (
    <div className="collection-list">
      <div className="collection-list__filter" ref={filterRef}>
        <div className="collection-list__filter__widget">
          <div className="collection-list__filter__widget__title">
            Category Product
          </div>
          <div className="collection-list__filter__widget__content">
            {category.map((item, index) => (
              <div
                key={index}
                className={`collection-list__filter__widget__content__item tags-item ${
                  filter.category.includes(item.categorySlug) ? "active" : ""
                }`}
                onClick={e => filterSelect("CATEGORY", e, item)}>
                {/* <CheckBox label={item.display}></CheckBox> */}
                {item.display}
              </div>
            ))}
          </div>
        </div>
        <div className="collection-list__filter__widget">
          <div className="collection-list__filter__widget__title">Price</div>
          <div className="collection-list__filter__widget__content">
            {price.map((item, index) => (
              <div
                key={index}
                className="collection-list__filter__widget__content__item">
                <CheckBox
                  label={item}
                  onChange={input => filterSelect("PRICE", input.checked, item)}
                  checked={filter.price.includes(item)}></CheckBox>
              </div>
            ))}
          </div>
        </div>
        <div className="collection-list__filter__widget">
          <div className="collection-list__filter__widget__title">Size</div>
          <div className="collection-list__filter__widget__content">
            {size.map((item, index) => (
              <div
                key={index}
                className="collection-list__filter__widget__content__item">
                <CheckBox
                  label={item.display}
                  onChange={input => filterSelect("SIZE", input.checked, item)}
                  checked={filter.size.includes(item.size)}></CheckBox>
              </div>
            ))}
          </div>
        </div>
        <div className="collection-list__filter__widget">
          <div className="collection-list__filter__widget__title">Color</div>
          <div
            className="collection-list__filter__widget__content"
            style={{ display: "flex" }}>
            {color.map((item, index) => (
              <div
                key={index}
                className="collection-list__filter__widget__content__item">
                <CheckBox
                  label={""}
                  shape={"circle"}
                  color={`bg-${item}`}
                  onChange={input => filterSelect("COLOR", input.checked, item)}
                  checked={filter.color.includes(item)}></CheckBox>
              </div>
            ))}
          </div>
        </div>
        <Button backgroundColor={"white"} onClick={() => clearFilter()}>
          Clear Filter
        </Button>
      </div>

      <div className="collection-list__content">
        {/* <div className={`collection-list__control span-${grid}`}> */}
        <div className={`collection-list__control`}>
          <div className="collection-list__control__left">
            <div className="filter" onClick={() => showFilterRef()}>
              <i className="bx bx-filter-alt"></i>
              <span>Filter</span>
            </div>
          </div>
          <div className="collection-list__control__right">
            <div className="collection-change-column-icon">
              <div
                className={`change-column ${grid === 4 ? "active" : null}`}
                onClick={() => setGrid(4)}>
                <i className="bx bxs-grid"></i>
              </div>
              <div
                className={`change-column ${grid === 3 ? "active" : null}`}
                onClick={() => setGrid(3)}>
                <i className="bx bxs-customize"></i>
              </div>
              <div
                className={`change-column ${grid === 2 ? "active" : null}`}
                onClick={() => setGrid(2)}>
                <i className="bx bxs-grid-alt"></i>
              </div>
            </div>
            <div className="collection-sorting">
              <button className="collection-sorting__btn">
                Default sorting
                <i className="bx bxs-down-arrow"></i>
              </button>
              <ul className="collection-sorting__dropdown-list">
                <li className="dropdown__item">
                  <span className="dropdown__text">Default sorting</span>
                  <i className="bx bx-sort-down"></i>
                </li>

                <li className="dropdown__item">
                  <span className="dropdown__text">Price</span>
                  <i className="bx bx-sort-down"></i>
                </li>
                <li className="dropdown__item">
                  <span className="dropdown__text">Price</span>
                  <i className="bx bx-sort-up"></i>
                </li>
                <li className="dropdown__item">
                  <span className="dropdown__text">Date</span>
                  <i className="bx bx-sort-down"></i>
                </li>
                <li className="dropdown__item">
                  <span className="dropdown__text">Date</span>
                  <i className="bx bx-sort-up"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <InfinityList col={grid} data={products} />
      </div>
    </div>
  );
};

CollectionList.propTypes = {};

export default CollectionList;
