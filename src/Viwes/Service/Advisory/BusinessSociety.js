import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const BusinessSociety = () => {
  return (
    <>
      <ResHeader />
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Business Society</h1>
              Business and society are deeply intertwined, especially in the
              realm of finance. Financial institutions and markets play a
              pivotal role in driving economic growth and development, impacting
              every facet of society. Companies rely on financial resources to
              innovate, expand, and create jobs, which in turn boosts consumer
              confidence and spending. Ethical finance practices, such as
              responsible lending and sustainable investing, are increasingly
              important as they ensure long-term societal well-being and
              environmental stewardship. Moreover, financial literacy among the
              general populace empowers individuals to make informed decisions,
              fostering economic stability and reducing inequality. As
              businesses embrace corporate social responsibility (CSR), they
              contribute to societal goals by addressing social, environmental,
              and economic challenges. Thus, the symbiotic relationship between
              finance and society underscores the importance of sustainable and
              ethical financial practices in fostering a thriving, equitable,
              and resilient economy.
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

export default BusinessSociety;
