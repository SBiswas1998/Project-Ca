import React from "react";
import tableData from "./tableData";
import { Table } from "react-bootstrap";

const SixAAHMeaningContent = () => {
  return (
    <>
      <div className="">
        <h4>
          <b>Meaning of expressions used in rule 6AAF and rule 6AAG.</b>
        </h4>
        <p>
          6AAH. For the purposes of rule 6AAF and rule 6AAG— (i) “Eligible
          company” means a company, which is— (a) engaged in the business of
          manufacture or production of any article or thing, not being an
          article or thing mentioned at serial number 1 and serial number 2 of
          the list of articles or things specified in the Eleventh Schedule; or
          (b) engaged in providing services mentioned in column (2) of the Table
          below:
        </p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Particulars</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.sNo}</td>
                <td>{item.particulars}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <p>
          (ii) "Training institute" means a training institute,— (a) set up by
          the Central Government or a State Government or a local authority; (b)
          affiliated to the National Council for Vocational Training or a State
          Council for Vocational Training; (c) affiliated to, or approved by, or
          empanelled by, the National Skill Development Agency; (d) affiliated
          to, or approved by, or empanelled by, the Central Government and
          certified by the National Council for Vocational Training as having
          training standards equivalent to training institutes affiliated to the
          National Council for Vocational Training; or (e) affiliated to, or
          approved by or empanelled by, the State Government and certified by
          the National Council for Vocational Training or a State Council for
          Vocational Training as having training standards equivalent to
          training institutes affiliated to the National Council for Vocational
          Training or, as the case may be, the State Council for Vocational
          Training.] (iii) “National Council for Vocational Training” means the
          National Council for Training in Vocational Trades established by the
          resolution of the Government of India in the Ministry of Labour
          (Directorate General of Resettlement and Employment) No.
          TR/E.P.-24/56, dated the 21st August, 1956 and re-named as the
          National Council for Vocational Training by the resolution of the
          Government of India in the Ministry of Labour (Directorate General of
          Employment and Training) No. DGET/12/21/80-TC, dated the 30th
          September, 1981, (iv) “State Council for Vocational Training” means a
          State Council for Training in Vocational Trades established by the
          State Government. ] [ (v) "National Skill Development Agency" means
          the agency constituted by the Government of India vide notification
          No. 14/27/2012-EC, dated the 6th June, 2013.]
        </p>
      </div>
    </>
  );
};

export default SixAAHMeaningContent;
