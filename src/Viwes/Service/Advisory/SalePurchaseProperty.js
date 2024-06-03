import React, { useEffect, useState } from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const SalePurchaseProperty = () => {
  return (
    <>
      <ResHeader />
      <QuickEnquiryFrom />
      <section className="hm-services-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec" xs={12} md={12} lg={12}>
              <h2>Sale Purchase Property</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs={12} md={12} lg={12} className="mt-5 what-us-text">
              <p>
                The sale and purchase of property is a significant financial
                transaction that involves the transfer of ownership from the
                seller to the buyer. This process requires careful consideration
                of various financial aspects, including valuation, financing,
                and legal compliance. The property's market value must be
                accurately assessed to ensure a fair transaction. Buyers often
                secure financing through mortgages, requiring thorough credit
                assessments and interest rate negotiations. Additionally, both
                parties must adhere to legal procedures, such as title searches,
                property inspections, and contract reviews, to mitigate risks.
                The transaction culminates in the closing process, where final
                payments are made, and ownership is officially transferred. This
                intricate process demands diligence and expertise from all
                involved to ensure a smooth and equitable exchange, ultimately
                impacting personal or corporate financial portfolios
                significantly.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default SalePurchaseProperty;
