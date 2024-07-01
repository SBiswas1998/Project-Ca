import React, { useEffect, useState } from "react";
import { Footer } from "../../../components/Layout";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import QuickEnquiryForm from "../../../components/Forms/QuickEnquiryFrom";
import { TanRegistrationCardText } from "../../../constants/Paragram";
import CommonCard from "../../../components/Card/CommonCard";
import { Col, Container, Row } from "react-bootstrap";

const TanRegistration = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (TanRegistrationCardText) {
      setCardText1(TanRegistrationCardText[0]?.TAN);
      setCardText2(TanRegistrationCardText[1]?.TDS_Payments);
      setCardText3(TanRegistrationCardText[2]?.TAN_Facilitation_Center);
      setCardText4(TanRegistrationCardText[3]?.Proprietorship);
      setCardText5(TanRegistrationCardText[4]?.Validity);
    }
  }, [TanRegistrationCardText]);

  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Tan & PAN Registration</h1>
              Tax Deduction and Collection Account Number (TAN) and Permanent
              Account Number (PAN) are essential registrations for financial and
              taxation activities in India. TAN is a unique identifier required
              for entities responsible for deducting or collecting tax at the
              source. This number ensures that tax deducted at source (TDS) is
              tracked and accounted for by the Income Tax Department. Without
              TAN, businesses cannot deduct TDS, making it a crucial component
              for compliance with tax regulations. On the other hand, PAN serves
              as a universal identification key for individuals and entities
              involved in financial transactions. It is mandatory for various
              activities such as opening a bank account, filing income tax
              returns, and conducting high-value transactions. PAN helps in
              tracking the financial activities of taxpayers and prevents tax
              evasion. Both TAN and PAN are vital for maintaining transparency
              and accountability in the financial ecosystem, ensuring smooth and
              lawful financial operations.
            </p>
          </Col>
          <Col xs={12} md={7}>
            <QuickEnquiryForm />
          </Col>
        </Row>
      </Container>
      <CommonCard
        cardtilte="Reasons to"
        cardspan="Register a TAN"
        card1="TAN – Tax deduction Account Number"
        card1text={cardtext1}
        crad2="TDS Payments"
        cardtext2={cardtext2}
        card3="TAN Facilitation Center"
        cardtext3={cardtext3}
        card4="Proprietorship Require TAN"
        cardtext4={cardtext4}
        card5="Validity"
        cardtext5={cardtext5}
      />
      <section className="hm-about-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec">
              <h2>
                How we help with<span> TAN Registration</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Application Preparation</p>
                <p className="text">
                  An Purminder Kaur & Associates Tax Expert will prepare your
                  TAN Application and obtain your signature in the format along
                  with the necessary supporting documents.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Application Processing</p>
                <p className="text">
                  Once the application is prepared, Purminder Kaur & Associates
                  will submit the TAN Application to the Tax Department.
                  Purminder Kaur & Associates is a TAN Facilitiation Center.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">TAN Allotment</p>
                <p className="text">
                  Once the application and the attached supporting documents are
                  verified, the Tax Department will allot a TAN Number for your
                  business.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default TanRegistration;
