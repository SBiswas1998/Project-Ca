import React, { useEffect, useState } from "react";
import OtherPageLoader from "../../../components/Loader/OtherPageLoader";
import { Footer } from "../../../components/Layout";
import TitleSection from "../../../components/TitleSection";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const HealthInsurance = () => {
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Health Insurance</h1>
              Health insurance is an essential component of financial planning
              and healthcare access, ensuring individuals and families have
              coverage for medical expenses. Comprehensive health insurance
              typically covers a range of services, including doctor visits,
              hospital stays, prescription medications, preventive care, and
              more. It provides a safety net against unexpected medical costs,
              shielding policyholders from potentially crippling expenses.
              Additionally, health insurance promotes regular healthcare
              utilization, leading to early detection and treatment of
              illnesses, ultimately improving overall health outcomes. Access to
              affordable health insurance for all is crucial for creating a
              healthier and more equitable society, where individuals can seek
              medical care without fear of financial burden. Through various
              government programs, employer-sponsored plans, and individual
              policies, efforts are made to expand coverage and make healthcare
              accessible to everyone, regardless of socioeconomic status. By
              ensuring universal access to health insurance, communities can
              thrive, individuals can lead healthier lives, and the burden of
              healthcare costs can be shared equitably.
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

export default HealthInsurance;
