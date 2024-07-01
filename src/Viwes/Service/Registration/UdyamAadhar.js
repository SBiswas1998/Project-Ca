import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const UdyamAadhar = () => {
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Udyam Aadhar</h1>
              Udyam Aadhar registration holds paramount importance for financial
              entities aiming to avail themselves of various government schemes
              and benefits. Whether it's a micro, small, or medium-sized
              enterprise (MSME), obtaining Udyam Aadhar certification provides
              formal recognition and facilitates easier access to credit,
              subsidies, and other financial assistance. This registration
              process, mandated by the Ministry of Micro, Small, and Medium
              Enterprises, offers numerous advantages such as priority sector
              lending, reduced interest rates, and eligibility for government
              tenders. Purminder Kaur & Associates specializes in assisting
              financial organizations with Udyam Aadhar registration, ensuring
              seamless compliance and maximizing the benefits available under
              the scheme.
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

export default UdyamAadhar;
