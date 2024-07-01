import React, { useEffect, useState } from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import { OnePersonCompanyCardText } from "../../../constants/Paragram";
import CommonCard from "../../../components/Card/CommonCard";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const OnePersonCompany = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (OnePersonCompanyCardText) {
      setCardText1(OnePersonCompanyCardText[0]?.Single_Promoter);
      setCardText2(OnePersonCompanyCardText[1]?.Uninterrupted_Existence);
      setCardText3(OnePersonCompanyCardText[2]?.Easy_Transferability);
      setCardText4(OnePersonCompanyCardText[3]?.Borrowing_Capacity);
      setCardText5(OnePersonCompanyCardText[4]?.Owning_Property);
    }
  }, [OnePersonCompanyCardText]);

  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">One Person Company</h1>
              The One Person Company (OPC) is a modern business structure
              introduced under the Companies Act, 2013, catering to solo
              entrepreneurs seeking limited liability protection. It allows a
              single individual to establish a corporate entity with simplified
              operation. However, it requires a nominee Director and must
              convert to a Private Limited Company if annual turnover exceeds
              Rs. 2 crores. Purminder Kaur & Associates offers OPC registration
              services, with a typical process duration of 10-15 working days.
              Schedule a free consultation for assistance.
            </p>
          </Col>
          <Col xs={12} md={7}>
            <QuickEnquiryFrom />
          </Col>
        </Row>
      </Container>
      <CommonCard
        cardtilte="Reasons to Register a"
        cardspan="One Person Company"
        card1="Single Promoter"
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

export default OnePersonCompany;
