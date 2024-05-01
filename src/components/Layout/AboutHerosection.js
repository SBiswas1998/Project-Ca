import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function AboutHerosection({src }) {
  return (
    <section className="hm-about-sec">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            
               <ul className="about-list">
                 <li className="animated-list-item">Taxation</li>
                 <li className="animated-list-item">Auditing</li>
                 <li className="animated-list-item">Accounting</li>
                 <li className="animated-list-item">Registration</li>
                 <li className="animated-list-item" >Auditing</li>
               </ul>
          </Col>
          <Col md={6}>
            <img
              alt="aboutimage"
              src={src}
              className="aboutimage jumping-animation"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutHerosection;
