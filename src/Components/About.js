import Fade from "react-reveal";

const About = ({data}) => {
  if (!data) return null;

  const companyName = data.companyName;
  //const profilepic = "images/" + data.image;
  const logo = "images/" + data.image;
  const aboutUsText = data.aboutUsText;
  const street = data.address.street;
  const city = data.address.city;
  const state = data.address.state;
  const zip = data.address.zip;
  const phone = data.phone;
  const email = data.email;
  //const resumeDownload = data.resumedownload;

  return (
    <section id="about">
      <Fade duration={1000}>
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              width={120}
              height={120}
              src={logo}
              alt="Silver Connect Logo"
            />
          </div>
          <div className="nine columns main-col">
            <h2>Über Uns</h2>

            <p>{aboutUsText}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Kontakt</h2>
                <p className="address">
                  <span>{companyName}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              {/*  <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div> */}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};


export default About;
