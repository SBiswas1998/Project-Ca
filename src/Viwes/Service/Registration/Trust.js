import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const Trust = () => {
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Trust</h1>
              Establishing a trust is a pivotal step for financial institutions
              aiming to formalize their operations and ensure legal recognition.
              Trusts serve as a structured framework for managing funds, assets,
              and investments, providing transparency and accountability to
              stakeholders. By registering as a trust, financial entities gain
              credibility and trustworthiness, attracting investors and donors.
              Trust registration also offers tax benefits and legal protections,
              enhancing the financial stability and sustainability of the
              institution. Purminder Kaur & Associates specializes in trust
              registration, offering expert guidance to financial organizations
              to navigate the process seamlessly and establish a robust
              foundation for their operations.
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

export default Trust;
