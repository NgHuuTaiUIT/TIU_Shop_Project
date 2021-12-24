import React from "react";

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
import News from "../components/News";
import PolicyCard from "../components/PolicyCard";

const Home = () => {
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
                  key={index}
                  product={item}
                  link={"/"}
                  price={Number.parseFloat(item.price)}
                />
              ))}
            </Grid>
            {/* <SlideProduct data={productData.getAllProducts()} size={"24%"}>
              {productData.getAllProducts().map((item, index) => (
                <ProductCard
                  key={index}
                  title={item.title}
                  images={item.images}
                  slug={item.categorySlug}
                  size={item.size}
                  link={"/"}
                  price={Number.parseFloat(item.price)}
                />
              ))}
            </SlideProduct> */}
          </SectionBody>
        </Section>
      </div>

      <Section style={{ backgroundColor: "#e9e9e9", padding: "50px" }}>
        <SectionTitle>You Might Also Like</SectionTitle>
        <SectionBody>
          <Grid col={4} gap={20}>
            <Card>
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
            <Card>
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
            <Card
            // style={{ gridColumn: "3 / 5" }}
            >
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
            <Card
            // style={{ gridColumn: "1 / 3" }}
            >
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
            <Card>
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
            <Card>
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
        style={{
          background: `url("https://cdn.shopify.com/s/files/1/0550/6665/6987/files/h1-banner-under.jpg?v=1633421819") no-repeat `,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
        <SectionTitle style={{ color: "#fff" }}>TESTIMONIALS</SectionTitle>
        <SectionBody>
          <SlideProduct
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
              <News
                image={
                  "https://cdn.shopify.com/s/files/1/0550/6665/6987/articles/blog1_1024x1024.jpg?v=1633138354"
                }
                title="WAISTCOAT WITH T-SHIRTS & UNBUTTONED SHIRTS"
                description="
            Men should play around with shirting, styling the look formally or giving it a more relaxed feel, depending on the shirt. It’s all...
          "
              />
              <News
                image={
                  "https://cdn.shopify.com/s/files/1/0550/6665/6987/articles/blog3_d76e3322-5bcd-409f-bc30-ea8227c5c060_1024x1024.jpg?v=1633140834"
                }
                title="A STATEMENT OF STYLE: THE WOMEN’S VELEDA"
                description="
              Few things are as chic than the stunning midnight blue one-button tuxedo jacket in Italian wool crepe, accentuated by a deep black...
            "
              />
              <News
                image={
                  "https://cdn.shopify.com/s/files/1/0550/6665/6987/articles/blog4_1024x1024.jpg?v=1633140681"
                }
                title="CO-ORDINATING BUSINESS SUITS FOR BOTH MEN & WOMEN"
                description="
              Vedela is rapidly becoming the label of first choice for business & organisations that operate across a range of latitudes. The fabric...
            "
              />
            </Grid>
          </SectionBody>
        </Section>
      </div>

      {/* End News */}
    </Helmet>
  );
};

export default Home;
