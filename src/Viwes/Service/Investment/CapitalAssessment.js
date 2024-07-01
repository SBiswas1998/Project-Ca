import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const CapitalAssessment = () => {
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Capital Assessment</h1>
              When writing a paragraph for Capital Assessment, it's crucial to
              include all pertinent information succinctly. Start with a clear
              introduction, stating the purpose of the assessment and any
              specific criteria being evaluated. Next, provide an overview of
              the capital being assessed, including its nature (financial,
              human, intellectual, etc.), its value, and its significance to the
              organization or project. Then, delve into the assessment process,
              detailing the methods used, such as financial analysis, risk
              assessment, or resource allocation review. Include any relevant
              data or metrics gathered during the assessment to support your
              findings. Conclude the paragraph by summarizing the key insights
              or conclusions drawn from the assessment and any recommendations
              for future action or improvement. Remember to maintain clarity and
              coherence throughout, ensuring that the reader understands the
              importance and implications of the capital assessment.
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

export default CapitalAssessment;
