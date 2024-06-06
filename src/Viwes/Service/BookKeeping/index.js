import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const BookKeeper = () => {
  return (
    <>
      <ResHeader />
      <QuickEnquiryFrom />
      <section className="hm-services-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec" xs={12} md={12} lg={12}>
              <h2>Book Keeping</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs={12} md={12} lg={12} className="mt-5 what-us-text">
              <p>
                As a BookKeeper, my primary responsibilities encompass
                maintaining accurate financial records, including managing
                accounts payable and receivable, reconciling bank statements,
                and ensuring compliance with relevant financial regulations. I
                adeptly utilize accounting software to track and report on
                financial transactions, prepare detailed financial statements,
                and assist in budget preparation. My role involves meticulous
                attention to detail, ensuring that all financial data is
                accurately recorded and up-to-date. Additionally, I collaborate
                with accountants and auditors, providing them with necessary
                documentation and supporting financial analysis. My strong
                organizational skills and proficiency in handling sensitive
                financial information contribute significantly to the financial
                health and transparency of the organization.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default BookKeeper;
