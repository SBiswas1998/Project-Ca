import React from "react";
import {
  Aboutsection,
  Footer,
  Hero,
  NewsSection,
  Servicesection,
  Supportsection,
} from "../../components/Layout";
import { AboutSpan, AboutText, AboutTitle } from "../../constants/Paragram";
import aboutbanner from "../../assets/images/aboutimg.jpg";
import MobileHero from "../../components/MobileView/Hero";

const index = () => {
  return (
    <>
      <Hero />
      <MobileHero/>
      <Aboutsection
        text={AboutText}
        title={AboutTitle}
        span={AboutSpan}
        src={aboutbanner}
      />
      <Servicesection />
      <NewsSection />
      <Supportsection />
      <Footer />
    </>
  );
};

export default index;
