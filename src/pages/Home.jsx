import React, { useEffect } from "react";

import Helmet from "../components/Helmet";
import Slider from "../components/Slider";
import Banner from "../components/Banner";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import Grid from "../components/Grid";

import sliderData from "../assets/Json/sliderData.json";
import bannerData from "../assets/Json/bannerData.json";
import productData from "../assets/fake-data/product";
import policy from "../assets/fake-data/policy";

import employeeData from "../assets/Json/employeeData.json";

import ProductCard from "../components/ProductCard";
import SlideProduct from "../components/SlideProduct";
import QuickView from "../components/QuickView";
import Card, { CardBody, CardTitle } from "../components/Card";
import { Link } from "react-router-dom";
import TestimonialsCard from "../components/TestimonialCard";
import PolicyCard from "../components/PolicyCard";
import NewsItem from "../components/NewsItem";
import newsData from "../assets/fake-data/news";
// import Aos from "aos";
// import "aos/dist/aos.css";

const Home = () => {
  // useEffect(() => {
  //   // Aos.init({ duration: 2000 });
  //   Aos.init({
  //     offset: 50,
  //     duration: 1000,
  //     easing: "linear",
  //     // delay: 100
  //     once: true
  //   });
  // }, []);

  return (
    <Helmet title="Home">
      {/* Slider*/}
      <Slider data={sliderData} />
      <div className="container">
        <Banner data={bannerData} />
        <Section>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {policy.map((item, index) => (
                <PolicyCard
                  dataAos={index > 1 ? "fade-left" : "fade-right"}
                  key={index}
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
        {/*End slider */}

        {/* Best Seller Section*/}
        <Section>
          <SectionTitle>Our Best Seller</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={2} gap={20}>
              {productData.getAllProducts().map((item, index) => (
                <ProductCard
                  // dataAos={"flip-left"}
                  dataAos={"zoom-in"}
                  key={index}
                  product={item}
                  link={"/"}
                  price={Number.parseFloat(item.price)}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
      </div>

      <Section style={{ backgroundColor: "#e9e9e9", padding: "50px" }}>
        <SectionTitle>You Might Also Like</SectionTitle>
        <SectionBody>
          <Grid col={4} gap={20}>
            <Card dataAos={"fade-right"}>
              <CardBody>
                <img
                  src="https://cdn.shopify.com/s/files/1/0550/6665/6987/files/h1-banner-11_2.jpg?v=1634006926"
                  alt="hu"
                />
              </CardBody>
              <CardTitle>
                <h3>
                  <Link to="#">MEN SUITS</Link>
                </h3>
              </CardTitle>
            </Card>
            <Card dataAos={"fade-right"}>
              <CardBody>
                <img
                  src="https://cdn.shopify.com/s/files/1/0550/6665/6987/files/h1-banner-11_4.jpg?v=1634008771"
                  alt="hu"
                />
              </CardBody>
              <CardTitle>
                <h3>
                  <Link to="#">BLUE TIERS</Link>
                </h3>
              </CardTitle>
            </Card>
            <Card dataAos={"fade-left"}>
              <CardBody>
                <img
                  src="	https://cdn.shopify.com/s/files/1/0550/6665/6987/files/h1-banner-11_5.jpg?v=1634010518"
                  alt="hu"
                />
              </CardBody>
              <CardTitle>
                <h3>
                  <Link to="#">COMBINATIONS FOR GENTLEMEN</Link>
                </h3>
              </CardTitle>
            </Card>
            <Card dataAos={"fade-right"}>
              <CardBody>
                <img
                  src="https://cdn.shopify.com/s/files/1/0550/6665/6987/files/h1-banner-11_6.jpg?v=1634011276"
                  alt="hu"
                />
              </CardBody>
              <CardTitle>
                <h3>
                  <Link to="#">COMBINATION FOR LADIES</Link>
                </h3>
              </CardTitle>
            </Card>
            <Card dataAos={"fade-left"}>
              <CardBody>
                <img
                  src="https://cdn.shopify.com/s/files/1/0550/6665/6987/files/h1-banner-11_1.jpg?v=1634008186"
                  alt="hu"
                />
              </CardBody>
              <CardTitle>
                <h3>
                  <Link to="#">WRAP SKIRT</Link>
                </h3>
              </CardTitle>
            </Card>
            <Card dataAos={"fade-left"}>
              <CardBody>
                <img
                  src="		https://cdn.shopify.com/s/files/1/0550/6665/6987/files/h1-banner-11_3.jpg?v=1634008186"
                  alt="hu"
                />
              </CardBody>
              <CardTitle>
                <h3>
                  <Link to="#">STELLA COAT</Link>
                </h3>
              </CardTitle>
            </Card>
          </Grid>
        </SectionBody>
      </Section>

      <div className="container">
        <Section>
          <SectionTitle>Flash Sale</SectionTitle>
          <SectionBody>
            <SlideProduct
              dataAos={"zoom-in"}
              data={productData.getAllProducts()}
              size={4}
              mdsize={2}
              smsize={2}
              timeOut={5000}>
              {productData.getAllProducts().map((item, index) => (
                <ProductCard
                  key={index}
                  product={item}
                  link={"/"}
                  price={Number.parseFloat(item.price)}
                />
              ))}
            </SlideProduct>
          </SectionBody>
        </Section>
      </div>

      {/*End Best Seller Section*/}

      {/* Member */}

      <Section
        dataAos="fade-up"
        style={{
          background: `url("https://cdn.shopify.com/s/files/1/0550/6665/6987/files/h1-banner-under.jpg?v=1633421819") no-repeat `,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
        <SectionTitle style={{ color: "#fff" }}>TESTIMONIALS</SectionTitle>
        <SectionBody>
          <SlideProduct
            dataAos={"fade-up"}
            data={productData.getAllProducts()}
            size={1}
            // _left={101.5}
            mdsize={1}
            auto={false}>
            {employeeData.map((item, index) => (
              <TestimonialsCard item={item} key={index} />
            ))}
          </SlideProduct>
        </SectionBody>
      </Section>

      {/* End Member Slider */}

      {/* News */}
      <div className="container">
        <Section>
          <SectionTitle>OUR BLOGS</SectionTitle>

          <SectionBody>
            <Grid col={3} smCol={1} mdCol={2}>
              {newsData.getNews(3).map((item, index) => (
                <NewsItem
                  dataAos={"zoom-in"}
                  image={item.imageBanner}
                  title={item.title}
                  description={item.description}
                  timePost={item.timePost}
                  slug={item.slug}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
      </div>

      {/* End News */}
    </Helmet>
  );
};

export default Home;
