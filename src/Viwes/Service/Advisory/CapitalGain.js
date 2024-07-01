import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const CapitalGain = () => {
  return (
    <>
      <ResHeader />
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Capital Gain</h1>
              Capital gain in finance refers to the profit realized from the
              sale of an asset, such as stocks, bonds, real estate, or other
              investments, when the sale price exceeds the purchase price. This
              gain is classified into two categories: short-term and long-term.
              Short-term capital gains arise from assets held for one year or
              less and are typically taxed at the individual's ordinary income
              tax rate. Long-term capital gains, resulting from assets held for
              more than one year, are generally taxed at lower rates, providing
              an incentive for long-term investment. The calculation of capital
              gains involves deducting the asset's purchase price and any
              associated costs (like transaction fees) from the selling price.
              It's a critical concept in personal finance and investing,
              influencing decisions on when to buy or sell assets to optimize
              tax liabilities and investment returns. Understanding capital
              gains is essential for effective financial planning and wealth
              management, as it impacts the overall profitability of investment
              portfolios.
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
