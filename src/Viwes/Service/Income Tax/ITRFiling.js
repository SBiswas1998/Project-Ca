import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const ITRFiling = () => {
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">ITR Filing</h1>
              When filing your Income Tax Return (ITR), it's crucial to include
              all pertinent information accurately. Begin by providing your
              personal details, including your full name, permanent account
              number (PAN), and contact information. Next, outline your income
              sources comprehensively, such as salary, business profits, rental
              income, capital gains, and any other earnings. Remember to include
              details of any exemptions or deductions you're eligible for, like
              HRA (House Rent Allowance), LTA (Leave Travel Allowance),
              investments under Section 80C, and medical insurance premiums
              under Section 80D. Additionally, disclose any foreign assets or
              income if applicable. Ensure that all information is presented
              clearly and accurately to facilitate smooth processing and
              compliance with tax regulations. Double-checking your entries for
              accuracy can help avoid any discrepancies or audits.
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

export default ITRFiling;
