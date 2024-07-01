import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const TaxPayment = () => {
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Tax Payment</h1>
              When filing your taxes, it's crucial to include all relevant
              information to ensure accuracy and compliance. Begin by clearly
              stating your full name, address, and Social Security number or
              taxpayer identification number. Next, specify the tax year being
              filed and the type of tax return (e.g., individual income tax,
              corporate tax). Provide details of your income sources, including
              wages, interest, dividends, and any other taxable earnings.
              Deductions and credits play a significant role in reducing your
              tax liability, so list all eligible expenses and credits, such as
              mortgage interest, charitable contributions, and education
              expenses. Ensure you accurately report any tax payments made
              throughout the year, including withholding from wages, estimated
              tax payments, and any credits applied. Finally, review your
              paragraph for completeness and accuracy before submitting your tax
              return to the appropriate tax authority.
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

export default TaxPayment;
