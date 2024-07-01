import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const BankReconciliation = () => {
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Bank Reconciliation</h1>
              Bank reconciliation is a crucial process in bookkeeping that
              involves comparing the bank statement balance with the company's
              ledger balance to identify and resolve discrepancies. This ensures
              the accuracy and integrity of financial records. The
              reconciliation process typically involves matching deposits and
              withdrawals, identifying outstanding checks or deposits in
              transit, and noting any bank fees or errors. By reconciling the
              bank statement regularly, businesses can detect fraud, prevent
              accounting errors, and ensure that their cash records accurately
              reflect the available funds. Accurate bank reconciliation is vital
              for informed financial decision-making and maintaining trust with
              stakeholders.
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

export default BankReconciliation;
