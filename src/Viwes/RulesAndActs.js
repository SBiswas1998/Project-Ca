import React, { useState } from "react";
import { Footer } from "../components/Layout";
import ResHeader from "../components/ResponsiveMemu/Header";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import ModalComponent from "../components/ModalComponent";
import declarationContent from "../components/content/declarationContent";
import determinationContent from "../components/content/determinationContent";
import definitionsContent from "../components/content/definitionsContent";
import ShorttitleContect from "../components/content/ShorttitleContect";
import sharejewelleryContent from "../components/content/sharejewelleryContent";
import calculatingContent from "../components/content/calculatingContent";
import authorityContent from "../components/content/authorityContent";
import InspectionContent from "../components/content/InspectionContent";
import ConditionsContent from "../components/content/ConditionsContent";
import JurisdictionContent from "../components/content/JurisdictionContent";
import SearchContent from "../components/content/SearchContent";
import DisclosureContent from "../components/content/DisclosureContent";
import AuthorisedRepresentativesContent from "../components/content/AuthorisedRepresentativesContent";
import ApplicationContent from "../components/content/ApplicationContent";
import FormAppealContent from "../components/content/FormAppealContent";
import AppealCommissionerContent from "../components/content/AppealCommissionerContent";
import NoticeDemandContent from "../components/content/NoticeDemandContent";
import ReturnWealthContect from "../components/content/ReturnWealthContect";
import WealthDefinitionsContent from "../components/content/WealthDefinitionsContent";
import WealthShortTitleContent from "../components/content/WealthShortTitleContent";
import LifeInterestTable from "../components/content/APPENDIXContent";
import ModalTableComponents from "../components/ModalTableComponents";
import PreliminaryContect from "../components/content/PreliminaryContect";
import DeterminationIncomeCentent from "../components/content/DeterminationIncomeCentent";
import AssessmentProcedureContent from "../components/content/AssessmentProcedureContent/AssessmentProcedureContent";
import AvoidanceContent from "../components/content/AvoidanceContent";
import RegistrationFirmsContent from "../components/content/RegistrationFirmsContent/RegistrationFirmsContent";

