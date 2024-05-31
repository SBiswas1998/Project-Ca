import React, { useEffect, useState } from "react";
import OtherPageLoader from "../../../components/Loader/OtherPageLoader";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";

const Assessment = () => {
  return (
    <>
      <ResHeader />
      <QuickEnquiryFrom />
      <Footer />
    </>
  );
};

export default Assessment;
