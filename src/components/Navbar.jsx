import React, { useState, useEffect } from 'react';
import LoginSignupBtns from "./LoginSignup";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import '.././assets/styles/Navbar.css';

function UserNavbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-title"><i>Booster.nu</i></div>
        <div className="navbar-right">
          <div className="navbar-link">about us</div>
          <div className="navbar-link">github</div>
          <div className="navbar-link">feedback</div>
        </div>
      </div>
    </>
  );
}

function NavLinks() {
  return (
    <>
      <Link to="/login" className="navbar-button nb-black">
        Log In
      </Link>
      <Link to="/login" className="navbar-button nb-white">
        Create Account
      </Link>
    </>
  )
}

function FreshNavbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className={`navbar-title ${scrolled ? 'navbar-title-scrolled' : ''}`}><i className="bi bi-rocket-takeoff" style={{marginRight : "7px"}}></i><i>Booster.nu</i></div>
        <div className="navbar-right">
          <NavLinks />
        </div>
      </div>
    </>
  );
}

export default FreshNavbar;