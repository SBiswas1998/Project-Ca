import React from "react";
import { Footer } from "../components/Layout";
import QuickEnquiryFrom from "../components/Forms/QuickEnquiryFrom";
import ResHeader from "../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const Taxtion = () => {
  return (
    <>
      <ResHeader />
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">TAXATION</h1>
              Taxation is a system where a government collects financial
              contributions from its citizens and businesses to fund public
              services and infrastructure. Taxes can be levied on income,
              property, sales, and more. Effective taxation policies are
              essential for economic stability and development, ensuring
              resources are available for health, education, and security.
            </p>
          </Col>
          <Col xs={12} md={7}>
            <QuickEnquiryFrom />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Taxtion;
