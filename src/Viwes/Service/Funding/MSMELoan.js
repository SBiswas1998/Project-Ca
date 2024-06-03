import React from 'react'
import { Footer } from "../../../components/Layout";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import QuickEnquiryForm from "../../../components/Forms/QuickEnquiryFrom";
import { Col, Container, Row } from "react-bootstrap";

const MSMELoan = () => {
  return (
    <>
      <ResHeader />
      <QuickEnquiryForm />
      <section className="hm-services-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec" xs={12} md={12} lg={12}>
              <h2>Loan on Property</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs={12} md={12} lg={12} className="mt-5 what-us-text">
              <p>
                A loan on property, often referred to as a mortgage, is a
                financial arrangement where a lender provides funds to a
                borrower for the purchase or refinancing of real estate, with
                the property itself serving as collateral. This type of loan
                typically involves a fixed or adjustable interest rate and is
                repaid over a specified period, usually ranging from 15 to 30
                years. The borrower agrees to make regular payments, which
                include both principal and interest, until the loan is fully
                paid off. Loans on property are common in real estate
                transactions, enabling individuals and businesses to acquire
                property without having to pay the full purchase price upfront.
                These loans play a crucial role in the housing market,
                facilitating homeownership and property investment while
                allowing lenders to mitigate their risk through the
                collateralization of the property.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  )
}

export default MSMELoan