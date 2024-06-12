import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const ImportExportCode = () => {
  return (
    <>
      <ResHeader />
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="mt-5 otherhero-text">
              <h1 className="text-center mb-4">Import Export Code</h1>
              An Import Export Code (IEC) is a crucial business identification
              number required for individuals or companies that wish to engage
              in international trade of goods and services in India. Issued by
              the Directorate General of Foreign Trade (DGFT), the IEC is
              essential for customs clearance, shipping, and international
              financial transactions. Without this code, businesses cannot
              import goods into or export goods out of India. It not only
              facilitates smooth and regulated trade but also helps in tracking
              and managing international transactions, ensuring compliance with
              regulatory requirements, and aiding in the global expansion of
              businesses.
            </p>
          </Col>
          <Col xs={12} md={7}>
            <QuickEnquiryFrom />
          </Col>
        </Row>
      </Container>{" "}
      <Footer />
    </>
  );
};

export default ImportExportCode;
