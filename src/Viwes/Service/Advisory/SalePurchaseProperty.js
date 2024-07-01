import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const SalePurchaseProperty = () => {
  return (
    <>
      <ResHeader />
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Sale Purchase Property</h1>
              The sale and purchase of property is a significant financial
              transaction that involves the transfer of ownership from the
              seller to the buyer. This process requires careful consideration
              of various financial aspects, including valuation, financing, and
              legal compliance. The property's market value must be accurately
              assessed to ensure a fair transaction. Buyers often secure
              financing through mortgages, requiring thorough credit assessments
              and interest rate negotiations. Additionally, both parties must
              adhere to legal procedures, such as title searches, property
              inspections, and contract reviews, to mitigate risks. The
              transaction culminates in the closing process, where final
              payments are made, and ownership is officially transferred. This
              intricate process demands diligence and expertise from all
              involved to ensure a smooth and equitable exchange, ultimately
              impacting personal or corporate financial portfolios
              significantly.
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

export default SalePurchaseProperty;
