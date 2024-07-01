import React, { useEffect, useState } from "react";
import { Footer } from "../../../components/Layout";
import CommonAboutSection from "../../../components/CommonAboutSection";
import { PartnershipCardText } from "../../../constants/Paragram";
import CommonCard from "../../../components/Card/CommonCard";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const Partnership = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (PartnershipCardText) {
      setCardText1(PartnershipCardText[0]?.Easy_to);
      setCardText2(PartnershipCardText[1]?.Business_Name);
      setCardText3(PartnershipCardText[2]?.Partnership_Deed);
      setCardText4(PartnershipCardText[3]?.Annual_Filing);
      setCardText5(PartnershipCardText[4]?.Bank_Account);
    }
  }, [PartnershipCardText]);

  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Partnership</h1>
              Partnership firms, whether registered or unregistered, are popular
              among small businesses in India's unorganized sector. Managed by a
              group of individuals for profit, these firms cater to small and
              medium-sized enterprises. The rise of Limited Liability
              Partnerships has reduced traditional partnerships due to
              the advantages LLPs offer. Registration of partnership firms is
              recommended for its benefits. Establishing a partnership firm
              involves drafting a partnership deed among the partners. Purminder
              Kaur & Associates assists in setting up both registered and
              unregistered partnership firms in India.
            </p>
          </Col>
          <Col xs={12} md={7}>
            <QuickEnquiryFrom />
          </Col>
        </Row>
      </Container>

      <CommonCard
        cardtilte="Reasons to Register a"
        cardspan="Partnership"
        card1="Easy to Start"
        card1text={cardtext1}
        crad2="Business Name"
        cardtext2={cardtext2}
        card3="Partnership Deed"
        cardtext3={cardtext3}
        card4="Annual Filing NOT Required"
        cardtext4={cardtext4}
        card5="Bank Account"
        cardtext5={cardtext5}
      />
      <Footer />
    </>
  );
};

export default Partnership;
