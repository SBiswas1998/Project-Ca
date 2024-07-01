import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const StatutoryCompliance = () => {
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Statutory Compliance </h1>
              Statutory compliance refers to the legal framework within which an
              organization must operate, ensuring adherence to laws and
              regulations set by the government. It includes maintaining proper
              records, timely filing of returns, and meeting industry-specific
              requirements. Purminder Kaur & Associates provides comprehensive
              statutory compliance services, helping businesses navigate and
              fulfill their legal obligations efficiently.
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

export default StatutoryCompliance;
