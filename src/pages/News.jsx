import React from "react";
import { Link } from "react-router-dom";
import newsData from "../assets/Json/newsData.json";
import BannerPage from "../components/BannerPage";
import Helmet from "../components/Helmet";
const News = props => {
  return (
    <Helmet title={"News"}>
      <BannerPage
        imgBackground={
          "https://cdn.shopify.com/s/files/1/0550/6665/6987/files/page-2.jpg?v=1633318013"
        }
        title={"Blogs"}
      />
      <div className="news">
        <div className="news__side-bar">
          <div className="news__side-bar__search">
            <input type="text" placeholder="Search..." />
            <i className="bx bx-x"></i>
          </div>
          <div className="news__side-bar__recent">
            <h3 className="side-bar__title"> RECENT POSTS</h3>
            {newsData.map((item, index) => (
              <Link
                to={`${item.slug}`}
                className="news__side-bar__recent__item">
                <img src={item.imageBanner} alt="" />
                <div className="news__side-bar__recent__item__info">
                  <p>{item.timePost}</p>
                  <h3>{item.title}</h3>
                  <p>0 Comments</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="news__side-bar__tags">
            <h3 className="side-bar__title">RECENT POSTS</h3>
            <img
              src="https://cdn.shopify.com/s/files/1/0550/6665/6987/files/shopify-banner-sidebar.jpg?v=1633317446"
              alt=""
            />
          </div>
        </div>
        <div className="news__content">
          {newsData.map((item, index) => (
            <div className="news__content__item">
              <div className="main-image">
                <Link to={`${item.slug}`}>
                  <img src={item.imageBanner} alt="" />
                </Link>
              </div>

              <div className="info">
                <Link to={`${item.slug}`}>
                  <h3>{item.title}</h3>
                </Link>

                <p>{item.description}</p>
                <p>{item.timePost}</p>
                <div className="read-more">
                  <Link to={`${item.slug}`}>Read more</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Helmet>
  );
};

export default News;
