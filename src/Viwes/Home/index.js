import React from "react";
import {
  Aboutsection,
  Footer,
  Hero,
  NewsSection,
  Servicesection,
  Supportsection,
  Topbar,
} from "../../components/Layout";
import { AboutSpan, AboutText, AboutTitle } from "../../constants/Paragram";
import aboutbanner from "../../assets/images/hm-about.jpg";
import ResHeader from "../../components/ResponsiveMemu/Header";

const index = () => {
  return (
    <>
      <Topbar />
      <ResHeader />
      <Hero />
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
