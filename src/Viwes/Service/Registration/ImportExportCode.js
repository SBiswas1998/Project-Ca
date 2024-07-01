import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const ImportExportCode = () => {
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Import Export Code</h1>
              An Import Export Code (IEC), issued by the Directorate General of
              Foreign Trade (DGFT), is essential for individuals or companies in
              India engaging in international trade. It is crucial for customs
              clearance, shipping, and international financial transactions,
              ensuring regulatory compliance and facilitating global business
              expansion.
            </p>
          </Col>
          <Col xs={12} md={7}>
            <QuickEnquiryFrom />
          </Col>
        </Row>
      </Container>{" "}
      <Footer />
    </>
  );
};

export default ImportExportCode;
