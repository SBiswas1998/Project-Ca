import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faHourglassStart } from "@fortawesome/free-solid-svg-icons";
import { faPeopleLine } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";

const SupportCard = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={12} md={3} lg={3}>
            <div className="support-container">
              <div className="support-card">
                <div className="box">
                  <div className="content">
                    <FontAwesomeIcon
                      icon={faFolderOpen}
                      style={{ color: "#05044D" }}
                    />
                    <h3>Client Confidentiality</h3>
                    <p>
                      We strictly adhere to a privacy policy that prohibits the
                      disclosure of confidential client information to any third
                      party.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col sm={12} md={3} lg={3}>
            <div className="support-container ml-5">
              <div className="support-card">
                <div className="box">
                  <div className="content">
                    <FontAwesomeIcon
                      icon={faHeadset}
                      style={{ color: "#05044D" }}
                    />
                    <h3>Customer Support</h3>
                    <p>
                      We prioritize strong client relationships, ensuring timely
                      assistance and resolution through our Client Support
                      System for a positive impression.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={3} lg={3}>
            <div className="support-container ml-5">
              <div className="support-card">
                <div className="box">
                  <div className="content">
                    <FontAwesomeIcon
                      icon={faHourglassStart}
                      style={{ color: "#05044D" }}
                    />
                    <h3>Time & Cost Effectiveness</h3>
                    <p>
                      We deliver top-notch professional services that meet
                      industry standards, ensuring timely and cost-effective
                      solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={3} lg={3}>
            <div className="support-container ml-5">
              <div className="support-card">
                <div className="box">
                  <div className="content">
                    <FontAwesomeIcon
                      icon={faPeopleLine}
                      style={{ color: "#05044D" }}
                    />
                    <h3>Team of Professionals</h3>
                    <p>
                      Our professional team assesses your finances
                      comprehensively, forecasts year-round, and ensures your
                      business stays in a healthy, prosperous state.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SupportCard;
