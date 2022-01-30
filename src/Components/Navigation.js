import React from "react";
//import {Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

const Navigation = () => {
  const location = useLocation();
  console.log("location: ", location.pathname);
  const handleScrollClick = () => {
    scroll.scrollToTop();
  };

  return (
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className="mobile-btn" href="#home" title="Hide navigation">
        Hide navigation
      </a>

      <ul id="nav" className="nav nav-items">
        <li className="current nav-item">
          <Link
            to="start"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={handleScrollClick}
          >
            Start
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={400}
          >
            Über Uns
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="logisticsServices"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            /* href="#logisticsServices" */
          >
            LOGISTIKDIENSTLEISTUNGEN
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="ourCustomer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            /* href="#ourCustomer" */
          >
            UNSERE KUNDEN
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="strengths"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-0}
            duration={500}
            /* href="#ourCustomer" */
          >
            Unsere Stärke
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-0}
            duration={500}
            /* href="#ourCustomer" */
          >
            Kontakt
          </Link>
        </li>
      </ul>

      {/* <img className="mainFoto" src={truck} alt="Logo" /> */}
    </nav>
  );
};

export default Navigation;
