import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const Auditing = () => {
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Auditing</h1>
              Auditing is a systematic process aimed at evaluating the
              effectiveness of an organization’s internal controls, risk
              management, and governance processes to ensure compliance with
              laws, regulations, and internal policies. The scope of an audit
              can vary widely, encompassing financial records, operational
              procedures, and IT systems, depending on the objectives set forth
              by the auditing body. Methodologically, it involves a combination
              of document review, interviews, observation, and testing of
              controls. Key findings from an audit typically highlight areas of
              non-compliance, inefficiencies, or potential risks, along with
              their root causes. Based on these findings, auditors provide
              recommendations to improve processes, mitigate risks, and enhance
              overall organizational performance. The conclusion of the audit
              reflects the overall health of the audited areas and outlines
              steps for corrective action, thereby providing a roadmap for
              continuous improvement and assurance to stakeholders.
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

export default Auditing;
