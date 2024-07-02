import DPermanentContent from "../11DPermanentContent";
import NoticeContent from "../NoticeContent";
import AAPrescribedContent from "./12AAPrescribedContent";
import ABConditionsContent from "./12ABConditionsContent";
import ACUpdatedContent from "./12ACUpdatedContent";
import ADReturnContent from "./12ADReturnContent";
import APreparationContent from "./12APreparationContent";
import BAStatementContent from "./12BAStatementContent";
import BStatementCentent from "./12BStatementCentent";
import CAStatementContent from "./12CAStatementContent";
import CBStatementContent from "./12CBStatementContent";
import CCStatementContent from "./12CCStatementContent";
import CStatementContent from "./12CStatementContent";
import EPrescribedContent from "./12EPrescribedContent";
import FPrescribedContent from "./12FPrescribedContent";
import ReturnContent from "./12ReturnContent";
import AValuationContent from "./13AValuationContent";
import ProcedureContent from "./13ProcedureContent";
import AAAMannerContent from "./14AAAMannerContent";
import AFormContent from "./14AFormContent";
import BGuidelinesContent from "./14BGuidelinesContent";
import CPrescribedContent from "./14CPrescribedContent";
import FormContent from "./14FormContent"


const AssessmentProcedureContent = [
    {
        id: 1,
        title: "12 Return of income and return of fringe benefits",
        link: <ReturnContent/>
    },
    {
        id: 2,
        title: "12A Preparation of return by authorised representative",
        link: APreparationContent
    },
    {
        id: 3,
        title: "12AA Prescribed person for the purposes of clause (c) and clause (cd) of section 140",
        link: AAPrescribedContent
    },
    {
        id: 4,
        title: "12AB Conditions for furnishing return of income by persons referred to in clause (b) of sub-section (1) of section 139",
        link: ABConditionsContent
    },
    {
        id: 5,
        title: "12B Statement under sub-section (3A) of section 115R",
        link: BStatementCentent
    },
    {
        id: 6,
        title: "12BA Statement under sub-section (3) of section 115TA",
        link: BAStatementContent
    },
    {
        id: 7,
        title: "12C Statement under sub-section (2) of section 115U",
        link: CStatementContent
    },
    {
        id: 8,
        title: "12CA Statement under sub-section (4) of section 115UA",
        link: CAStatementContent
    },
    {
        id: 9,
        title: "12CB Statement under sub-section (7) of section 115UB",
        link: CBStatementContent
    },
    {
        id: 10,
        title: "12CC Statement under sub-section (4) of section 115TCA",
        link: CCStatementContent
    },
    {
        id: 11,
        title: "12D Prescribed authority under section 133D",
        link: DPermanentContent
    },
    {
        id: 12,
        title: "12E Prescribed authority under sub-section (2) of section 143",
        link: EPrescribedContent
    },
    {
        id: 13,
        title: "12F Prescribed income- tax authority under second proviso clause(i) of sub-section (1) of sec 142",
        link: FPrescribedContent
    },
    {
        id: 14,
        title: "13.Procedure to requisition services under sub-section (2) and to make a reference under sub-section (9D) of section 132",
        link: ProcedureContent
    },
    {
        id: 15,
        title: "14 Form of verification under section 142",
        link: FormContent
    },
    {
        id: 16,
        title: "14A Form of audit report under section 142(2A)",
        link: AFormContent
    },
    {
        id: 17,
        title: "14AAA Manner of making permanent account number inoperative",
        link: AAAMannerContent
    },
    {
        id: 18,
        title: "14B Guidelines for the purposes of determining expenses for audit",
        link: BGuidelinesContent
    },
    {
        id: 19,
        title: "14C. Prescribed manner of authentication of an electronic record under electronic verification code under sub-clause (b) of clause (i) of sub-section (7) of section 144B",
        link: CPrescribedContent
    },
    {
        id: 20,
        title: "15 Notice of demand for regular assessment, etc",
        link: NoticeContent
    },
    {
        id: 21,
        title: "12AC . Updated return of income",
        link: <ACUpdatedContent/>
    },
    {
        id: 22,
        title: "12AD Return of income under section 170A",
        link: ADReturnContent
    },
    {
        id: 23,
        title: "13A. Valuation under sub-section (9D) of section 132",
        link: AValuationContent
    },

  ];
  
  export default AssessmentProcedureContent;