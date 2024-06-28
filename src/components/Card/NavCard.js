import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNavItems } from "../../actions/auth";
import { Col, Container, Row, Spinner } from "react-bootstrap";

const NavCard = () => {
  const dispatch = useDispatch();
  const { navname } = useParams();

  const nav_data = useSelector((state) => state.auth.navitems?.data);
  const [loading, setLoading] = useState(true);

  console.log("nav_data", nav_data);

  // Fetch nav items when the component mounts or when navname changes
  useEffect(() => {
    setLoading(true);
    dispatch(getNavItems({ navname })).then(() => setLoading(false));
  }, [navname, dispatch]);

  return (
    <>
      <Container>
        <Row>
          <Col>
            {loading ? (
              <div className="text-center my-4">
                <Spinner animation="border" />
              </div>
            ) : (
              <Row>
                {nav_data?.data?.map((item, index) => (
                  <Col
                    key={index}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={4}
                    className="mb-4"
                  >
                    <div className="nav-cards">
                      <div className="information [ navcard ]">
                        <span className="tag">{item.subnavname}</span>
                        <p class="info">{item.text}</p>
                        <div className="nav-card-body">
                          <button class="button">
                            <Link to={item.url}>
                            
                            <span>Apply</span>
                            </Link>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="24px"
                              viewBox="0 0 24 24"
                              width="24px"
                              fill="none"
                            >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path
                                d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"
                                fill="currentColor"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NavCard;
