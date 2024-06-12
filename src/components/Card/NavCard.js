import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNavItems } from "../../actions/auth";
import { Col, Container, Row } from "react-bootstrap";

const NavCard = () => {
  const dispatch = useDispatch();
  const { navname } = useParams();

  const nav_data = useSelector((state) => state.auth.navitems?.data);
  console.log("nav_data", nav_data);

  // Fetch nav items when the component mounts or when navname changes
  useEffect(() => {
    dispatch(getNavItems({ navname }));
  }, [navname, dispatch]);

  return (
    <>
      <Container >
        <Row>
          <Col>
            <div className="card-container">
              <Row>
                {nav_data?.data?.map((item, index) => (
                  <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                    <div className="card">
                      <Link to={`${item.url}`}>
                        <div className="card-display">
                          <h2>{item.subnavname}</h2>
                        </div>
                        <div className="card-hover">
                          <h2>{item.subnavname}</h2>
                          <p>{item.text}</p>
                        </div>
                      </Link>
                      <div className="card--border"></div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NavCard;
