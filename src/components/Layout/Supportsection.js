import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SupportCard from "../Card/SupportCard";

const Supportsection = () => {
  return (
    <>
      <section className="hm-support-sec">
      <Container>
          <Row>
            <Col className="hm-services-title">
              <h2>
              Reason To Choose <span> Purminder Kaur & Associates</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col className="">
            <SupportCard />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Supportsection;
