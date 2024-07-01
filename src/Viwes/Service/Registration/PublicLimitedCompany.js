import React, { useEffect, useState } from "react";
import { Footer } from "../../../components/Layout";
import CommonCard from "../../../components/Card/CommonCard";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import { PublicLimitedCompanyCardText } from "../../../constants/Paragram";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const PublicLimitedCompany = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (PublicLimitedCompanyCardText) {
      setCardText1(PublicLimitedCompanyCardText[0]?.Separate_Legal_Entity);
      setCardText2(PublicLimitedCompanyCardText[1]?.Easy_Transferability);
      setCardText3(PublicLimitedCompanyCardText[2]?.Owning_Property);
      setCardText4(PublicLimitedCompanyCardText[3]?.Uninterrupted_Existance);
      setCardText5(PublicLimitedCompanyCardText[4]?.Borrowing_Capacity);
    }
  }, [PublicLimitedCompanyCardText]);

  return (
    <>
      <ResHeader />

      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Public Limited Company</h1>
              Public Limited Company (PLC) is ideal for medium to large
              businesses seeking public equity capital. It offers limited
              liability to owners and can sell shares to investors for capital
              raising. With a minimum of three Directors and stricter
              regulations compared to Private Limited Companies, PLCs have no
              maximum member limit and facilitate easy share transfer and
              transparency. Purminder Kaur & Associates specializes in PLC
              registration and corporate formations.
            </p>
          </Col>
          <Col xs={12} md={7}>
            <QuickEnquiryFrom />
          </Col>
        </Row>
      </Container>

      <CommonCard
        cardtilte="Reasons to Register a Limited"
        cardspan="Company"
        card1="Separate Legal Entity"
        card1text={cardtext1}
        crad2="Easy Transferability"
        cardtext2={cardtext2}
        card3="Owning Property"
        cardtext3={cardtext3}
        card4="Uninterrupted Existence"
        cardtext4={cardtext4}
        card5="Borrowing Capacity"
        cardtext5={cardtext5}
      />
      <Footer />
    </>
  );
};

export default PublicLimitedCompany;
