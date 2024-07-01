import React, { useEffect, useState } from "react";
import { Footer } from "../../../components/Layout";
import CommonCard from "../../../components/Card/CommonCard";
import { ProprietorshipCardText } from "../../../constants/Paragram";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const Proprietorship = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (ProprietorshipCardText) {
      setCardText1(ProprietorshipCardText[0]?.Easy);
      setCardText2(ProprietorshipCardText[1]?.Business_Name);
      setCardText3(ProprietorshipCardText[2]?.Single_Promoter);
      setCardText4(ProprietorshipCardText[3]?.Lower_Taxes);
      setCardText5(ProprietorshipCardText[4]?.Easy_to);
    }
  }, [ProprietorshipCardText]);

  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Proprietorship</h1>A proprietorship,
              also known as a sole proprietorship, is an unregistered business
              owned and operated by one individual. Common among small
              businesses in India's informal sectors, proprietorships have
              minimal regulatory requirements but lack benefits like limited
              liability. While the government doesn't offer specific
              proprietorship registration, tax and business registrations under
              the proprietor's name establish its existence. Purminder Kaur &
              Associates offers quick proprietorship registration services,
              completed within 3 to 5 working days. Contact us for expert
              guidance on setting up a proprietorship in India.
            </p>
          </Col>
          <Col xs={12} md={7}>
            <QuickEnquiryFrom />
          </Col>
        </Row>
      </Container>
      <CommonCard
        cardtilte="Reasons to Register a"
        cardspan="Proprietorship Firm"
        card1="Easy to Start"
        card1text={cardtext1}
        card2="Business Name"
        cardtext2={cardtext2}
        card3="Single Promoter"
        cardtext3={cardtext3}
        card4="Lower Taxes"
        cardtext4={cardtext4}
        card5="Easy to Close"
        cardtext5={cardtext5}
      />
      <Footer />
    </>
  );
};

export default Proprietorship;
