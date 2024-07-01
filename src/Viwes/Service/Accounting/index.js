import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const Accounting = () => {
  return (
    <>
      <ResHeader />
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Accounting</h1>
              Accounting plays a crucial role in the financial management of any
              business, providing essential information that aids in
              decision-making. It involves the systematic recording, reporting,
              and analysis of financial transactions, ensuring accuracy and
              compliance with established standards such as GAAP or IFRS. For
              instance, through the preparation of financial statements like the
              balance sheet and income statement, accountants offer insights
              into a company’s financial health, performance, and liquidity.
              These documents not only help in assessing current financial
              status but also in planning future financial strategies. By
              maintaining detailed and accurate records, accounting ensures
              transparency and builds trust with stakeholders, thereby
              supporting the overall integrity of financial reporting.
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
