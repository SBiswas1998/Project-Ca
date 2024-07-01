import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const NoticeScrutiny = () => {
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">GST Notice Scrutiny</h1>
              When composing a paragraph for GST Notice Scrutiny, it's crucial
              to include all pertinent details concisely and clearly. Start by
              introducing the purpose of the notice, which typically involves a
              review of the taxpayer's GST filings for compliance. Mention the
              relevant dates, such as the period under review and the deadline
              for response. Include any specific issues or discrepancies
              identified by the tax authorities that require attention. Outline
              the necessary steps for the recipient to take, such as providing
              additional documentation or explanations. Lastly, emphasize the
              importance of cooperation and timely response to resolve any
              concerns raised in the scrutiny process. By including these key
              elements, the paragraph effectively communicates the essential
              information regarding the GST notice scrutiny.
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

export default NoticeScrutiny;
