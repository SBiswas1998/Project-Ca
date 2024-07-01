import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const SocietyRegistrations = () => {
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Society Registrations</h1>
              Society registration is essential for financial institutions
              seeking to establish a legal entity for their operations. Whether
              it's a cooperative society, credit union, or other financial
              organization, registration provides credibility and legal
              recognition. By becoming a registered society, financial entities
              gain access to various benefits, including tax exemptions, legal
              protections, and eligibility for government schemes and grants.
              Additionally, registration ensures compliance with regulatory
              requirements, instilling confidence among members and
              stakeholders. Purminder Kaur & Associates offers expert assistance
              in society registration, guiding financial institutions through
              the process efficiently and ensuring compliance with all legal
              obligations.
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

export default SocietyRegistrations;
