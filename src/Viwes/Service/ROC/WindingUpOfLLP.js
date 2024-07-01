import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const WindingUpOfLLP = () => {
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Winding Up Of LLP </h1>
              To avoid compliance penalties, an inactive LLP can be wound up
              voluntarily. Approval from at least three-fourths of the partners
              and any lenders is required. The winding-up resolution must be
              filed with the Registrar within 30 days. Purminder Kaur &
              Associates can facilitate this process efficiently.
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

export default WindingUpOfLLP;
