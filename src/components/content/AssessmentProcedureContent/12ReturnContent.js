import React from "react";
import { Table } from "react-bootstrap";
import tableData from "./tableData";

const ReturnContent = () => {
  return (
    <>
      <div>
        <p>
          ASSESSMENT PROCEDURE [Return of income and return of fringe benefits.
          12. (1) The return of income required to be furnished under
          sub-section (1) or sub- section (3) or sub-section (4A) or sub-section
          (4B) or sub-section (4C) or sub-section (4D) [or sub-section (4E)] [or
          sub-section (4F)] of section 139 or clause (i) of sub-section (1) of
          section 142 39or section 148 or section 153A [***] relating to the
          assessment year commencing [on the 1st day of April, 45[2024] shall,—
          [(a) in the case of a person being 2[an individual who is a resident
          other than not ordinarily resident and] where the total income
          includes income chargeable to income-tax, under the head,— (i)
          "Salaries" or income in the nature of family pension as defined in the
          Explanation to clause (iia) of section 57; or (ii) "Income from house
          property", where assessee does not own more than one house property
          and does not have any brought forward loss 3[or loss to be carried
          forward] under the head; or (iii) "Income from other sources", except
          winnings from lottery or income from race horses [and does not have
          any loss under the head], be in Form [SAHAJ] (ITR-1) and be verified
          in the manner indicated therein:] [Provided that the provisions of
          this clause shall not apply to a person who,— 4[(I) has assets
          (including financial interest in any entity) located outside India;
          (IA) has signing authority in any account located outside India; (IB)
          has income from any source outside India; (IC) has income to be
          apportioned in accordance with provisions of section 5A;] 22[(ID) has
          claimed deduction under section 57, other than deduction claimed under
          clause (iia) thereof; (IE) is a director in any company; (IF) has held
          any unlisted equity share at any time during the previous year; (IG)
          is assessable for the whole or any part of the income on which tax has
          been deducted at source in the hands of a person other than the
          assesse;] (II) has claimed any relief of tax under section 90 or 90A
          or deduction of tax under section 91; 6[***] [(III) has agricultural
          income, exceeding five thousand rupees;]] [(IV) has total income,
          exceeding fifty lakh rupees; (V) has income taxable under section
          115BBDA; 29,37[***] (VI) has income of the nature referred to in
          section 115BBE;] 30,34(VII) owns a house property in joint-ownership
          with two or more persons; or 31,34(VIII) is required to furnish a
          return of income under seventh proviso to sub-section (1) of section
          139 38(VII) is a person in whose case tax has been deducted under
          section 194N; or 38(VIII) is a person in whose case payment or
          deduction of tax has been deferred under sub-section (2) of section
          191 or sub-section (1C) of section 192. (c) in the case of a person
          being an individual [not being an individual to whom clause (a)
          applies] of a Hindu undivided family where the total income does not
          include income 11[under the head] business or profession, be in Form
          No. ITR-2 and be verified in the manner indicated therein; ] [(ca) in
          the case of a person being an individual or 23[a Hindu undivided
          family, who is a resident other than not ordinarily resident, or a
          firm, other than limited liability partnership firm, which is a
          resident] deriving 12["income under the head Profits or gains of
          business or profession" and such income is computed in accordance with
          special provisions referred to in section 44AD, section 44ADA and
          section 44AE of the Act for computation of such income, be in Form
          SUGAM (ITR-4)] and be verified in the manner indicated therein:]
          [Provided that the provisions of this clause shall not apply to a
          person who,— 24[(I) has assets (including financial interest in any
          entity) located outside India; (IA) has signing authority in any
          account located outside India; (IB) has income from any source outside
          India; (IC) has income to be apportioned in accordance with provisions
          of section 5A; (ID) is a director in any company; (IE) has held any
          unlisted equity share at any time during the previous year; (IF) has
          total income, exceeding fifty lakh rupees; (IG) owns more than one
          house property, the income of which is chargeable under the head
          Income from house property (IH) has any brought forward loss or loss
          to be carried forward under any head of income; (IJ) is assessable for
          the whole or any part of the income on which tax has been deducted at
          source in the hands of a person other than the assesse.] (d) in the
          case of a person being an individual or a Hindu undivided family other
          than the individual or Hindu undivided family referred to in clause
          (a) or 16[***] clause (c) [or clause (ca)] and 15[having income under
          the head] business or profession, be in 17[Form No.ITR-3] and be
          verified in the manner indicated therein; (e) in the case of a person
          not being an individual or a Hindu undivided family or a company or a
          person to which clause (g) applies, be in Form No. ITR-5 and be
          verified in the manner indicated therein; (f) in the case of a company
          not being a company to which clause (g) applies, be in Form No. ITR-6
          and be verified in the manner indicated therein; (g) in the case of a
          person including a company whether or not registered under section 25
          of the Companies Act, 1956 (1 of 1956), required to file a return
          under sub-section (4A) or sub-section (4B) or sub-section (4C) or
          sub-section (4D) of section 139, be in Form No. ITR-7 and be verified
          in the manner indicated therein, [(III) has agricultural income,
          exceeding five thousand rupees;]] 14[(IV) has income taxable under
          section 115BBDA; or (V) has income of the nature referred to in
          section 115BBE;](VI) has income of the nature specified in clause (vi)
          of sub-section (2) of section 17 on which tax is payable or
          deductible, as the case may be, under sub-section (2) of section 191
          or sub-section (1C) of section 192 [(2) The return of income required
          to be furnished in Form SAHAJ (ITR-1) or Form No. ITR-2 or Form No.
          ITR-3 or 18[Form SUGAM (ITR-4)] or Form No. ITR-5 or Form No. ITR-6
          [or Form No. ITR-7] shall not be accompanied by a statement showing
          the computation of the tax payable on the basis of the return, or
          proof of the tax, if any, claimed to have been deducted or collected
          at source or the advance tax or tax on self-assessment, if any,
          claimed to have been paid or any document or copy of any account or
          form or report of audit required to be attached with the return of
          income under any of the provisions of the Act:] [Provided that where
          an assessee is required to furnish a report of audit specified under
          sub-clause (iv), (v), (vi) or (via) of clause (23C) of section 10,
          section 10A[, section 10AA], clause (b) of sub-section (1) of section
          12A, section 44AB [, section 44DA, section 50B], section 80-IA,
          section 80-IB, section 80-IC, section 80-ID, section 80JJAA, section
          80LA, section 92E, [section 115JB, 5[section 115JC] or section 115VW]
          [or to give a notice under clause (a) of sub-section (2) of section
          11]] of the Act, he shall furnish the same electronically.] [(3) The
          return of income referred to in sub-rule (1) shall be furnished by a
          person mentioned in column (ii) of the Table below to whom the
          conditions specified in column (iii) apply, in the manner specified in
          column (iv) thereof:—
        </p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sl.</th>
              <th>Person</th>
              <th>Condition</th>
              <th>Manner of furnishing return of income</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.sl}</td>
                <td>{item.person}</td>
                <td>{item.condition}</td>
                <td>{item.manner}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <p>
          Explanation.—For the purposes of this sub-rule "electronic
          verification code" means a code generated for the purpose of
          electronic verification of the person furnishing the return of income
          as per the data structure and standards specified by Principal
          Director General of Income-tax (Systems) or Director General of
          Income-tax (Systems).] (4) The [Principal Director-General of
          Income-tax (Systems) or Director-General of Income-tax (Systems)]
          shall specify the procedures, formats and standards for ensuring
          secure capture and transmission of data and shall also be responsible
          for evolving and implementing appropriate security, archival and
          retrieval policies in relation to furnishing the returns [in the
          manners (other than the paper form) specified in column (iv) of the
          Table in sub-rule (3)][and the report of audit [or notice] in the
          manner specified in proviso to sub-rule (2)] (5) Where a return of
          income [***] relates to the assessment year commencing on the 1st day
          of April, 46[2023] or any earlier assessment year, it shall be
          furnished in the appropriate form as applicable in that assessment
          year.] Notes :- 1. Substituted for "2017" by the Income-tax (Second
          Amendment) Rules, 2018, w.r.e.f. 1-4-2018. Earlier, quoted figure was
          substituted for "2016" by the Income-tax (Fourth Amendment) Rules,
          2017, w.e.f. 1-4-2017. 2. Substituted for "an individual" by the
          Income-tax (Second Amendment) Rules, 2018, w.r.e.f. 1-4-2018. 3.
          Inserted by the Income-tax (Second Amendment) Rules, 2018, w.r.e.f.
          1-4-2018. 4. Item (I) substituted by the Income-tax (Second Amendment)
          Rules, 2018, w.r.e.f. 1-4-2018. 5. Inserted by the Income-tax (Twenty
          Second Amendment) Rules, 2017, w.e.f. 18-8-2017. 6. Word "or" omittted
          by the Income-tax (Fourth Amendment) Rules, 2017, dated 30-3-2017,
          w.e.f. 1-4-2017. 7. Inserted by theIncome-tax (Fourth Amendment)
          Rules, 2017, dated 30-3-2017, w.e.f. 1-4-2017. 8. omitted by the
          Income-tax (Fourth Amendment) Rules, 2017, dated 30-3-2017, w.e.f.
          1-4-2017. 9. omitted by the Income-tax (Fourth Amendment) Rules, 2017,
          dated 30-3-2017, w.e.f. 1-4-2017. 10. Clause (c) substituted by the
          Income-tax (Fourth Amendment) Rules, 2017, dated 30-3-2017, w.e.f.
          1-4-2017. Prior to its substitution, said clause read as under : "(c)
          in the case of a person being an individual or a Hindu undivided
          family who is a partner in a firm and where income chargeable to
          income-tax under the head "Profits or gains of business or profession"
          does not include any income except the income by way of any interest,
          salary, bonus, commission or remuneration, by whatever name called,
          due to, or received by him from such firm, be in Form No. ITR-3 and be
          verified in the manner indicated therein." 11. Substituted for
          "derived from a proprietary" by the Income-tax (Second Amendment)
          Rules, 2018, w.r.e.f. 1-4-2018. 12. Substituted for "business income
          and such income is computed in accordance with special provisions
          referred to in section 44ADA and section 44AE of the Act for
          computation of business income, be in Form SUGAM (ITR-4S)" by the
          Income-tax (Fourth Amendment) Rules, 2017, dated 30-3-2017, w.e.f.
          1-4-2017.
          13. Word "or" omitted by the Income-tax (Fourth Amendment) Rules, 2017, dated 30-3-2017 w.e.f. 1-4-2017.

