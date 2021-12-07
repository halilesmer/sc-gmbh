import React from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
//import truck from "./truck.jpg";

const Header =(props)=> {

    if (!props.data) return null;

    const project = props.data.project;
    const name = props.data.name;
    const description = props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="random" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                UNSERE KUNDEN
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                LOGISTIKDIENSTLEISTUNGEN
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Über Uns
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
        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>Project
                </a>
              </ul>
            </Fade>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }


export default Header;
