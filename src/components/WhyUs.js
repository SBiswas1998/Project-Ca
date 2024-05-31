import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WhyUsCard from "./Card/WhyUsCard";

const WhyUs = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <section className="hm-services-sec">
      <Container>
        <Row>
          <Col className="hm-about-what-sec" xs={12} md={12} lg={12}>
            <h2>
              What <span> Us</span>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} md={12} lg={12} className="mt-5 what-us-text">
            <p>
              Just as most people entrust their cars to professional mechanics
              for maintenance, small businesses require the expertise of
              professional accountants to ensure smooth operations and identify
              potential issues. Similar to servicing your car at its authorized
              station for comprehensive care, we offer a range of services under
              one roof to address all your business's legal and financial needs.
            </p>
          </Col>
          <WhyUsCard />
        </Row>
      </Container>
    </section>
  );
};

export default WhyUs;
