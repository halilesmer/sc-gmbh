import React from "react";
import {Link } from "react-router-dom";


const Navigation = () => {
  return (
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className="mobile-btn" href="#home" title="Hide navigation">
        Hide navigation
      </a>

      <ul id="nav" className="nav">
        <li className="current">
          <Link to="/" className="smoothscroll">
            Home
          </Link>
        </li>

        <li>
          <a className="smoothscroll" href="#about">
            Über Uns
          </a>
        </li>

        <li>
          <a className="smoothscroll" href="#logisticsServices">
            LOGISTIKDIENSTLEISTUNGEN
          </a>
        </li>

        <li>
          <a className="smoothscroll" href="#ourCustomer">
            UNSERE KUNDEN
          </a>
        </li>

        <li>
          <a className="smoothscroll" href="#contact">
            Kontakt
          </a>
        </li>
      </ul>

      {/* <img className="mainFoto" src={truck} alt="Logo" /> */}
    </nav>
  );
  }
    
    export default Navigation;