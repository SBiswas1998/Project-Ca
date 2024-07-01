import React from "react";
import { Footer } from "../../../components/Layout";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";
import QuickEnquiryForm from "../../../components/Forms/QuickEnquiryFrom";

const Assessment = () => {
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Assessment</h1>
              The Goods and Services Tax (GST) has been a significant
              game-changer in the Indian economy. Introduced in 2017, it has
              simplified the indirect tax system by consolidating multiple taxes
              into a single levy. One of the key benefits of GST is its ease of
              compliance, which has reduced the administrative burden on
              businesses. With GST, businesses no longer need to worry about
              navigating multiple tax rates, exemptions, and refund claims.
              Additionally, the GST Council has ensured that the tax rate is
              reasonable, with most goods and services falling under a 18% slab.
              This has helped to reduce inflation and promote economic growth.
              Furthermore, the e-way bill system has made it easier to track
              transactions and reduce tax evasion. Overall, the implementation
              of GST has been a major success, and its benefits are likely to be
              felt for years to come.
            </p>
          </Col>
          <Col xs={12} md={7}>
            <QuickEnquiryForm />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Assessment;
