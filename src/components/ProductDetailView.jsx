import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Grid from "./Grid";
import RatingStart from "./RatingStart";
import Button from "./Button";
// import Aos from "aos";

const ProductDetailView = props => {
  const { product, review } = props;

  const [itemShow, setItemShow] = useState(0);

  // useEffect(() => {
  //   // Aos.init({ duration: 2000 });
  //   Aos.init({
  //     offset: 50,
  //     duration: 1000,
  //     easing: "linear",
  //     // delay: 100
  //     once: true
  //     // startEvent:()=>{
  //     //   return
  //     // }
  //   });
  // }, []);

  useEffect(() => {
    setItemShow(0);
  }, [product, review]);

  const preTreatmentDescriptions = () => {
    let description = [];
    let temp = product.description;

    do {
      const index = temp.indexOf(".");
      description.push(temp.slice(0, index));
      temp = temp.slice(index + 1);
    } while (temp.indexOf(".") !== -1);
    return description;
  };

  const description = preTreatmentDescriptions();

  return (
    <div className="product-detail" data-aos={"fade-up"}>
      <div className="product-detail__header">
        <span
          onClick={() => setItemShow(0)}
          className={`${itemShow === 0 ? "active" : ""}`}>
          Description
        </span>
        <span
          onClick={() => {
            setItemShow(1);
            // Aos.refreshHard();
          }}
          className={`${itemShow === 1 ? "active" : ""}`}>
          Additional
        </span>
        <span
          onClick={() => setItemShow(2)}
          className={`${itemShow === 2 ? "active" : ""}`}>
          Review
        </span>
      </div>
      <div className="product-detail__body">
        <div className="content">
          {/* Description */}
          <div
            className={`product-detail__body__item product-detail__body__description ${
              itemShow === 0 ? "active" : ""
            }`}>
            {description.map((item, index) => (
              <p
                key={index}
                // data-aos="fade-left"
              >
                {item}
              </p>
            ))}
          </div>
          {/*End Description */}

          {/* Additional */}
          <div
            className={`product-detail__body__item product-detail__body__additional ${
              itemShow === 1 ? "active" : ""
            }`}>
            <div className="flex">
              <div
                className="product-detail__body__additional__item product-detail__body__additional__more-infomation"
                data-aos="fade-up">
                <div className=" product-detail__body__additional__more-infomation__title">
                  Things You Need To Know
                </div>
                <div className=" product-detail__body__additional__more-infomation__body">
                  <Grid col={2} mdCol={2} smCol={1} gap={20}>
                    <div className="body__item">
                      <p>
                        We use industry standard SSL encryption to protect your
                        details. Potentially sensitive information such as your
                        name, address and card details are encoded so they can
                        only be read on the secure server.
                      </p>
                      <ul>
                        <li>Safe Payments</li>
                        <li>Accept Credit Cart</li>
                        <li>Different Payment Method</li>
                        <li>Price Include VAT</li>
                        <li>Easy To Order</li>
                      </ul>
                    </div>
                    <div className="body__item">
                      <ul>
                        Express Delivery
                        <li>Europe & USA within 2-4 days</li>
                        <li>Rest of the world within 3-7 days</li>
                        <li>Selected locations</li>
                      </ul>

                      <ul>
                        Need More Information
                        <li>Orders & Shipping</li>
                        <li>Returns & Refunds</li>
                        <li>Payments</li>
                        <li>Your Orders</li>
                      </ul>
                    </div>
                  </Grid>
                </div>
              </div>
              <div className="product-detail__body__additional__item product-detail__body__additional__image">
                <img src={product.images[0]} alt="" data-aos="fade-right" />
              </div>
            </div>
          </div>
          {/*End Additional */}

          {/* Review */}
          <div
            className={`product-detail__body__item product-detail__body__review ${
              itemShow === 2 ? "active" : ""
            }`}>
            <div className=" product-detail__body__review__title">
              CUSTOMER REVIEWS
            </div>
            <div className=" product-detail__body__review__content">
              No reviews yet
              <div className="product-detail__body__review__content__post">
                <div className="product-detail__body__review__content__post__item">
                  <img src={product.images[0]} alt="" />
                </div>
                <div className="product-detail__body__review__content__post__item">
                  <RatingStart number={0} />
                </div>
                <div className="product-detail__body__review__content__post__item">
                  <textarea
                    cols="30"
                    rows="10"
                    placeholder="Write your review"></textarea>
                </div>
                <div className="product-detail__body__review__content__post__item ">
                  <div className="item__button">
                    <Button>Cancel</Button>
                    <Button>Post Review</Button>
                  </div>
                </div>
              </div>
              <div className="product-detail__body__review__content__comment">
                <div className="product-detail__body__review__content__comment__item">
                  <div className="header-comment__item">
                    <img src={product.images[0]} alt="" />
                    <div className="name-and-time">
                      <h3 className="name">Tài Nguyễn</h3>
                      <div className="time">
                        <i className="bx bx-time"></i>&nbsp; 7 hours ago
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-detail__body__review__content__comment__item">
                  <RatingStart number={5} />
                </div>
                <div className="product-detail__body__review__content__comment__item">
                  <p>
                    Được dịch từ tiếng Anh-Trong xuất bản và thiết kế đồ họa,
                    Lorem ipsum là văn bản giữ chỗ thường được sử dụng để thể
                    hiện hình thức trực quan của tài liệu hoặc kiểu chữ mà không
                    dựa trên nội dung có ý nghĩa. Lorem ipsum có thể được sử
                    dụng làm trình giữ chỗ trước khi có bản cuối cùng.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End Review */}
        </div>
      </div>
      <div className="product-detail__footer">
        <a
          className="product-detail__footer__item"
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer noopener">
          <i className="bx bxl-twitter"></i>
        </a>
        <a
          className="product-detail__footer__item"
          href="https://facebook.com/"
          target="_blank"
          rel="noreferrer noopener">
          <i className="bx bxl-facebook"></i>
        </a>
        <a
          className="product-detail__footer__item"
          href="https://https://www.instagram.com/"
          target="_blank"
          rel="noreferrer noopener">
          <i className="bx bxl-instagram"></i>
        </a>
      </div>
    </div>
  );
};

ProductDetailView.propTypes = {};

export default ProductDetailView;
