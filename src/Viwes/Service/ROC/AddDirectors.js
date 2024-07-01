import React, { useEffect, useState } from "react";
import { Footer } from "../../../components/Layout";
import CommonAboutSection from "../../../components/CommonAboutSection";
import CommonCard from "../../../components/Card/CommonCard";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import {
  AddDirectorsAboutText,
  RemoveDirectorsCardText,
} from "../../../constants/Paragram";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ResHeader from "../../../components/ResponsiveMemu/Header";

const AddDirectors = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (RemoveDirectorsCardText) {
      setCardText1(RemoveDirectorsCardText[0]?.Managing_Director);
      setCardText2(RemoveDirectorsCardText[1]?.Executive_Director);
      setCardText3(RemoveDirectorsCardText[2]?.Additional_Director);
      setCardText4(RemoveDirectorsCardText[3]?.Ordinary_Director);
      setCardText5(RemoveDirectorsCardText[4]?.Alternate_Director);
    }
  }, [RemoveDirectorsCardText]);
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Add Directors</h1>
              Directors are living individuals elected by shareholders to manage
              a company's affairs as outlined in its Memorandum and Articles of
              Association. Since a company is an artificial entity, it acts
              through natural persons, with its management entrusted to the
              Board of Directors. To appoint a director, the individual must
              obtain a Digital Signature Certificate (DSC) and a Director
              Identification Number (DIN). DIN can be obtained by anyone over
              18, regardless of nationality or residency. Purminder Kaur &
              Associates, a leading business services platform in India, offers
              assistance with director appointments, typically taking 10-15
              working days. Schedule a free consultation with an advisor for
              more details.
            </p>
          </Col>
          <Col xs={12} md={7}>
            <QuickEnquiryFrom />
          </Col>
        </Row>
      </Container>
      <CommonCard
        cardtilte="Types of Director "
        cardspan="in a Company "
        card1="Managing Director"
        card1text={cardtext1}
        crad2="Executive Director"
        cardtext2={cardtext2}
        card3="Additional Director"
        cardtext3={cardtext3}
        card4="Ordinary Director"
        cardtext4={cardtext4}
        card5="Alternate Director"
        cardtext5={cardtext5}
      />
      <section className="hm-about-sec help-with-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec">
              <h2>
                How we help with <span> appointment of director</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Advisory</p>
                <p className="text">
                  The procedure for adding a Director to the Board of a company
                  would depend on the existing Board of Directors. Our Experts
                  will advise you on the procedure relevant for you.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Board Resolutions</p>
                <p className="text">
                  Once you obtain an understanding of the procedures involved in
                  appointing a Director to your Company, our Experts will draft
                  the necessary Resolutions for the procedure.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Filing</p>
                <p className="text">
                  Once the Board Resolutions are passed, our Experts will
                  prepare and file the necessary documents with the Ministry of
                  Corporate Affairs to register the addition of new Director.
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

export default AddDirectors;
