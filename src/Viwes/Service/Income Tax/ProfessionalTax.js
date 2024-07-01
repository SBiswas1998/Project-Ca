import React, { useEffect, useState } from "react";
import { Footer } from "../../../components/Layout";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { ProfessionalTaxCardText } from "../../../constants/Paragram";
import CommonCard from "../../../components/Card/CommonCard";
import QuickEnquiryForm from "../../../components/Forms/QuickEnquiryFrom";
import { Col, Container, Row } from "react-bootstrap";

const ProfessionalTax = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (ProfessionalTaxCardText) {
      setCardText1(ProfessionalTaxCardText[0]?.Statutory_Requirement);
      setCardText2(ProfessionalTaxCardText[1]?.Avoid_Penalty);
      setCardText3(ProfessionalTaxCardText[2]?.Tax_Deductible);
      setCardText4(ProfessionalTaxCardText[3]?.Easy_Compliance);
      setCardText5(ProfessionalTaxCardText[4]?.State_Government_Tax);
    }
  }, [ProfessionalTaxCardText]);

  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">ProfessionalTax</h1>
              Professional tax registration is essential for employers and
              individuals engaged in any profession, trade, or calling in India.
              This state-level tax, applicable in states like Karnataka, West
              Bengal, Maharashtra, and others, is compulsory for all private
              company employees. Employers are responsible for deducting
              professional tax from employee salaries and remitting it to the
              respective state government. The tax amount is typically based on
              the individual's gross income and is deducted monthly. Purminder
              Kaur & Associates provides professional tax registration services
              in India, ensuring compliance and facilitating smooth operations
              for businesses and professionals.
            </p>
          </Col>
          <Col xs={12} md={7}>
            <QuickEnquiryForm />
          </Col>
        </Row>
      </Container>

      <CommonCard
        cardtilte="Reasons to Obtain"
        cardspan="Professional Tax Registration"
        card1="Statutory Requirement"
        card1text={cardtext1}
        crad2="Avoid Penalty"
        cardtext2={cardtext2}
        card3="Tax Deductible"
        cardtext3={cardtext3}
        card4="Easy Compliance"
        cardtext4={cardtext4}
        card5="State Government Tax"
        cardtext5={cardtext5}
      />
      <Footer />
    </>
  );
};

export default ProfessionalTax;
