import React, { useEffect, useState } from "react";
import { Footer } from "../../../components/Layout";
import CommonAboutSection from "../../../components/CommonAboutSection";
import { ProprietorshipAboutText } from "../../../constants/Paragram";
import CommonCard from "../../../components/Card/CommonCard";
import { ProprietorshipCardText } from "../../../constants/Paragram";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import TitleSection from "../../../components/TitleSection";
import OtherPageLoader from "../../../components/Loader/OtherPageLoader";

const Proprietorship = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (ProprietorshipCardText) {
      setCardText1(ProprietorshipCardText[0]?.Easy);
      setCardText2(ProprietorshipCardText[1]?.Business_Name);
      setCardText3(ProprietorshipCardText[2]?.Single_Promoter);
      setCardText4(ProprietorshipCardText[3]?.Lower_Taxes);
      setCardText5(ProprietorshipCardText[4]?.Easy_to);
    }
  }, [ProprietorshipCardText]);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds
  }, []);

  return (
    <>
      {isLoading ? (
        <OtherPageLoader /> // Display loader here
      ) : (
        <>
          <ResHeader />
          <TitleSection text="Proprietorship" />
          <QuickEnquiryFrom />
          <CommonAboutSection
            text={ProprietorshipAboutText}
            title="Proprietor"
            span="ship"
          />
          <CommonCard
            cardtilte="Reasons to Register a"
            cardspan="Proprietorship Firm"
            card1="Easy to Start"
            card1text={cardtext1}
            crad2="Business Name"
            cardtext2={cardtext2}
            card3="Single Promoter"
            cardtext3={cardtext3}
            card4="Lower Taxes"
            cardtext4={cardtext4}
            card5="Easy to Close"
            cardtext5={cardtext5}
          />
          <Footer />
        </>
      )}
    </>
  );
};

export default Proprietorship;
