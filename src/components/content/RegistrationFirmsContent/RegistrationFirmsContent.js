import ACommunicationContent from "./ACommunicationContent";
import ApplicationRegistrationContent from "./ApplicationRegistrationContent";
import CertificateContent from "./CertificateContent";
import DeclarationContinuationContent from "./DeclarationContinuationContent";
import IntimationRegardingContent from "./IntimationRegardingContent";



const RegistrationFirmsContent = [
    {
        id: 1,
        title: "22 Application for registration of a firm",
        link:  ApplicationRegistrationContent
    },
    {
        id: 2,
        title: "23 Intimation regarding subsequent changes in constitution, etc",
        link: IntimationRegardingContent
    },
    {
        id: 3,
        title: "24 Declaration for continuation of registration",
        link: DeclarationContinuationContent
    },
    {
        id: 4,
        title: "24A Communication regarding partner who is a benamidar",
        link: ACommunicationContent
    },
    {
        id: 5,
        title: "25 Certificate of registration",
        link: CertificateContent

        
    },

  ];
  
  export default RegistrationFirmsContent;