import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const MoaAmendment = () => {
  return (
  
      <>
        <ResHeader />
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={5}>
              <p className="otherhero-text">
                <h1 className="text-center">Moa Amendment</h1>A Memorandum of
                Association (MOA) amendment is crucial for a company's evolving
                needs, enabling changes in its objectives, capital structure, or
                other key areas. At Fincale, we specialize in facilitating MOA
                amendments, ensuring compliance with regulatory requirements and
                seamless execution. Trust us for expert guidance and efficient
                processing of your company's MOA amendments.
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

export default MoaAmendment;
