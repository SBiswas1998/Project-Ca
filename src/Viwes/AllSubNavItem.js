import React from "react";
import { Footer } from "../components/Layout";
import ResHeader from "../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";
import NavCard from "../components/Card/NavCard";
import { useParams } from "react-router-dom";


const AllSubNavItem = () => {
    const { navname } = useParams();
    console.log("navname", navname);
  return (
    <>
      <ResHeader />
      <Container fluid>
        <Row>
          <Col>
            <h2 className="text-center mt-5 mb-4">{navname}  Services</h2>
            <NavCard navName={navname} />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default AllSubNavItem;
