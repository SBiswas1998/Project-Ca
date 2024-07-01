import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const Visit = () => {
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Visit</h1>
              Welcome to Visit for Clients, your trusted partner in bookkeeping
              excellence. Our team is dedicated to simplifying your financial
              management, allowing you to focus on what you do best—growing your
              business. We provide comprehensive bookkeeping services tailored
              to meet your unique needs, ensuring accuracy and compliance with
              the latest regulations. With us, you gain more than just a service
              provider; you gain a partner committed to your financial success.
              Our experts utilize cutting-edge technology to streamline
              processes, offering you real-time insights into your financial
              health. Experience the peace of mind that comes with knowing your
              books are in expert hands with Visit for Clients.
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

export default Visit;
