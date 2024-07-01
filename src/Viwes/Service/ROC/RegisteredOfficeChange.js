import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const RegisteredOfficeChange = () => {
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Registered Office Change</h1>
              Changing the registered office of a company is a significant
              administrative process that requires careful planning and
              compliance with legal procedures. This change must be approved by
              the board of directors and notified to the Registrar of Companies.
              Ensuring all documentation and filings are accurately completed is
              crucial to avoid any legal issues.
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

export default RegisteredOfficeChange;
