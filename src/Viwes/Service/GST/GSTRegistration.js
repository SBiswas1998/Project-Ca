import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const GSTRegistration = () => {
  return (
    <>
      <ResHeader />
      <QuickEnquiryFrom />
      <section className="hm-services-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec" xs={12} md={12} lg={12}>
              <h2>GST Registration</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs={12} md={12} lg={12} className="mt-5 what-us-text">
              <p>
                To register for GST (Goods and Services Tax) in most countries,
                including India, you'll need to provide several key pieces of
                information. Firstly, ensure you have your business details
                ready, such as the legal name, address, and contact information.
                Additionally, you'll need to have your business PAN (Permanent
                Account Number) available. Prepare details about your business
                structure, whether it's a proprietorship, partnership, company,
                or any other entity. Have information regarding the nature of
                your business activities handy, including the goods or services
                you provide. Make sure you have the required documents ready,
                such as identity and address proofs of the business owner(s),
                proof of business registration or incorporation, and bank
                account details. Lastly, be prepared to choose the appropriate
                GST registration type based on your turnover and business
                activities, such as regular, composition, or voluntary
                registration. Once you've gathered all this information, you can
                initiate the GST registration process through the official GST
                portal or authorized GST Suvidha Provider (GSP).
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default GSTRegistration;
