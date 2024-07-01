import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const NoticeSCOTIN = () => {
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Notice scrutiny</h1>
              Notice scrutiny is a critical process for financial institutions
              to ensure compliance with regulatory requirements and address any
              discrepancies or issues promptly. As part of regulatory oversight,
              financial entities receive notices from regulatory authorities,
              such as the Securities and Exchange Board of India (SEBI) or the
              Reserve Bank of India (RBI), regarding various aspects of their
              operations. These notices may pertain to compliance with laws and
              regulations, financial reporting, or specific transactions.
              Effective scrutiny of notices involves thorough examination,
              understanding, and timely response to ensure adherence to
              regulatory standards and avoid penalties or legal repercussions.
              Purminder Kaur & Associates offers expert assistance to financial
              institutions in navigating notice scrutiny processes, ensuring
              comprehensive compliance and mitigating regulatory risks
              effectively.
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

export default NoticeSCOTIN;
