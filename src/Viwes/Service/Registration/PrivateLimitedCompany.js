import React, { useEffect, useState } from "react";
import { Footer } from "../../../components/Layout";
import { PrivateLimitedCompanyCardText } from "../../../constants/Paragram";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import CommonCard from "../../../components/Card/CommonCard";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const PrivateLimitedCompany = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (PrivateLimitedCompanyCardText) {
      setCardText1(PrivateLimitedCompanyCardText[0]?.Separate_Legal_Entity);
      setCardText2(PrivateLimitedCompanyCardText[1]?.Uninterrupted_Existence);
      setCardText3(PrivateLimitedCompanyCardText[2]?.Easy_Transferability);
      setCardText4(PrivateLimitedCompanyCardText[3]?.Borrowing_Capacity);
      setCardText5(PrivateLimitedCompanyCardText[4]?.Owning_Property);
    }
  }, [PrivateLimitedCompanyCardText]);

  return (
    <>
      <ResHeader />
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="mt-5 otherhero-text">
              <h1 className="text-center mb-4">Private Limited Company</h1>
              Private Limited Company (PLC) is the preferred corporate entity in
              India due to its advantages. With PLC registration governed by the
              Ministry of Corporate Affairs, Companies Act, 2013, and Companies
              Incorporation Rules, 2014, it requires a minimum of two
              shareholders and directors. PLCs offer limited liability
              protection, equity fund-raising options, separate legal entity
              status, and perpetual existence, making them ideal for small to
              large businesses. Purminder Kaur & Associates specializes in PLC
              registration and other company formations, with an average
              processing time of 10-15 working days. Schedule a free
              consultation for PLC registration and business setup assistance.
            </p>
          </Col>
          <Col xs={12} md={7}>
            <QuickEnquiryFrom />
          </Col>
        </Row>
      </Container>
      <CommonCard
        cardtilte="Reasons to Register a Private"
        cardspan="Limited Company"
        card1="Separate Legal Entity"
        card1text={cardtext1}
        crad2="Uninterrupted Existence"
        cardtext2={cardtext2}
        card3="Easy Transferability"
        cardtext3={cardtext3}
        card4="Borrowing Capacity"
        cardtext4={cardtext4}
        card5="Owning Property"
        cardtext5={cardtext5}
      />
      <Footer />
    </>
  );
};

export default PrivateLimitedCompany;
