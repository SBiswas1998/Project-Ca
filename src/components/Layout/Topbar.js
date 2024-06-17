import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";

function Topbar() {
  return (
    <>
      <div className="top-header-fixed" id="header-top-fixed"></div>
      <header className="top-header">
      <div className="topbar">
          <Container fluid>
            <Row>
              <Col xs={12} md={12}>
                <div className="top-lt-info">
                  <div className="top-info-d">
                    <FontAwesomeIcon icon={faEnvelope} />
                    &nbsp;
                    <span> info@capka.co.in</span>
                  </div>
                  <div className="top-info-d">
                    <FontAwesomeIcon icon={faPhone} />
                    &nbsp;
                    <span>+91 964-687-4599</span>
                  </div>
                </div>
              </Col>
              
            </Row>
          </Container>
        </div>
      </header>

    </>
  );
}

export default Topbar;
