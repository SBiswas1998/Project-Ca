import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const CapitalGain = () => {
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Capital Gain</h1>
              When reporting capital gains for income tax purposes, it's crucial
              to provide all relevant information accurately. Begin by detailing
              the asset sold, including its description, acquisition date, and
              sale date. Specify the sale proceeds and the original purchase
              price to calculate the capital gain. Deduct any allowable expenses
              related to the sale, such as brokerage fees or commissions, to
              arrive at the net capital gain. Identify the applicable tax rate
              based on the duration of the asset's ownership, whether it's
              short-term or long-term. Ensure compliance with any tax
              regulations or reporting requirements specific to your
              jurisdiction. Accurate record-keeping and documentation are
              essential to support your capital gain calculations and tax
              filings. Consulting a tax professional for guidance can help
              navigate complexities and maximize tax efficiency.
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

export default CapitalGain;
