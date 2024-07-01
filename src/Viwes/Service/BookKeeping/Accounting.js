import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const Accounting = () => {
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Accounting</h1>
              Accounting plays a crucial role in finance and bookkeeping,
              serving as the backbone of financial management for businesses of
              all sizes. In essence, accounting involves the systematic
              recording, analysis, and reporting of financial transactions to
              provide an accurate picture of a company's financial health.
              Through meticulous record-keeping, accounting enables businesses
              to track their income, expenses, assets, and liabilities,
              facilitating informed decision-making by management and ensuring
              compliance with regulatory requirements. Moreover, accounting
              practices aid in the preparation of financial statements such as
              balance sheets, income statements, and cash flow statements, which
              are essential for assessing a company's performance and
              communicating its financial position to stakeholders. Effective
              accounting practices not only enable businesses to monitor their
              financial performance but also provide insights for strategic
              planning and resource allocation, ultimately contributing to the
              overall success and sustainability of the organization.
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

export default Accounting;
