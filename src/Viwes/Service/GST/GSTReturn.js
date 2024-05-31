import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const GSTReturn = () => {
  return (
    <>
      <ResHeader />
      <QuickEnquiryFrom />
      <section className="hm-services-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec" xs={12} md={12} lg={12}>
              <h2>GST Return</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs={12} md={12} lg={12} className="mt-5 what-us-text">
              <p>
                When preparing a GST return, it's crucial to include all
                pertinent information accurately. Begin by stating the reporting
                period, clearly indicating the start and end dates. Next, list
                the total sales or supplies made during the period,
                distinguishing between taxable and exempt supplies. Include
                details of any purchases or expenses eligible for input tax
                credit, ensuring they comply with GST regulations. Factor in any
                adjustments or corrections from previous returns, noting reasons
                for these changes. Calculate the net GST payable or refundable,
                considering any applicable credits or liabilities. Finally,
                provide a breakdown of the GST amount, specifying the tax rate
                applied to each transaction category. Maintaining meticulous
                records and adhering to reporting guidelines will facilitate a
                smooth GST return process.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default GSTReturn;
