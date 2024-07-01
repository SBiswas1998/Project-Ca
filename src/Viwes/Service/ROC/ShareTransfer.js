import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const ShareTransfer = () => {
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Share Transfer </h1>
              Shares in a private limited company can be transferred by
              executing a share transfer deed, subject to restrictions in the
              Articles of Association. Ownership lies with shareholders, not
              directors. Purminder Kaur & Associates assists in transferring
              shares as per the Companies Act, 2013, ensuring compliance and
              smooth transactions.
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

export default ShareTransfer;
