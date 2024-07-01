import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const Investment = () => {
  return (
    <>
      <ResHeader />
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Investment</h1>
              Investment in finance involves allocating resources, typically
              money, with the expectation of generating income or profit over
              time. This process encompasses a variety of asset classes,
              including stocks, bonds, real estate, and mutual funds. Investors
              seek to balance risk and return based on their financial goals,
              risk tolerance, and investment horizon. Effective investment
              strategies often require thorough research and analysis,
              considering factors such as market trends, economic indicators,
              and company performance. Diversification, or spreading investments
              across different assets, is a common tactic to mitigate risk.
              Additionally, investments can be active, where the investor
              frequently buys and sells assets to capitalize on market
              movements, or passive, where they invest in index funds or ETFs to
              achieve steady, long-term growth. Overall, investment is a key
              component of financial planning, aiming to build wealth and secure
              financial stability for the future.
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

export default Investment;
