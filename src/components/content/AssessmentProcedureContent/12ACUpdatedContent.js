import React from "react";
import { Table } from "react-bootstrap";

const ACUpdatedContent = () => {
  const data = [
    {
      id: 1,
      person:
        "Individual, or Hindu undivided family or a firm or limited liability partnership or an association of persons or a body of individuals, whether incorporated or not, or a local authority or an artificial juridical person in whose case accounts are required to be audited under section 44AB of the Act or a Company or a political party required to furnish a return in Form ITR-7.",
      manner: "Electronically under digital signature.",
    },
    {
      id: 2,
      person:
        "Individual, or Hindu undivided family, or firm, or limited liability partnership, or an association of persons or a body of individuals, whether incorporated or not, or a local authority or an artificial juridical person, or a person required to file a return under sub-section (4A) or sub-section (4B) or sub-section (4C) or sub-section (4D) of section 139, other than a person mentioned in column (2) of Sl. No. (1) above.",
      manner:
        `Electronically under digital signature; Transmitting the data electronically in the return under electronic verification code.
        Transmitting the data electronically in the return under electronic verification code.
        `,
    },
  ];

  return (
    <>
      <div>
        <p>
          12AC. Updated return of income.- (1) The return of income to be
          furnished by any person, eligible to file such return under the
          sub-section (8A) of section 139, relating to the assessment year
          commencing on the 1st day of April, 2020 and subsequent assessment
          years, shall be in the Form ITR-U and be verified in the manner
          indicated therein. The return of income referred to in sub-rule (1)
          shall be furnished by a person, mentioned in column (2) of the Table
          below in the manner specified in column (3) thereof:––
        </p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sl. No.</th>
              <th>Person</th>
              <th>Manner of furnishing return of income</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.person}</td>
                <td>{row.manner}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <p>
          Explanation.–– For the purposes of this sub-rule, "Electronic
          verification code" means a code generated for the purpose of
          electronic verification of the person furnishing the return of income
          as per the data structure and standards specified by Principal
          Director General of Income-tax (Systems) or Director General of
          Income-tax (Systems). (3) The Principal Director-General of Income-tax
          (Systems) or Director-General of Income-tax (Systems) shall specify
          the procedures, formats and standards for ensuring secure capture and
          transmission of data and shall also be responsible for evolving and
          implementing appropriate security, archival and retrieval policies in
          relation to furnishing the return in the manners specified in column
          (3) of the Table.] Notes: 1. Inserted by the Income-tax (Eleventh
          Amendment) Rules, 2022, Notification No. 48/2022 dated 29.04.2022
        </p>
      </div>
    </>
  );
};

export default ACUpdatedContent;
