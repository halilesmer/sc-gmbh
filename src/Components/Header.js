import React from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import { Link } from "react-scroll";

const Header = (props) => {
  if (!props.data) return null;

  /* const project = props.data.project; */
  const name = props.data.name;
  const slogan = props.data.slogan;
  const description = props.data.description;

  return (
    <>
      <div className="row banner start">
        <ParticlesBg type="lines" bg={true} />
        <div className="banner-text">
          <Fade bottom>
            <h1 className="responsive-headline">{name}</h1>
          </Fade>
          <Fade bottom>
            <h2 className="responsive-headline slogan-header">{slogan}</h2>
          </Fade>
          <Fade bottom duration={1200}>
            <h3>{description}.</h3>
          </Fade>
          <hr />
          {/* <Fade bottom duration={2000}>
            <ul className="social">
              <a href={project} className="button btn project-btn">
                <i className="fa fa-book"></i>Project
              </a>
            </ul>
          </Fade> */}
        </div>
      </div>
      {
        <p className="scrolldown">
          <Link
            className="smoothscroll"
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={400}
          >
            <i className="icon-down-circle"></i>
          </Link>
        </p>
      }
    </>
  );
};

export default Header;
