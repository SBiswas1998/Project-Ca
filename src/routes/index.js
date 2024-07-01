import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  // Single link
  About,
  Contact,
  Home,
  Event,
  Schedule,
  PrivacyPolicy,
  Auditing,
  Accounting,
  RulesAndActs,

  // Registration Links
  OnePersonCompany,
  Proprietorship,
  Partnership,
  LimitedLiabilityPartnership,
  PrivateLimitedCompany,
  PublicLimitedCompany,
  UdyamAadhar,
  SocietyRegistrations,
  ImportExportCode,
  Trust,

  // GST Links
  Assessment,
  GSTAmendment,
  GSTRegistration,
  GSTReturn,
  NoticeScrutiny,
  GSTCalculator,

  // Income Tax links
  TanRegistration,
  TaxNoticeSCOTIN,
  ITRFiling,
  PANAadharLink,
  TaxPayment,
  TaxCapitalGain,
  ProfessionalTax,

  // Book Keeping links
  BookAccounting,
  BackReconciliation,
  MonthlyReview,
  PFESI,
  BookProfessionalTax,
  Visit,
  Vouching,

  // Investment Links
  LifeInsurance,
  MutualfundInvestment,
  CapitalAssessment,
  HealthInsurance,
  CapitalGain,

  //   Funding links
  HouseLoan,
  LoanonProperty,
  MSMELoan,
  TeamLoan,
  WorkingCapitalLoan,
  BusinessLoan,

  // Advisory Links
  BusinessSociety,
  BusinessGrowth,
  FinancialPlanning,
  Investment,
  SalePurchaseProperty,


    // ROC
    AddDirectors,
    AddPartner,
    ChangeCompanyName,
    AllSubNavItem,
    Taxtion,
    MoaAmendment,
    RegisteredOfficeChange,
    RemoveDirectors,
    IncreaseAuthorizedCapital,
    ShareTransfer,
    WindingUpOfCompany,
    WindingUpOfLLP,
    StatutoryCompliance




} from "../Viwes";

