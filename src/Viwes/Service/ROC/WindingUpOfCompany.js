import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const WindingUpOfCompany = () => {
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Winding Up Of Company </h1>
              To avoid compliance penalties, an inactive company can be wound
              up. Shareholders can initiate voluntary winding up by settling
              dues and closing bank accounts. Purminder Kaur & Associates can
              facilitate this process, typically within 3 to 6 months. Schedule
              a consultation to discuss winding up your company efficiently.
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

export default WindingUpOfCompany;
