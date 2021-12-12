import React from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

const Header = (props) => {
  if (!props.data) return null;

  const project = props.data.project;
  const name = props.data.name;
  const description = props.data.description;

  return (
    <>
      <ParticlesBg type="random" bg={true} />

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
    </>
  );
};

export default Header;
