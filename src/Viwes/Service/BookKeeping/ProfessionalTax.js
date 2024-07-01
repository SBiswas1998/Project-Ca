import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const ProfessionalTax = () => {
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Professional Tax</h1>
              Professional Tax is a state-imposed levy on individuals earning
              income through employment, trade, or profession. For bookkeeping
              purposes, it is crucial to record and remit this tax periodically
              to the respective state government. Typically, the employer
              deducts it from the salary of employees and deposits it on their
              behalf. Accurate documentation of professional tax payments
              ensures compliance and avoids penalties. It's also essential to
              maintain up-to-date records of tax slab rates, payment due dates,
              and returns filed. This streamlined approach helps in managing
              finances efficiently and ensures adherence to state regulations.
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

export default ProfessionalTax;
