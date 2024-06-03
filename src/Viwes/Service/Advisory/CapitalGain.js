import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const CapitalGain = () => {
  return (
    <>
      <ResHeader />
      <QuickEnquiryFrom />
      <section className="hm-services-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec" xs={12} md={12} lg={12}>
              <h2>Capital Gain</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs={12} md={12} lg={12} className="mt-5 what-us-text">
              <p>
                Capital gain in finance refers to the profit realized from the
                sale of an asset, such as stocks, bonds, real estate, or other
                investments, when the sale price exceeds the purchase price.
                This gain is classified into two categories: short-term and
                long-term. Short-term capital gains arise from assets held for
                one year or less and are typically taxed at the individual's
                ordinary income tax rate. Long-term capital gains, resulting
                from assets held for more than one year, are generally taxed at
                lower rates, providing an incentive for long-term investment.
                The calculation of capital gains involves deducting the asset's
                purchase price and any associated costs (like transaction fees)
                from the selling price. It's a critical concept in personal
                finance and investing, influencing decisions on when to buy or
                sell assets to optimize tax liabilities and investment returns.
                Understanding capital gains is essential for effective financial
                planning and wealth management, as it impacts the overall
                profitability of investment portfolios.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default CapitalGain;
