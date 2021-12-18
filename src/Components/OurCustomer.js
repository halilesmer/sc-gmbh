import Fade from "react-reveal";

const OurCustomer =(props)=> {

    if (!props.data) return null;

    const name = props.data.name;
    //const profilepic = "images/" + props.data.image;
    const logo = "images/" + props.data.image;
    const ourCostumer = props.data.ourCustomerText;
    const street = props.data.address.street;
    const city = props.data.address.city;
    const state = props.data.address.state;
    const zip = props.data.address.zip;
    const phone = props.data.phone;
    const email = props.data.email;
    /* const resumeDownload = props.data.resumedownload; */

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={logo}
                alt="Silver Connect Logo"
              />
            </div>
            <div className="nine columns main-col">
              <h2>Unsere Kunden</h2>

              <p>{ourCostumer}</p>
              {/* <div className="row">
                <div className="columns contact-details">
                  <h2>Kontakt</h2>
                  <p className="address">
                    <span>{name}</span>
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
              </div> */}
            </div>
          </div>
        </Fade>
      </section>
    );
  }


export default OurCustomer;
