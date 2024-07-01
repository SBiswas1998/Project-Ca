import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const LifeInsurance = () => {
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Life Insurance</h1>
              Life insurance is a crucial financial tool designed to provide
              protection and peace of mind for individuals and their loved ones.
              It offers financial security by providing a lump sum payment in
              the event of the policyholder's death, which can help cover
              various expenses such as funeral costs, outstanding debts, and
              ongoing living expenses for dependents. There are different types
              of life insurance policies, including term life insurance, which
              offers coverage for a specific period, and whole life insurance,
              which provides coverage for the entire lifetime of the insured
              individual. The amount of coverage and premiums vary based on
              factors such as age, health, lifestyle, and desired level of
              protection. Life insurance can serve as a vital component of a
              comprehensive financial plan, ensuring that loved ones are taken
              care of financially in the event of the policyholder's passing.
              It's essential to carefully consider your needs and consult with a
              financial advisor to select the right life insurance policy that
              aligns with your goals and circumstances.
            </p>
          </Col>
          <Col xs={12} md={7}>
            <QuickEnquiryFrom />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default LifeInsurance;
