import React, { useState, useEffect } from "react";
import { Aboutsection, Footer } from "../../components/Layout";
import {
  ProfileSpan,
  ProfileText,
  ProfileTitle,
} from "../../constants/Paragram";
import aboutImage from "../../assets/images/aboutimg-banner.jpg";
import OurValue from "../../components/OurValue";
import WhatWeDo from "../../components/WhatWeDo";
import WhyUs from "../../components/WhyUs";
import ResHeader from "../../components/ResponsiveMemu/Header";
import TitleSection from "../../components/TitleSection";
import OtherPageLoader from "../../components/Loader/OtherPageLoader";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds
  }, []);

  return (
    <>
      
      {isLoading ? (
        <OtherPageLoader /> // Display loader here
      ) : (
        <>
          <ResHeader />
          <TitleSection text="About" />
          <Aboutsection
            text={ProfileText}
            title={ProfileTitle}
            span={ProfileSpan}
            src={aboutImage}
          />
          <OurValue />
          <WhatWeDo />
          <WhyUs />
          <Footer />
        </>
      )}
    </>
  );
};

export default About;
