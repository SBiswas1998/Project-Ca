import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import VisionCard from './Card/VisionCard';

const OurValue = () => {
  return (
    <>
      <section className="hm-services-sec">
        <Container>
          <Row>
            <Col>
              <h2 className="hm-services-title">
                Our Vision, Mission <span> & Values</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <VisionCard/>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default OurValue
