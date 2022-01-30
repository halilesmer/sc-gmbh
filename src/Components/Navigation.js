import React from "react";
//import {Link } from "react-router-dom";
import { useNavigate,useLocation } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

const Navigation = ({
  start,
  about,
  logistic,
  ourCustomer,
  ourStrengths,
  contact,
}) => {
   const navigate = useNavigate();
  const handlegoBackClick = () => navigate("/");
  
  const location = useLocation();
  console.log('location: ', location.pathname);

  const handleScrollToTopClick = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav nav-items">
          {location.pathname === "/" && (
            <>
              <li className="current nav-item" onClick={handlegoBackClick}>
                <Link
                  to="start"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={handleScrollToTopClick}
                >
                  {start}
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
                  {about}
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
                  {logistic}
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
                  {ourCustomer}
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
                  {ourStrengths}
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
                  {contact}
                </Link>
              </li>
            </>
          )}
          {location.pathname === "/impressum" && (
            <li className="current nav-item" onClick={handlegoBackClick}>
              <div 
              >
                {start}
              </div>
            </li>
          )}
        </ul>

        {/* <img className="mainFoto" src={truck} alt="Logo" /> */}
      </nav>
    </>
  );
};

export default Navigation;
