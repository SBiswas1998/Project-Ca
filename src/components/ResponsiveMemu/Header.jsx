import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/ca-capka-logo.png"

const ResHeader = () => {
  return (
   <header className="responsive-header">
      <div className="nav-area">
        <aLink href="/home" className="logo">
          <img src={Logo} alt="" srcset=""  width={82}/>
        </aLink>

        {/* for large screens */}
        <Navbar />

        {/* for small screens */}
        <MobileNav />
      </div>
    </header>
  );
};

export default ResHeader;
