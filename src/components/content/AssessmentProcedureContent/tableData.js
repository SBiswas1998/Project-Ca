// tableData.js

const tableData = [
    {
        sl: 1,
        person: "Individual or Hindu undivided family",
        condition:
            "Accounts are required to be audited under section 44AB of the Act",
        manner: "Electronically under digital signature",
    },
    {
        sl: "",
        person: "",
        condition:
            "Where total income assessable under the Act during the previous year of a person, being an individual of the age of eighty years or more at any time during the previous year, and who furnishes the return in Form number SAHAJ (ITR-1) or Form number SUGAM (ITR-4)",
        manner:
            "(A) Electronically under digital signature; or (B) Transmitting the data electronically in the return under electronic verification code; or (C) Transmitting the data in the return electronically and thereafter submitting the verification of the return in Form ITR-V; or (D) Paper form",
    },
    {
        sl: "",
        person: "",
        condition: "In any other case",
        manner:
            "(A) Electronically under digital signature; or (B) Transmitting the data electronically in the return under electronic verification code; or (C) Transmitting the data in the return electronically and thereafter submitting the verification of the return in Form ITR-V",
    },
    {
        sl: 2,
        person: "Company",
        condition: "In all cases",
        manner: "Electronically under digital signature",
    },
    {
        sl: 3,
        person: "A person required to furnish the return in Form ITR-7",
        condition: "In case of a political party ,(b) In any other case",
        manner: `Electronically under digital signature.
      (A) Electronically under digital signature; or

      (B) Transmitting the data in the return electronically under electronic verification code; or

       (C) Transmitting the data in the return electronically and thereafter submitting the verification of the return in Form ITR-V.
      
      `,
    },
    {
        sl: 4,
        person:
            "Firm or limited liability partnership or any person (other than a person mentioned in Sl. 1 to 3 above) who is required to file return in Form ITR-5",
        condition:
            "Accounts are required to be audited under section 44AB of the Act,In any other case",
        manner: `Electronically under digital signature;

        (A) Electronically under digital signature; or

        (B) Transmitting the data in the return electronically under electronic verification code; or

        (C) Transmitting the data in the return electronically and thereafter submitting the verification of the return in Form ITR-V`,
    },

];

export default tableData;
