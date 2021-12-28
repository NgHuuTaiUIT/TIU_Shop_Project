import React from "react";
import PropTypes from "prop-types";
import Helmet from "../components/Helmet";
import { useParams } from "react-router-dom";
import newsData from "../assets/fake-data/news";
import SlideProduct from "../components/SlideProduct";
import NewsItem from "../components/NewsItem";
import { SectionTitle } from "../components/Section";

const NewsDetail = props => {
  const { slug } = useParams();

  //   const news = JSON.stringify(newsData.getNewsBySlug(slug));
  const news = newsData.getNewsBySlug(slug);
  console.log(typeof news);
  // JSON.stringify
  //   const relatedNews = newsData.getNews(8);

  return (
    <Helmet title={"Blogs"}>
      <div className="container">
        <div className="news-detail">
          <div
            className="news-detail__banner"
            style={{
              background: `url(${news.imageBanner}) no-repeat`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              paddingTop: "80%"
            }}>
            <div className="news-detail__banner__info">
              <h2>{news.title}</h2>
              <ul>
                <li>
                  <i className="bx bxs-user"></i> Tài Nguyễn
                </li>
                <li>
                  <i className="bx bxs-time-five"></i> {news.timePost}
                </li>
                <li>
                  <i className="bx bxs-comment"></i> 0 Comments
                </li>
              </ul>
            </div>
          </div>
          <div className="news-detail__content">
            {news.descriptionDetail.map((item, index) => (
              <p key={index}>{item}</p>
            ))}

            {news.images.map((item, index) => (
              <img key={index} src={item} alt="" />
            ))}
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
        <div className="news-detail__related">
          <SectionTitle>RELATED PRODUCTS</SectionTitle>
          <SlideProduct
            data={news}
            size={3}
            mdsize={2}
            smsize={1}
            _left={51}
            timeOut={5000}>
            {newsData.getAllnews().map((item, index) => (
              <NewsItem
                dataAos={"zoom-in"}
                image={item.imageBanner}
                title={item.title}
                description={item.description}
                timePost={item.timePost}
                slug={item.slug}
              />
            ))}
          </SlideProduct>
        </div>
      </div>
    </Helmet>
  );
};

NewsDetail.propTypes = {};

export default NewsDetail;