14. Sub-clauses (IV) and (V) inserted by the Income-tax (Fourth Amendment) Rules, 2017, dated 29-3-2017, w.r.e.f. 1-4-2017.

15. Substituted for "deriving income from a proprietary" by the Income-tax (Second Amendment) Rules, 2018, w.r.e.f. 1-4-2018.

16. Word "clause (b)" omitted by theIncome-tax (Fourth Amendment) Rules, 2017, dated 30-3-2017, w.e.f. 1-4-2017.

17. Substituted for "Form No.ITR-4" by the Income-tax (Fourth Amendment) Rules, 2017, dated 30-3-2017, w.e.f. 1-4-2017.

18. Substituted for "Form SUGAM (ITR-4S) or Form No.ITR-4" by the Income-tax (Fourth Amendment) Rules, 2017, dated 30-3-2017, w.e.f. 1-4-2017.

19. Serial No.1 and entries relating thereto substituted by the Income-tax (Fourth Amendment) Rules, 2017 dated 30-3-2017, w.e.f. 1-4-2017.

20. Substituted for "2016" by the Income-tax (Second Amendment) Rules, 2018, w.r.e.f. 1-4-2018. Earlier, quoted figure was substituted for "2015" by the Income-tax (Fourth Amendment) Rules, 2017, w.e.f. 1-4-2017.

