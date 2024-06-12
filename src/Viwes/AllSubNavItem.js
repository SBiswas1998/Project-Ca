import React from "react";
import { Footer } from "../components/Layout";
import ResHeader from "../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";
import NavCard from "../components/Card/NavCard";
import { Route, useParams } from "react-router-dom";


const AllSubNavItem = () => {
    const { navname } = useParams();
    console.log("navname", navname);
  return (
    <>
      <ResHeader />
      <Container fluid>
        <Row>
          <Col>
            <h1 className="text-center">{navname}  Services</h1>
            <NavCard navName={navname} />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default AllSubNavItem;
