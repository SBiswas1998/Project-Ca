import React, { useEffect, useState } from "react";
import OtherPageLoader from "../../../components/Loader/OtherPageLoader";
import { Footer } from "../../../components/Layout";
import TitleSection from "../../../components/TitleSection";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const LifeInsurance = () => {
  return (
    <>
      <ResHeader />
      <QuickEnquiryFrom />
      <section className="hm-services-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec" xs={12} md={12} lg={12}>
              <h2>Life Insurance</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs={12} md={12} lg={12} className="mt-5 what-us-text">
              <p>
                Life insurance is a crucial financial tool designed to provide
                protection and peace of mind for individuals and their loved
                ones. It offers financial security by providing a lump sum
                payment in the event of the policyholder's death, which can help
                cover various expenses such as funeral costs, outstanding debts,
                and ongoing living expenses for dependents. There are different
                types of life insurance policies, including term life insurance,
                which offers coverage for a specific period, and whole life
                insurance, which provides coverage for the entire lifetime of
                the insured individual. The amount of coverage and premiums vary
                based on factors such as age, health, lifestyle, and desired
                level of protection. Life insurance can serve as a vital
                component of a comprehensive financial plan, ensuring that loved
                ones are taken care of financially in the event of the
                policyholder's passing. It's essential to carefully consider
                your needs and consult with a financial advisor to select the
                right life insurance policy that aligns with your goals and
                circumstances.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default LifeInsurance;
