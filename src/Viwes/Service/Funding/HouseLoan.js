import React from "react";
import { Footer } from "../../../components/Layout";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import QuickEnquiryForm from "../../../components/Forms/QuickEnquiryFrom";
import { Col, Container, Row } from "react-bootstrap";

const HouseLoan = () => {
  return (
    <>
      <ResHeader />
      <QuickEnquiryForm />
      <section className="hm-services-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec" xs={12} md={12} lg={12}>
              <h2>House Loan</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs={12} md={12} lg={12} className="mt-5 what-us-text">
              <p>
                A house loan, also known as a mortgage, is a financial
                instrument designed to help individuals or families purchase a
                home without having to pay the entire purchase price upfront.
                This loan is typically provided by banks, credit unions, or
                other financial institutions. The borrower agrees to repay the
                loan amount, plus interest, over a predetermined period, usually
                ranging from 15 to 30 years. The interest rate can be fixed,
                meaning it remains constant throughout the loan term, or
                adjustable, meaning it can fluctuate based on market conditions.
                To secure the loan, the property itself often serves as
                collateral, meaning that if the borrower fails to make payments,
                the lender can foreclose on the property to recover their
                investment. House loans enable people to fulfill their dream of
                homeownership while spreading the cost over an extended period,
                making it more manageable for many households. However,
                borrowers should carefully consider their financial situation
                and the terms of the loan before committing, as failing to make
                payments can result in significant financial consequences.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default HouseLoan;
