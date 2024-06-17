import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faRocket } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import valuseImg from "../../assets/images/values_ico.png";

const VisionCard = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={4} lg={4}>
          <div className="vision-card">
            <div className="card">
              <div className="content">
                <div className="icon">
                  <FontAwesomeIcon icon={faEye} style={{ color: "#F47A25" }} />
                </div>
                <h6 className="title">Our Vision</h6>
                <p>
                  To make accounting easy and accessible to businesses by
                  providing quality Accounting, Auditing and Taxation Services
                  according to the Industry and Legal Standards globally.
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <div className="vision-card">
            <div className="card">
              <div className="content">
                <div className="icon">
                  <FontAwesomeIcon
                    icon={faRocket}
                    style={{ color: "#0C0649" }}
                  />
                </div>
                <h6 className="title">Our Mission</h6>
                <p className="text">
                  To expand to all Metropolitan cities in India and have a host
                  of Fortune 500 Companies as clients.
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <div className="vision-card">
            <div className="card">
              <div className="content">
                <div className="icon">
                  <img src={valuseImg} alt="" srcset="" width={70} />
                </div>
                <h6 className="title">Our Values</h6>
                <p className="text">
                  Monitoring and Communication of Accounting Milestones to
                  clients. Transparency in all client dealings. Uphold highest
                  standards of clients privacy.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VisionCard;
