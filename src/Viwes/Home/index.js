import React from "react";
import {
  Footer,
  Hero,
  NewsSection,
  Servicesection,
  Supportsection,
} from "../../components/Layout";
import aboutbanner from "../../assets/images/Accountant-amico.png";
import AboutHerosection from "../../components/Layout/AboutHerosection";

const index = () => {
  return (
    <>
      <Hero />
      <AboutHerosection src={aboutbanner}/>
      <div className="text-center mt-5 mb-5 hero-banner-sub-text">
        <h1> <b>Welcome to Purminder Kaur & Associates</b></h1>
        <h3><b>One Stop solutions for  all financial needs</b></h3>
      </div>
      <Servicesection />
      {/* <NewsSection /
      > */} 
      <Supportsection />
      <Footer />
    </>
  );
};

export default index;
