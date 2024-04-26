import { useState } from "react";
import ExampleCarouselImage from "../ExampleCarouselImage";
import banner from "../../assets/images/banner=1.jpg";
import banner1 from "../../assets/images/tax.jpg";
import banner2 from "../../assets/images/gorwth.jpeg";
import ResHeader from "../ResponsiveMemu/Header";
import { Carousel } from "antd";

const Hero = () => {
  const [dotPosition, setDotPosition] = useState("right");

  return (
    <>
      <ResHeader />
      <Carousel autoplay dotPosition={dotPosition}>
        <div>
          <ExampleCarouselImage
            src={banner}
            text="Welcome To Purminder Kaur & Associates"
            herobtn="Get Advice"
          />
        </div>
        <div>
          <ExampleCarouselImage
            src={banner1}
            text="One Stop Accounting, Tax & Audit Firm"
            herobtn="Send Enquiry"
          />
        </div>
        <div>
          <ExampleCarouselImage
            src={banner2}
            text="Do You Need Any Advice for START-UP ?"
            herobtn="We Can Help You"
          />
        </div> 
      </Carousel>
    </>
  );
};

export default Hero;