const RulesAndActs = () => {
  const [key, setKey] = useState("GST Rules");
  const [nestedKey, setNestedKey] = useState("CGST Rules");
  const [nestedtwoKey, setNestedTwoKey] = useState("Income Tax");

  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [newTableContent, setNewTableContent] = useState([]);
  const [tableModalShow, setTableModalShow] = useState(false);

  console.log("PreliminaryContect", newTableContent);

  const handleModalOpen = (content) => {
    setModalContent(content);
    setModalShow(true);
  };

  const handleModalClose = () => setModalShow(false);

  const handleTableOpen = (content) => {
    let tableRows;
  
    if (content === 'PreliminaryContect' && PreliminaryContect) {
      tableRows = PreliminaryContect.map((item) => (
        <tr
          key={item.id}
          onClick={() => handleModalOpen(item.link)}
          className="clickable-cell"
        >
          <td>{item.id}</td>
          <td>{item.title}</td>
        </tr>
      ));
    } 
    else if (content === 'DeterminationIncomeCentent' && DeterminationIncomeCentent) {
      tableRows = DeterminationIncomeCentent.map((item) => (
        <tr
          key={item.id}
          onClick={() => handleModalOpen(item.link)}
          className="clickable-cell"
        >
          <td>{item.id}</td>
          <td>{item.title}</td>
        </tr>
      ));
    }
    else if (content === 'AssessmentProcedureContent' && AssessmentProcedureContent) {
      tableRows = AssessmentProcedureContent.map((item) => (
        <tr
          key={item.id}
          onClick={() => handleModalOpen(item.link)}
          className="clickable-cell"
        >
          <td>{item.id}</td>
          <td>{item.title}</td>
        </tr>
      ));
    }
    else if (content === 'RegistrationFirmsContent' && RegistrationFirmsContent) {
      tableRows = RegistrationFirmsContent.map((item) => (
        <tr
          key={item.id}
          onClick={() => handleModalOpen(item.link)}
          className="clickable-cell"
        >
          <td>{item.id}</td>
          <td>{item.title}</td>
        </tr>
      ));
    }
    else {
      // Handle case where the selected content is not defined
      tableRows = null; // Or any other fallback content or logic
    }
  
    setNewTableContent(tableRows); // Update the state with table rows
    setTableModalShow(true); // Open the modal
  };

  const handleTableModalClose = () => setTableModalShow(false);

  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-md-center">
          <Col className="mx-auto" md={8}>
            <Tabs
              id="main-tabs"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="GST Rules" title="GST Rules">
                <section className="rules-section">
                  <Tabs
                    id="nested-tabs"
                    activeKey={nestedKey}
                    onSelect={(k) => setNestedKey(k)}
                    className="mb-3"
                  >
                    <Tab eventKey="CGST Rules" title="CGST Rules">
                      <Table striped bordered hover>
                        <thead>
                          <tr></tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Preliminary</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Composition Levy</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Registration</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Determination of Value of Supply</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Input Tax Credit</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Tax Invoice, Credit and Debit Notes</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>Accounts and Records</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>Accounts and Records</td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>Returns</td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td>Payment of Tax</td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td>Refund</td>
                          </tr>
                          <tr>
                            <td>11</td>
                            <td>Assessment and Audit</td>
                          </tr>
                          <tr>
                            <td>12</td>
                            <td>Advance Ruling</td>
                          </tr>
                          <tr>
                            <td>13</td>
                            <td>Appeals and Revision</td>
                          </tr>
                          <tr>
                            <td>14</td>
                            <td>Transitional Provisions</td>
                          </tr>
                          <tr>
                            <td>15</td>
                            <td>Anti-Profiteering</td>
                          </tr>
                          <tr>
                            <td>16</td>
                            <td>E-way Rules</td>
                          </tr>
                          <tr>
                            <td>17</td>
                            <td>Inspection, Search and Seizure</td>
                          </tr>
                          <tr>
                            <td>18</td>
                            <td>Demands and Recovery</td>
                          </tr>
                          <tr>
                            <td>18</td>
                            <td>Demands and Recovery</td>
                          </tr>
                          <tr>
                            <td>19</td>
                            <td>Offences and Penalties</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Tab>
                    <Tab eventKey="profile" title="IGST Rules">
                      <Table striped bordered hover>
                        <thead>
                          <tr></tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Short Title and Commencement</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Definitions</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>3 Form of return of net wealth</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Notice of Demand</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Appeal to the Commissioner (Appeals)</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Form of Appeal to Appellate Tribunal</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td> Application for reference to High Court</td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td> Authorised Representatives</td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td>
                              Disclosure of Information Respecting Assessees{" "}
                            </td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td>
                              Disclosure of Information Respecting Assessees{" "}
                            </td>
                          </tr>
                          <tr>
                            <td>11</td>
                            <td>Search and seizure</td>
                          </tr>
                          <tr>
                            <td>12</td>
                            <td>Rule 3A Jurisdiction of Valuation Officers</td>
                          </tr>
                          <tr>
                            <td>13</td>
                            <td>
                              Rule 3B Conditions for reference to Valuation
                              Officers
                            </td>
                          </tr>
                          <tr>
                            <td>14</td>
                            <td>Rule 3C Inspection</td>
                          </tr>
                          <tr>
                            <td>14</td>
                            <td>Rule 11 Prescribed authority</td>
                          </tr>
                          <tr>
                            <td>15</td>
                            <td>
                              Rule 12 Procedure to be followed in calculating
                              interest
                            </td>
                          </tr>
                          <tr>
                            <td>16</td>
                            <td>
                              Rule 13 Forms for certificate of valuation of
                              shares/jewellery, etc
                            </td>
                          </tr>
                          <tr>
                            <td>17</td>
                            <td>APPENDIX</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Tab>
                  </Tabs>
                </section>
              </Tab>
              <Tab eventKey="Direct" title="Direct Tax Rules">
                <section className="rules-section">
                  <Tabs
                    id="nested-tabs"
                    activeKey={nestedtwoKey}
                    onSelect={(k) => setNestedTwoKey(k)}
                    className="mb-3"
                  >
                    <Tab eventKey="Income Tax" title="Income Tax Rules">
                      <Table striped bordered hover>
                        <thead>
                          <tr></tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td
                              onClick={() =>
                                handleTableOpen("PreliminaryContect")
                              }
                              className="clickable-cell"
                            >
                              PRELIMINARY
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td
                              onClick={() =>
                                handleTableOpen("DeterminationIncomeCentent")
                              }
                              className="clickable-cell"
                            >
                              {" "}
                              DETERMINATION OF INCOME
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td
                              onClick={() =>
                                handleTableOpen("AssessmentProcedureContent")
                              }
                              className="clickable-cell"
                            >ASSESSMENT PROCEDURE</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td
                              onClick={() =>
                                handleModalOpen(AvoidanceContent)
                              }
                              className="clickable-cell"
                            >AVOIDANCE OF REPETITIVE APPEALS</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>TAX EXEMPTIONS AND RELIEFS</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td
                              onClick={() =>
                                handleTableOpen("RegistrationFirmsContent")
                              }
                              className="clickable-cell"
                            >REGISTRATION OF FIRMS</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>DEDUCTION OF TAX AT SOURCE</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>COLLECTION OF TAX AT SOURCE</td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>PAYMENT OF ADVANCE TAX</td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td>TAX CREDIT</td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td>
                              SPECIAL PROVISIONS FOR PAYMENT OF TAX BY COMPANIES
                              AND CERTAIN PERSONS OTHER THAN A COMPANY
                            </td>
                          </tr>
                          <tr>
                            <td>11</td>
                            <td>FRINGE BENEFIT TAX</td>
                          </tr>
                          <tr>
                            <td>11</td>
                            <td>REFUNDS</td>
                          </tr>
                          <tr>
                            <td>12</td>
                            <td> TAX CLEARANCE CERTIFICATES</td>
                          </tr>
                          <tr>
                            <td>13</td>
                            <td>SETTLEMENT OF CASES</td>
                          </tr>
                          <tr>
                            <td>14</td>
                            <td>DISPUTE RESOLUTION COMMITTEE</td>
                          </tr>
                          <tr>
                            <td>15</td>
                            <td>ADVANCE RULINGS</td>
                          </tr>
                          <tr>
                            <td>16</td>
                            <td>MUTUAL AGREEMENT PROCEDURE</td>
                          </tr>
                          <tr>
                            <td>17</td>
                            <td>Inspection, Search and Seizure</td>
                          </tr>
                          <tr>
                            <td>18</td>
                            <td>APPEALS</td>
                          </tr>
                          <tr>
                            <td>18</td>
                            <td>ANNUITY DEPOSITS</td>
                          </tr>
                          <tr>
                            <td>19</td>
                            <td>
                              ACQUISITION OF IMMOVABLE PROPERTIES UNDER XXA
                            </td>
                          </tr>
                          <tr>
                            <td>20</td>
                            <td> PURCHASE OF IMMOVABLE PROPERTIES UNDER XXC</td>
                          </tr>
                          <tr>
                            <td>21</td>
                            <td> AUTHORISED REPRESENTATIVES</td>
                          </tr>
                          <tr>
                            <td>22</td>
                            <td> RECOGNISED PROVIDENT FUNDS</td>
                          </tr>
                          <tr>
                            <td>23</td>
                            <td> APPROVED SUPERANNUATION FUNDS</td>
                          </tr>
                          <tr>
                            <td>24</td>
                            <td> GRATUITY FUNDS</td>
                          </tr>
                          <tr>
                            <td>25</td>
                            <td> MISCELLANEOUS</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Tab>
                    <Tab eventKey="Wealth Tax" title="Wealth Tax Rules">
                      <Table striped bordered hover>
                        <thead>
                          <tr></tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td
                              onClick={() =>
                                handleModalOpen(WealthShortTitleContent)
                              }
                              className="clickable-cell"
                            >
                              Short Title and Commencement
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td
                              onClick={() =>
                                handleModalOpen(WealthDefinitionsContent)
                              }
                              className="clickable-cell"
                            >
                              Definitions
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td
                              onClick={() =>
                                handleModalOpen(ReturnWealthContect)
                              }
                              className="clickable-cell"
                            >
                              3 Form of return of net wealth
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td
                              onClick={() =>
                                handleModalOpen(NoticeDemandContent)
                              }
                              className="clickable-cell"
                            >
                              Notice of Demand
                            </td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td
                              onClick={() =>
                                handleModalOpen(AppealCommissionerContent)
                              }
                              className="clickable-cell"
                            >
                              Appeal to the Commissioner (Appeals)
                            </td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td
                              onClick={() => handleModalOpen(FormAppealContent)}
                              className="clickable-cell"
                            >
                              Form of Appeal to Appellate Tribunal
                            </td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td
                              onClick={() =>
                                handleModalOpen(ApplicationContent)
                              }
                              className="clickable-cell"
                            >
                              {" "}
                              Application for reference to High Court
                            </td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td
                              onClick={() =>
                                handleModalOpen(
                                  AuthorisedRepresentativesContent
                                )
                              }
                              className="clickable-cell"
                            >
                              {" "}
                              Authorised Representatives
                            </td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td
                              onClick={() => handleModalOpen(DisclosureContent)}
                              className="clickable-cell"
                            >
                              {" "}
                              Disclosure of Information Respecting Assessees
                            </td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td
                              onClick={() => handleModalOpen(SearchContent)}
                              className="clickable-cell"
                            >
                              {" "}
                              Search and seizure
                            </td>
                          </tr>
                          <tr>
                            <td>11</td>
                            <td
                              onClick={() =>
                                handleModalOpen(JurisdictionContent)
                              }
                              className="clickable-cell"
                            >
                              {" "}
                              Rule 3A Jurisdiction of Valuation Officers
                            </td>
                          </tr>
                          <tr>
                            <td>12</td>
                            <td
                              onClick={() => handleModalOpen(ConditionsContent)}
                              className="clickable-cell"
                            >
                              {" "}
                              Rule 3B Conditions for reference to Valuation
                              Officers
                            </td>
                          </tr>
                          <tr>
                            <td>13</td>
                            <td
                              onClick={() => handleModalOpen(InspectionContent)}
                              className="clickable-cell"
                            >
                              {" "}
                              Rule 3C Inspection
                            </td>
                          </tr>
                          <tr>
                            <td>14</td>
                            <td
                              onClick={() => handleModalOpen(authorityContent)}
                              className="clickable-cell"
                            >
                              {" "}
                              Rule 11 Prescribed authority
                            </td>
                          </tr>
                          <tr>
                            <td>15</td>
                            <td
                              onClick={() =>
                                handleModalOpen(calculatingContent)
                              }
                              className="clickable-cell"
                            >
                              {" "}
                              Rule 12 Procedure to be followed in calculating
                              interest
                            </td>
                          </tr>
                          <tr>
                            <td>15</td>
                            <td
                              onClick={() =>
                                handleModalOpen(sharejewelleryContent)
                              }
                              className="clickable-cell"
                            >
                              {" "}
                              Rule 13 Forms for certificate of valuation of
                              shares/jewellery, etc
                            </td>
                          </tr>
                          <tr>
                            <td>16</td>
                            <td
                              onClick={() =>
                                handleModalOpen(<LifeInterestTable />)
                              }
                              className="clickable-cell"
                            >
                              {" "}
                              APPENDIX
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Tab>
                    <Tab
                      eventKey="Income Declaration"
                      title="Income Declaration Scheme Rules"
                    >
                      <Table striped bordered hover>
                        <thead>
                          <tr></tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td
                              onClick={() => handleModalOpen(ShorttitleContect)}
                              className="clickable-cell"
                            >
                              Short title and commencement
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td
                              onClick={() =>
                                handleModalOpen(definitionsContent)
                              }
                              className="clickable-cell"
                            >
                              Definitions
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td
                              onClick={() =>
                                handleModalOpen(determinationContent)
                              }
                              className="clickable-cell"
                            >
                              Determination of Fair market value
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td
                              onClick={() =>
                                handleModalOpen(declarationContent)
                              }
                              className="clickable-cell"
                            >
                              Declaration of income or income in the form of
                              investment in any asset
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Tab>
                  </Tabs>
                </section>
              </Tab>
              <Tab eventKey="GST Law" title="GST Law">
                Tab content for Contact
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
      <Footer />
      <ModalComponent
        show={modalShow}
        handleClose={handleModalClose}
        content={modalContent}
      />
      <ModalTableComponents
        show={tableModalShow}
        onHide={handleTableModalClose}
        handleClose={handleTableModalClose}
        content={
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>SL.NO</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {newTableContent} {/* Render table rows */}
            </tbody>
          </Table>
        }
      />
    </>
  );
};

export default RulesAndActs;
