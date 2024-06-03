import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const Accounting = () => {
  return (
    <>
      <ResHeader />
      <QuickEnquiryFrom />
      <section className="hm-services-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec" xs={12} md={12} lg={12}>
              <h2>Accounting</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs={12} md={12} lg={12} className="mt-5 what-us-text">
              <p>
                Accounting plays a crucial role in the financial management of
                any business, providing essential information that aids in
                decision-making. It involves the systematic recording,
                reporting, and analysis of financial transactions, ensuring
                accuracy and compliance with established standards such as GAAP
                or IFRS. For instance, through the preparation of financial
                statements like the balance sheet and income statement,
                accountants offer insights into a company’s financial health,
                performance, and liquidity. These documents not only help in
                assessing current financial status but also in planning future
                financial strategies. By maintaining detailed and accurate
                records, accounting ensures transparency and builds trust with
                stakeholders, thereby supporting the overall integrity of
                financial reporting.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Accounting;
