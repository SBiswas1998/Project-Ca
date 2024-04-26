import React, { useState, useEffect } from 'react';
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/mobile-logo.jpg";

const ResHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    {/* <header className="responsive-header"> */}
    <header
      className={`responsive-header ${scrolled ? 'scrolled' : ''}`}
      style={{
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.07), 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        background: scrolled ?  '#05044d' : '#e4dddd26'   ,
        color: scrolled ?  '#fff' : '#000' ,
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        height: scrolled ?  '9vh' : '9vh', // Change height to auto to ensure content is visible
        transition: 'background-color 0.3s ease' // Smooth transition for background color change
      }}
    >
      <div className="nav-area">
        <aLink href="/home" className="logo">
          <img src={Logo} alt="" srcset="" style={{width:"70px", marginTop:"-7px"}}/>
        </aLink>

        {/* for large screens */}
        <Navbar />

        {/* for small screens */}
        <MobileNav />
      </div>
    </header>
    </>
   
  );
};

export default ResHeader;
