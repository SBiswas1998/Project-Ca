import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const RemoveDirectors = () => {
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Remove Directors </h1>A company
              director, elected by shareholders, manages the company's affairs.
              They can resign or be removed by the Board or shareholders, with
              the necessary filings made to the MCA. Purminder Kaur &
              Associates, a leader in business services, assists with director
              resignations, typically taking 10-15 days. Schedule a free
              consultation for details.
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

export default RemoveDirectors;