const AppRouter = () => {
  
  return (
    <Routes>
      {/* Single links */}
      <Route path="/" exact element={<Home />} />
      <Route path="/home" exact element={<Home />} />
      <Route path="/about" exact element={<About />} />
      <Route path="/contactus" exact element={<Contact />} />
      <Route path="/privacy_policy" exact element={<PrivacyPolicy />} />
      <Route path="/schedule-call" exact element={<Schedule />} />
      <Route path="/event" exact element={<Event />} />
      <Route path="/taxtion" exact element={<Taxtion />} />
      <Route path="/service/accounting" exact element={<Accounting />} />
      <Route path="/service/auditing" exact element={<Auditing />} />
      <Route path="/rules_acts" exact element={<RulesAndActs />} />
      <Route path="/service/:navname" element={<AllSubNavItem />} />

      {/* end single links */}

      {/* start  Registration Links*/}
      <Route
        path="/service/registration/OnePersonCompany"
        exact
        element={<OnePersonCompany />}
      />
      <Route
        path="/service/registration/proprietorship"
        exact
        element={<Proprietorship />}
      />
      <Route
        path="/service/registration/partnership"
        exact
        element={<Partnership />}
      />
      <Route
        path="/service/registration/limited_liability_partnership"
        exact
        element={<LimitedLiabilityPartnership />}
      />
      <Route
        path="/service/registration/private_limited_company"
        exact
        element={<PrivateLimitedCompany />}
      />
      <Route
        path="/service/registration/public_limited_company"
        exact
        element={<PublicLimitedCompany />}
      />
      <Route
        path="/service/registration/import_export_code"
        exact
        element={<ImportExportCode />}
      />
      <Route path="/service/registration/trust" exact element={<Trust />} />
      <Route
        path="/service/registration/society_registrations"
        exact
        element={<SocietyRegistrations />}
      />
      <Route
        path="/service/registration/udyam_aadhar"
        exact
        element={<UdyamAadhar />}
      />
      {/*  end Registration Links*/}

      {/*start GST Links */}
      <Route
        path="/service/GST/GST_registration"
        exact
        element={<GSTRegistration />}
      />
      <Route path="/service/GST/GST_Return" exact element={<GSTReturn />} />
      <Route
        path="/service/GST/Notice_Scrutiny"
        exact
        element={<NoticeScrutiny />}
      />
      <Route
        path="/service/GSt/GST_Amendment"
        exact
        element={<GSTAmendment />}
      />
      <Route
        path="/service/GST/GST_Tax_Calculation"
        exact
        element={<GSTCalculator />}
      />
      <Route path="/service/GST/Assessment" exact element={<Assessment />} />
      {/*end  GST Links */}

      {/*start Income Tax links */}
      <Route
        path="/service/IncomeTax/ITR_filing"
        exact
        element={<ITRFiling />}
      />
      <Route
        path="/service/IncomeTax/PAN_Aadhar_Link"
        exact
        element={<PANAadharLink />}
      />
      <Route
        path="/service/IncomeTax/tax_payment"
        exact
        element={<TaxPayment />}
      />
      <Route
        path="/service/IncomeTax/capital_gain"
        exact
        element={<TaxCapitalGain />}
      />
      <Route
        path="/service/IncomeTax/notice_Scrutiny"
        exact
        element={<TaxNoticeSCOTIN />}
      />
      <Route
        path="/service/IncomeTax/Tan_PAN_registration"
        exact
        element={<TanRegistration />}
      />
      <Route
        path="/service/IncomeTax/professional_tax"
        exact
        element={<ProfessionalTax />}
      />

      {/* end  Income Tax links */}

      {/* start book keeping links */}
      <Route
        path="/service/bookkeeping/accounting"
        exact
        element={<BookAccounting />}
      />
      <Route
        path="/service/bookkeeping/professionaltax"
        exact
        element={<BookProfessionalTax />}
      />
      <Route path="/service/bookkeeping/visit" exact element={<Visit />} />
      <Route
        path="/service/bookkeeping/vouching"
        exact
        element={<Vouching />}
      />
      <Route
        path="/service/bookkeepeing/PFESIRegistration"
        exact
        element={<PFESI />}
      />
      <Route
        path="/service/bookkeeping/bankreconciliation"
        exact
        element={<BackReconciliation />}
      />
      <Route
        path="/Service/bookkeeping/MonthlyReview"
        exact
        element={<MonthlyReview />}
      />

      {/* end book keeping links */}

      {/* Start investment links */}
      <Route
        path="/service/investment/mutual_fund_investment"
        exact
        element={<MutualfundInvestment />}
      />
      <Route
        path="/service/investment/life_insurance"
        exact
        element={<LifeInsurance />}
      />
      <Route
        path="/service/investment/health_insurance"
        exact
        element={<HealthInsurance />}
      />
      <Route
        path="/service/investment/capital_assessment"
        exact
        element={<CapitalAssessment />}
      />

      {/* end investment links*/}

      {/* Satrt funding links  */}
      <Route
        path="/service/funding/businessLoan"
        exact
        element={<BusinessLoan />}
      />
      <Route path="/service/funding/msmeloan" exact element={<MSMELoan />} />
      <Route path="/service/funding/homeloan" exact element={<HouseLoan />} />
      <Route
        path="/service/funding/loan_on_property"
        exact
        element={<LoanonProperty />}
      />
      <Route path="/service/funding/teamloan" exact element={<TeamLoan />} />
      <Route
        path="/service/funding/working_capital_loan
      "
        exact
        element={<WorkingCapitalLoan />}
      />

      {/* end funding links  */}

      {/* start Advisory links */}

      <Route
        path="/service/advisory/capital_gain"
        exact
        element={<CapitalGain />}
      />

      <Route
        path="/service/advisory/financial_planning"
        exact
        element={<FinancialPlanning />}
      />
      <Route
        path="/service/advisory/business_society"
        exact
        element={<BusinessSociety />}
      />
      <Route
        path="/service/advisory/business_growth"
        exact
        element={<BusinessGrowth />}
      />
      <Route
        path="/service/advisory/investment"
        exact
        element={<Investment />}
      />
      <Route
        path="/service/advisory/sale_purchase_property"
        exact
        element={<SalePurchaseProperty />}
      />

      {/* end  Advisory links */}


      {/* start ROC Link */}
      <Route
        path="/service/ROC/add_directors"
        exact
        element={<AddDirectors />}
      />
      <Route
        path="/service/ROC/add_partner"
        exact
        element={<AddPartner />}
      />
      <Route
        path="/service/ROC/change_company_name"
        exact
        element={<ChangeCompanyName />}
      />
      <Route
        path="/service/ROC/MoaAmendment"
        exact
        element={<MoaAmendment />}
      />
      <Route
        path="/service/ROC/RegisteredOfficeChange"
        exact
        element={<RegisteredOfficeChange />}
      />
      <Route
        path="/service/ROC/RemoveDirectors"
        exact
        element={<RemoveDirectors />}
      />
      <Route
        path="/service/ROC/IncreaseAuthorizedCapital"
        exact
        element={<IncreaseAuthorizedCapital />}
      />
      <Route
        path="/service/ROC/ShareTransfer"
        exact
        element={<ShareTransfer />}
      />
      <Route
        path="/service/ROC/WindingUpOfCompany"
        exact
        element={<WindingUpOfCompany />}
      />
      <Route
        path="/service/ROC/WindingUpOfLLP"
        exact
        element={<WindingUpOfLLP />}
      />
      <Route
        path="/service/ROC/StatutoryCompliance"
        exact
        element={<StatutoryCompliance/>}
      />

      {/* end ROC Link */}


    </Routes>
  );
};

export default AppRouter;
