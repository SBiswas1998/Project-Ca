import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const Investment = () => {
  return (
    <>
      <ResHeader />
      <QuickEnquiryFrom />
      <section className="hm-services-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec" xs={12} md={12} lg={12}>
              <h2>Investment</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs={12} md={12} lg={12} className="mt-5 what-us-text">
              <p>
                Investment in finance involves allocating resources, typically
                money, with the expectation of generating income or profit over
                time. This process encompasses a variety of asset classes,
                including stocks, bonds, real estate, and mutual funds.
                Investors seek to balance risk and return based on their
                financial goals, risk tolerance, and investment horizon.
                Effective investment strategies often require thorough research
                and analysis, considering factors such as market trends,
                economic indicators, and company performance. Diversification,
                or spreading investments across different assets, is a common
                tactic to mitigate risk. Additionally, investments can be
                active, where the investor frequently buys and sells assets to
                capitalize on market movements, or passive, where they invest in
                index funds or ETFs to achieve steady, long-term growth.
                Overall, investment is a key component of financial planning,
                aiming to build wealth and secure financial stability for the
                future.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Investment;