21. Substituted by Notification No. 32/2019 dated on 1.04.2019. Earlier, read as "2018"

22. Inserted by Notification No. 32/2019 dated on 1.04.2019.

23.Substituted by Notification No. 32/2019 dated on 1.04.2019. Earlier, read as "a Hindu undivided family [or a firm, other than a limited liability partnership firm,"

24. Substituted by Notification No. 32/2019 dated on 1.04.2019. Earlier, read as :-

(I) is a resident, other than not ordinarily resident in India within the meaning of sub-section (6) of section 6 and has,-

(i) assets (including financial interest in any entity) located outside India; or

[(ii) signing authority in any account located outside India; or 

(iii) income from any source outside India;]

 

25. Omitted by Notification No. 32/2019 dated on 1.04.2019.

 

26. Substituted by Notification No. 32/2019 dated on 1.04.2019. Earlier, read as :-

Where total income assessable under the Act during the previous year of a person,-

(i) being an individual of the age of 80 years or more at any time during the previous year; or

(ii) whose income does not exceed five lakh rupees and no refund is claimed in the return of income,

and who furnishes the return in Form No. SAHAJ ITR-1 or Form No. SUGAM (ITR-4)

 

27. Substituted by Notification No. 32/2019 dated on 1.04.2019. Earlier, read "2017".

 

