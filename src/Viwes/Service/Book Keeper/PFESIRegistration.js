import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const PFESIRegistration = () => {
  return (
    <>
      <ResHeader />
      <QuickEnquiryFrom />
      <section className="hm-services-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec" xs={12} md={12} lg={12}>
              <h2>PF & ESI Registration</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs={12} md={12} lg={12} className="mt-5 what-us-text">
              <p>
                Registering for Provident Fund (PF) and Employee State Insurance
                (ESI) is imperative for financial stability and compliance in
                bookkeeping. PF registration mandates employers to contribute a
                percentage of their employees' salary towards a retirement fund,
                ensuring financial security post-employment. Similarly, ESI
                registration requires employers to contribute towards a health
                insurance scheme for their employees, covering medical expenses
                and providing social security. These registrations not only
                fulfill legal obligations but also demonstrate an employer's
                commitment to employee welfare and financial well-being. Proper
                documentation and adherence to regulatory guidelines during the
                registration process are crucial for maintaining accurate
                financial records and ensuring seamless bookkeeping practices.
                Compliance with PF and ESI regulations not only fosters trust
                between employers and employees but also fosters a healthy work
                environment conducive to productivity and growth.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default PFESIRegistration;
