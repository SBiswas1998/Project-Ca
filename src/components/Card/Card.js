import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRegistered,
  faUsers,
  faMoneyCheckDollar,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faFileCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import gsticon from "../../assets/images/gst-icon.png";
import IncomeTax from "../../assets/images/icome-tax-icon.png";
import Taxtion from "../../assets/images/Taxtion.png";
import Ab from "../../assets/images/ADVISORY-icon.png";

const Card = () => {
  return (
    <>
      <Container>
        <Row>
          {/* 1st Row start */}
          <Col sm={12} md={3} lg={3}>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-head">
                  <FontAwesomeIcon
                    icon={faRegistered}
                    style={{ color: "#05044D" }}
                  />
                  <h3>Registration</h3>
                </div>
                <div className="card-body">
                  <div className="desc">
                    Incorporating a company or firm marks the initial stride
                    towards initiating a business venture in India.
                    <br/>
                    <Link to="/service/registration/proprietorship" className="card-link text-dark"> View More</Link>
                  </div>
               
                </div>
              </div>
            </div>
          </Col>

          <Col sm={12} md={3} lg={3}>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-head">
                  <FontAwesomeIcon
                    icon={faUsers}
                    style={{ color: "#05044D" }}
                  />
                  <h3>ROC</h3>
                </div>
                <div className="card-body">
                  <div className="desc">
                    We offer services ensuring business compliance with
                    reporting and regulatory standards, supporting growth and
                    development.
                    <br/>
                    <Link to="/service/ROC/change_company_name" className="card-link text-dark"> View More
                    </Link>
                  </div>
                 
                </div>
              </div>
            </div>
          </Col>

          <Col sm={12} md={3} lg={3}>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-head">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#05044D" }}
                  />
                  <h3>Auditing</h3>
                </div>
                <div className="card-body">
                  <div className="desc">
                    An audit is vital for safeguarding and growing your business
                    by identifying risks and improvement opportunities.
                    <br/>
                  <Link to="/service/auditing" className="card-link text-dark"> View More
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col sm={12} md={3} lg={3}>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-head">
                  <FontAwesomeIcon
                    icon={faFileCircleCheck}
                    style={{ color: "#05044D" }}
                  />
                  <h3>Book Keeping</h3>
                </div>
                <div className="card-body">
                  <div className="desc">
                    Maintain financial records, manage accounts
                    payable/receivable, reconcile bank statements, and ensure
                    regulatory compliance.
                    <br/>
                <Link to="/service/bookkeeping/bankreconciliation" className="card-link text-dark"> View More
                </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          {/* 1st Row end */}
        </Row>

        <Row>
          {/* 2nd Row start */}
          <Col sm={12} md={3} lg={3}>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-head">
                  <FontAwesomeIcon
                    icon={faMoneyCheckDollar}
                    style={{ color: "#05044D" }}
                  />
                  <h3>Funding</h3>
                </div>
                <div className="card-body">
                  <div className="desc">
                    Outline business funding needs succinctly specify amount,
                    purpose, and potential sources.
                    <br/>
                  <Link to="/service/funding/businessLoan" className="card-link text-dark"> View More
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col sm={12} md={3} lg={3}>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-head">
                  <FontAwesomeIcon
                    icon={faSackDollar}
                    style={{ color: "#05044D" }}
                  />
                  <h3>Investment</h3>
                </div>
                <div className="card-body">
                  <div className="desc">
                    Document management software for accountants is vital for a
                    paperless home office, ensuring secure, retrievable digital
                    documents.
                    <br/>
                <Link to="/service/investment/mutual_fund_investment" className="card-link text-dark"> View More
                </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col sm={12} md={3} lg={3}>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-head">
                  <FontAwesomeIcon
                    icon={faCalculator}
                    style={{ color: "#05044D" }}
                  />
                  <h3>Accounting</h3>
                </div>
                <div className="card-body">
                  <div className="desc">
                    We assess finances, forecast yearly to keep your business
                    healthy and prosperous.
                    <br/>
                <Link to="/service/accounting" className="card-link text-dark"> View More
                </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col sm={12} md={3} lg={3}>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-head">
                <img
                    src={Ab}
                    alt=""
                    style={{
                      marginLeft: "100px",
                      width: "60px",
                      marginTop: "-10px",
                    }}
                  />
                  <h3>Advisory</h3>
                </div>
                <div className="card-body">
                  <div className="desc">
                    Comprehensive financial assessment and forecasting ensure
                    your business remains healthy and prosperous.
                    <br/>
                <Link to="/service/advisory/capital_gain" className="card-link text-dark"> View More
                </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          {/* 2nd row end */}
        </Row>

        <Row>
          {/* 3rd Row start */}
          <Col sm={12} md={3} lg={3}>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-head">
                  <img
                    src={gsticon}
                    alt=""
                    style={{
                      marginLeft: "100px",
                      width: "70px",
                      marginTop: "-5px",
                    }}
                  />
                  <h3>GST</h3>
                </div>
                <div className="card-body">
                  <div className="desc">
                    GST Simplifying tax compliance and optimizing financial
                    operations for your business.
                    <br/>
                  <Link to="/service/GST/GST_Return" className="card-link text-dark"> View More
                </Link>
                  </div>
                </div>

              </div>
            </div>
          </Col>

          <Col sm={12} md={3} lg={3}>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-head">
                  <img
                    src={IncomeTax}
                    alt=""
                    style={{
                      marginLeft: "100px",
                      width: "70px",
                      marginTop: "-10px",
                    }}
                  />

                  <h3>Income Tax</h3>
                </div>
                <div className="card-body">
                  <div className="desc">
                    Optimize your income tax strategy for maximum savings and
                    compliance.
                    <br/>
                  <Link to="/service/IncomeTax/ITR_filing" className="card-link text-dark"> View More
                </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col sm={12} md={3} lg={3}>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-head">
                  <img
                    src={Taxtion}
                    alt=""
                    style={{
                      marginLeft: "100px",
                      width: "70px",
                      marginTop: "-5px",
                    }}
                  />
                  <h3>Taxation</h3>
                </div>
                <div className="card-body">
                  <div className="desc">
                    Expertly manage your taxes to ensure compliance and maximize
                    savings for your financial success.
                    <br/>
                  <Link to="/taxtion" className="card-link text-dark"> View More
                </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          {/* 3rd row end */}
        </Row>

        {/* 

          */}

        {/* 1st row end */}

        {/* 2nd row Start */}

        {/*

          <Col sm={12} md={4} lg={4}>
            <div className="card-container">
              <div className="card">
                <Link to="/service/funding/businessLoan">
                  <div className="card--display">
                    <FontAwesomeIcon
                      icon={faMoneyCheckDollar}
                      size="xl"
                      style={{ color: "#05044D" }}
                    />
                    <h2>Funding</h2>
                  </div>
                  <div className="card--hover">
                    <h2>Funding</h2>
                    <p>
                      Outline business funding needs succinctly specify amount,
                      purpose, and potential sources
                    </p>
                    <p className="link">View More</p>
                  </div>
                </Link>
                <div className="card--border"></div>
              </div>
            </div>
          </Col>

          <Col sm={12} md={4} lg={4}>
            <div className="card-container">
              <div className="card">
                <Link to="/service/documentcenter">
                  <div className="card--display">
                    <FontAwesomeIcon
                      icon={faSackDollar}
                      size="xl"
                      style={{ color: "#05044D" }}
                    />
                    <h2>Investment</h2>
                  </div>
                  <div className="card--hover">
                    <h2>Investment</h2>
                    <p>
                      Document management software for accountants is an
                      important part of a paperless home office. Just like
                      paper, all digital/electronic documents need to be stored
                      securely so they can be retrieved and used as needed
                    </p>
                    <p className="link">View More</p>
                  </div>
                </Link>
                <div className="card--border"></div>
              </div>
            </div>
          </Col> */}

        {/* 2nd row end */}

        {/* 3rd row start */}

        {/* 

          

           */}
        {/* 3rd row end */}

        {/* 4th row start */}

        {/* <Col sm={12} md={4} lg={4}>
            <div className="card-container">
              <div className="card">
                <Link to="/service/accounting">
                  <div className="card--display">
                    <FontAwesomeIcon
                      icon={faCalculator}
                      size="xl"
                      style={{ color: "#05044D" }}
                    />
                    <h2>Income Tax</h2>
                  </div>
                  <div className="card--hover">
                    <h2>Income Tax</h2>
                    <p>
                      We do more than Accounting. We take a comprehensive
                      assessment of your finances and create a forecast through
                      the year to keep your business in a healthy and prosperous
                      state.
                    </p>
                    <p className="link">View More</p>
                  </div>
                </Link>
                <div className="card--border"></div>
              </div>
            </div>
          </Col>

          <Col sm={12} md={4} lg={4}>
            <div className="card-container">
              <div className="card">
                <Link to="/service/accounting">
                  <div className="card--display">
                    <FontAwesomeIcon
                      icon={faCircleQuestion}
                      size="xl"
                      style={{ color: "#05044D" }}
                    />
                    <h2>Taxation</h2>
                  </div>
                  <div className="card--hover">
                    <h2>Advisory</h2>
                    <p>
                      We do more than Accounting. We take a comprehensive
                      assessment of your finances and create a forecast through
                      the year to keep your business in a healthy and prosperous
                      state.
                    </p>
                    <p className="link">View More</p>
                  </div>
                </Link>
                <div className="card--border"></div>
              </div>
            </div>
          </Col> */}
        {/* 4th row end */}
      </Container>
    </>
  );
};

export default Card;
