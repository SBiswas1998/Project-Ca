import { useState } from "react";
import ExampleCarouselImage from "../ExampleCarouselImage";
import banner from "../../assets/images/banner=1.jpg";
import banner1 from "../../assets/images/tax.jpg";
import banner2 from "../../assets/images/gorwth.jpeg";
import ResHeader from "../ResponsiveMemu/Header";
import { Carousel } from "antd";

const Hero = () => {
  return (

    <>
      <div className="desktop-view">
        <ResHeader />
        <div className="text-white">
          <p>Welcome To Purminder Kaur & Associates</p>
          <br />
          <button className="desktop-view-hero-btn">Get Advice</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
