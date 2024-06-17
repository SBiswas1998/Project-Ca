import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import aboutImage from "../../assets/images/profileImgOne.jpg";


const Aboutsection = () => {
  return (
    <>
      <section className="hm-About-sec">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={7} className="hm-About-title">
              <h2>
                About <span> Us</span>
              </h2>
              <p>
                Purminder Kaur & Associates,founded in 2011 by FCA Purminder
                Kaur, has rapidly emerged as a leading Chartered Accountancy
                Firm in the north region. With a commitment to simplifying
                accounting for all, we offer unparalleled solutions with a focus
                on professionalism and customer satisfaction. Our team of highly
                qualified associates ensures transparent, efficient, and
                diligent service to clients across various industries, from High
                Net Worth Individuals to MSMEs and offshore companies worldwide.
                With a diverse clientele and a vision to expand our presence
                nationwide, we continue to strive for excellence, driven by our
                growing base of satisfied customers.
              </p>
            </Col>
            <Col  sm={12} md={6} lg={5} className="hm-About-img">
              <img src={aboutImage}alt="" srcset=""/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Aboutsection;
