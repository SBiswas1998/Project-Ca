import React, { useEffect, useState } from "react";
import { Footer } from "../../../components/Layout";
import CommonCard from "../../../components/Card/CommonCard";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import { AddPartnerCardText } from "../../../constants/Paragram";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ResHeader from "../../../components/ResponsiveMemu/Header";

const AddPartner = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (AddPartnerCardText) {
      setCardText1(AddPartnerCardText[0]?.General_Duties);
      setCardText2(AddPartnerCardText[1]?.Duty_to_Indemnify);
      setCardText3(AddPartnerCardText[2]?.Implied_Authority);
      setCardText4(AddPartnerCardText[3]?.Rights_of_Partner);
      setCardText5(AddPartnerCardText[4]?.Properties_of_LLP);
    }
  }, [AddPartnerCardText]);
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Add Partner</h1>
              Partners in a Limited Liability Partnership (LLP) are crucial for
              its operations. Anyone above 18 years old can become a partner. To
              join an LLP, individuals need a Digital Signature Certificate
              (DSC) and a Director Identification Number (DIN), obtainable
              regardless of nationality or residency. Purminder Kaur &
              Associates offers comprehensive business services in India,
              including LLP registration, trademark filing, and more. They
              facilitate director appointments, with the process taking around
              10-15 working days. Reach out to Purminder Kaur & Associates for a
              free consultation on partner appointments.
            </p>
          </Col>
          <Col xs={12} md={7}>
            <QuickEnquiryFrom />
          </Col>
        </Row>
      </Container>
      <CommonCard
        cardtilte="Duties and Rights"
        cardspan="of a LLP Partner"
        card1="General Duties"
        card1text={cardtext1}
        crad2="Duty to Indemnify"
        cardtext2={cardtext2}
        card3="Implied Authority"
        cardtext3={cardtext3}
        card4="Rights of Partner"
        cardtext4={cardtext4}
        card5="Properties of LLP"
        cardtext5={cardtext5}
      />
      <section className="hm-about-sec help-with-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec">
              <h2>
                How we help with <span> add partner to LLP</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Advisory</p>
                <p className="text">
                  The procedure for adding a Partner to the LLP would depend on
                  the Partnership Agreement. Our Experts will advise you on the
                  procedure relevant for you.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Board Resolutions</p>
                <p className="text">
                  Once you obtain an understanding of the procedures involved in
                  adding a Partner to your LLP, our Experts will draft the
                  necessary documents for the procedure.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Filing</p>
                <p className="text">
                  Once the Filings are signed, our Experts will prepare and file
                  the necessary documents with the Ministry of Corporate Affairs
                  to register the addition of new Partner.
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

export default AddPartner;