28.Substituted by the Income-tax (1st Amendment) Rules, 2020 w.e.f 01-04-2020. Notificated dated 3rd January, 2020 (Notification No. 01/2020)

Word-

 "2019"

substituted by word-

 "2020"

29. Omitted by Notificated dated 3rd January, 2020 w.e.f 01-04-2020(Notification No. 01/2020)

30. Inserted by the Income-tax (1st Amendment) Rules, 2020.w.e.f 01-04-2020 Notificated dated 3rd January, 2020 (Notification No. 01/2020)

31.Inserted by the Income-tax (1st Amendment) Rules, 2020.w.e.f 01-04-2020 Notificated dated 3rd January, 2020 (Notification No. 01/2020)

32.Inserted by the Income-tax (1st Amendment) Rules, 2020.w.e.f 01-04-2020 Notificated dated 3rd January, 2020 (Notification No. 01/2020)

 

33. Substituted by the Income-tax (1st Amendment) Rules 2020 w.e.f 01-04-2020. Notificated dated 3rd January, 2020 (Notification No. 01/2020)

Word-

 2018-

Shall be substituted by

2019

 

34.Omitted by the Income-tax (1st Amendment) Rules, 2020.w.e.f 01-04-2020 Notificated dated 3rd January, 2020 (Notification No. 01/2020)

35. Omitted by Income-tax (12th Amendment) Rules, 2020  w.e.f 29-05-2020

36. Substituted by Income-tax (7th Amendment) Rules, 2021 Notification dated 31-03-2021 w.e.f 01-04-2021

Figure-

2020

shall be substituted by-

 2021

37. Omitted by Income-tax (7th Amendment) Rules, 2021 Notification dated 31-03-2021 w.e.f 01-04-2021

38. Inserted  by Income-tax (7th Amendment) Rules, 2021 Notification dated 31-03-2021 w.e.f 01-04-2021

39. Substituted by Income-tax (20th Amendment) Rules, 2021 Notification dated 27-07-2021

For the words-

 "or sub-section (1) of section 148"

Following words shall be substituted with namely,

"or section 148"

 

40. Substituted by Income-tax (20th Amendment) Rules, 2021 Notification dated 27-07-2021

For the figure-

 "2019"

Following figure shall be substituted with namely,

"2020"

 

 41. Substituted by the Income-tax (fourth Amendment) Rules, 2022. Notification No. 21/2022 dated 30.03.2022 w.e.f 01.04.2022.

In sub-rule (1), in the opening portion, For the figure

"2021"

Following figure shall be substituted with namely,

 “2022”

 

42. Substituted by the Income-tax (fourth Amendment) Rules, 2022. Notification No. 21/2022 dated 30.03.2022 w.e.f 01.04.2022.

In sub-rule (5), For  the figure-

 "2020"

Following figure shall be substituted with namely,

"2021"

 

43. Substituted by the Income-tax (First Amendment) Rules, 2023 dated 10.02.2023 w.e.f 01.04.2023

in sub-rule (1), in the opening portion, for the figures-

 1,21,28,34 41[2022]

Following figure shall be substituted with namely,

"2023"

 

44. Substituted by the Income-tax (First Amendment) Rules, 2023 dated 10.02.2023 w.e.f 01.04.2023

in sub-rule (5), for the figures-

20,27,33,40 42[2021]

Following figure shall be substituted with namely,

"2022"

 

45. Substituted by the Income-tax (Twenty-Ninth Amendment) Rules, 2023 Notification  No. 105/2023 dated 22-12-2023 w.e.f 01-04-2024

in sub-rule (1), in the opening portion, for the figure -

"43[2023]"

Following figure shall be substituted with namely,

“2024”

 

46. Substituted by the Income-tax (Twenty-Ninth Amendment) Rules, 2023 Notification  No. 105/2023 dated 22-12-2023 w.e.f 01-04-2024

in sub-rule (5), for the figure -

"44[2022]"

Following figure shall be substituted with namely,

“2023”
        </p>
      </div>
    </>
  );
};

export default ReturnContent;
