import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const GSTAmendment = () => {
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">GST Amendment</h1>
              When crafting a paragraph regarding GST (Goods and Services Tax)
              amendment, it's crucial to convey key details concisely. Here's a
              template: "The recent amendment to the Goods and Services Tax
              (GST) has brought about significant changes in the taxation
              landscape. This revision primarily focuses on [briefly mention the
              main objectives, such as simplification, widening the tax base, or
              addressing specific loopholes]. Key highlights of the amendment
              include [list major changes or provisions introduced, such as
              revised tax rates, new compliance requirements, or modifications
              in input tax credit rules]. Additionally, the amendment aims to
              [mention any overarching goals or benefits, such as boosting
              economic growth, promoting ease of doing business, or enhancing
              tax administration efficiency]. It is imperative for businesses
              and taxpayers to thoroughly understand these amendments to ensure
              compliance and mitigate any potential challenges. Overall, the GST
              amendment marks a pivotal step towards [state the broader impact
              or objective, such as fostering transparency, fairness, or
              economic stability]."
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

export default GSTAmendment;
