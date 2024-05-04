export const menuItemsData = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Services",
    submenu: [
      {
        title: "Registrations",
        submenu: [
          {
            title: "Proprietorship",
            url: "/service/registration/proprietorship",
          },
          {
            title: "Partnership",
            url: "/service/registration/partnership",
          },
          {
            title: "One Person Company",
            url: "/service/registration/one_person_company",
          },
          {
            title: "Limited Liability Partnership",
            url: "/service/registration/limited_liability_partnership",
          },
          {
            title: "Private Limited Company",
            url: "/service/registration/private_limited_company",
          },
          {
            title: "Public Limited Company (LLP)",
            url: "/service/registration/public_limited_company",
          },
          {
            title: "Society Registrations",
            url: "/service/registration/society_registrations",
          },
          {
            title: "Trust",
            url: "/service/registration/trust",
          },
          {
            title: "Udyam Aadhar",
            url: "/service/registration/udyam_aadhar",
          },
          {
            title: "Import Export Code",
            url: "/service/registration/import_export_code",
          },
        ],
      },
      {
        title: "Income Tax",
        submenu: [
          {
            title: "ITR Filing",
            url: "frontend",
          },
          {
            title: "PAN Aadhar Link ",
            url: "frontend",
          },
          {
            title: "Tax Payment",
            url: "/service/registrations/temporary_GST_registration",
          },
          {
            title: "Professional Tax",
            url: "/service/registrations/professional_tax",
          },
          {
            title: "Tan & PAN Registration",
            url: "/service/registrations/tan_registration",
          },
          {
            title: "Capital Gain",
            url: "/service/registrations/PF_registration",
          },
          {
            title: "Notice & SCOTIN",
            url: "frontend",
          },
          {
            title: "Tax Calculation",
            url: "/service/registrations/MSME_registration",
          },
          {
            title: "FAQ",
            url: "/service/registrations/import_export_code",
          },
        ],
      },
      {
        title: "GST",
        submenu: [
          {
            title: "GST Registration",
            url: "/service/tax_filing/business_tax_filing",
          },
          {
            title: "GST Return",
            url: "/service/tax_filing/TDS_return",
          },
          {
            title: "Notice & SCOTIN",
            url: "/service/tax_filing/ESI_return",
          },
          {
            title: "GST Amendment",
            url: "/service/tax_filing/cancel_GST_registration",
          },
          {
            title: "Assessment",
            url: "/service/tax_filing/cancel_GST_registration",
          },
          {
            title: "GST Tax Calculation",
            url: "/service/tax_filing/cancel_GST_registration",
          },
        ],
      },
      {
        title: "Auditing",
        url: "",
      },
      {
        title: "Compliance",
        submenu: [
          {
            title: "Change Company Name",
            url: "/service/compliance/change_company_name",
          },
          {
            title: "Registered office Change",
            url: "/service/compliance/registered_office_change",
          },
          {
            title: "Add Directors",
            url: "/service/compliance/add_directors",
          },
          {
            title: "Remove Directors",
            url: "/service/compliance/remove_directors",
          },
          {
            title: "Increase Authorized Capital",
            url: "/service/compliance/increase_authorized_capital",
          },
          {
            title: "Share Transfer",
            url: "/service/compliance/share_transfer",
          },
          {
            title: "Moa Amendment",
            url: "/service/compliance/MOA_amendment",
          },
          {
            title: "Add Partner",
            url: "/service/compliance/add_partner",
          },
          {
            title: "Winding up of company",
            url: "/service/compliance/winding_up_of_company",
          },
          {
            title: "Winding up of LLP",
            url: "/service/compliance/winding_up_of_LLP",
          },
        ],
      },
      {
        title: "Tax Filing",
        submenu: [
          {
            title: "Business Tax Filing",
            url: "/service/tax_filing/business_tax_filing",
          },
          {
            title: "TDS Return",
            url: "/service/tax_filing/TDS_return",
          },
          {
            title: "ESI Return",
            url: "/service/tax_filing/ESI_return",
          },
          {
            title: "Cancel GST Registrations",
            url: "/service/tax_filing/cancel_GST_registration",
          },
        ],
      },
      {
        title: "Funding",
        submenu: [
          {
            title: "Business Lone",
            url: "/service/funding/business_plan_preparation",
          },
          {
            title: " MSME Lone",
            url: "/service/funding/CMA_report_preparation",
          },
          {
            title: "House Lone",
            url: "/service/funding/bank_loan_rating",
          },
          {
            title: "Loan on Property",
            url: "/service/funding/credit_score_check",
          },
          {
            title: "Team Lone",
            url: "/service/funding/term_loan",
          },
          {
            title: " Working Capital Lone",
            url: "/service/funding/working_capital",
          },
          // {
          //   title: "Collateral Freelone",
          //   url: "/service/funding/credit_score_check",
          // },
          // {
          //   title: "Bank Lone Syndication",
          //   url: "/service/funding/bank_loan_syndication",
          // },
        ],
      },
      {
        title: "Advisory",
        submenu: [
          {
            title: "Capital Gain",
            url: "/service/tax_filing/business_tax_filing",
          },
          {
            title: "Sale and Purchase Property",
            url: "/service/tax_filing/TDS_return",
          },
          {
            title: "Investment",
            url: "/service/tax_filing/ESI_return",
          },
          {
            title: "Business Growth",
            url: "/service/tax_filing/cancel_GST_registration",
          },
          {
            title: "Business Society",
            url: "/service/tax_filing/cancel_GST_registration",
          },
          {
            title: "Business Society",
            url: "/service/tax_filing/cancel_GST_registration",
          },
          {
            title: "Financial Planning",
            url: "/service/tax_filing/cancel_GST_registration",
          },
        ],
      },
      {
        title: "Investment",
        submenu: [
          {
            title: "Mutual fund Investment",
            url: "/service/tax_filing/business_tax_filing",
          },
          {
            title: "Life Insurance",
            url: "/service/tax_filing/TDS_return",
          },
          {
            title: "Health Insurance",
            url: "/service/tax_filing/ESI_return",
          },
          {
            title: "Capital Assessment",
            url: "/service/tax_filing/cancel_GST_registration",
          },
        ],
      },

      {
        title: "Book Keeper",
        url: "seo",
      },
      // {
      //   title: "Tax Planning",
      //   url: "seo",
      // },
      // {
      //   title: "SSI (Aadhar Udyog Registration)",
      //   url: "seo",
      // },
      // {
      //   title: "ISO Certification",
      //   url: "seo",
      // },
      // {
      //   title: "Shop & Act Establishment Registration",
      //   url: "seo",
      // },
    ],
  },
  // {
  //   title: "Knowledge Bank",
  //   submenu: [
  //     {
  //       title: "Calculators",
  //       submenu: [
  //         {
  //           title: "Proprietorship",
  //           url: "/service/registration/proprietorship",
  //         },
  //         {
  //           title: "Partnership",
  //           url: "/service/registration/partnership",
  //         },
  //         {
  //           title: "One Person Company",
  //           url: "/service/registration/one_person_company",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Rules",
  //       submenu: [
  //         {
  //           title: "Business Tax Filing",
  //           url: "/service/tax_filing/business_tax_filing",
  //         },
  //         {
  //           title: "TDS Return",
  //           url: "/service/tax_filing/TDS_return",
  //         },
  //         {
  //           title: "ESI Return",
  //           url: "/service/tax_filing/ESI_return",
  //         },
  //         {
  //           title: "Cancel GST Registrations",
  //           url: "/service/tax_filing/cancel_GST_registration",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Forms",
  //       submenu: [
  //         {
  //           title: "Business Tax Filing",
  //           url: "/service/tax_filing/business_tax_filing",
  //         },
  //         {
  //           title: "TDS Return",
  //           url: "/service/tax_filing/TDS_return",
  //         },
  //         {
  //           title: "ESI Return",
  //           url: "/service/tax_filing/ESI_return",
  //         },
  //         {
  //           title: "Cancel GST Registrations",
  //           url: "/service/tax_filing/cancel_GST_registration",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Forms",
  //       submenu: [
  //         {
  //           title: "Business Tax Filing",
  //           url: "/service/tax_filing/business_tax_filing",
  //         },
  //         {
  //           title: "TDS Return",
  //           url: "/service/tax_filing/TDS_return",
  //         },
  //         {
  //           title: "ESI Return",
  //           url: "/service/tax_filing/ESI_return",
  //         },
  //         {
  //           title: "Cancel GST Registrations",
  //           url: "/service/tax_filing/cancel_GST_registration",
  //         },
  //       ],
  //     },

  //   ],
  // },

  // {
  //   title: "Careers",
  //   url: "/contactus",
  // },
  {
    title: "Contact Us",
    url: "/contactus",
  },
  // {
  //   title: "Payment",
  //   url: "/payment",
  // }
];
