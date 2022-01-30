import Slide from "react-reveal";
//import foto from '../../public/images/strengths/01.jpg'

const LogisticsServices = (props) => {
  // const strengthsImg1 = "images/" + props.data.strengthsImg1;;
  // const logo = "images/" + props.data.image;

  /* const getRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }; */

  if (!props.data) return null;

  //const skillmessage = props.data.skillmessage;

  const parcelService = props.data.parcelService.map(function (parcelService) {
    return (
      <div key={parcelService.school}>
        <h3> {parcelService.school}</h3>
        <p className="info">{parcelService.degree}</p>
        <p>{parcelService.description}</p>
      </div>
    );
  });
  const courierService = props.data.courierService.map(function (
    courierService
  ) {
    return (
      <div key={courierService.school}>
        <h3> {courierService.school}</h3>
        <p className="info">{courierService.degree}</p>
        <p>{courierService.description}</p>
      </div>
    );
  });

  const logistics = props.data.logistics.map(function (logistics) {
    return (
      <div key={logistics.school}>
        <h3>{logistics.school}</h3>
        <p className="info">{logistics.degree}</p>
        <p>{logistics.description}</p>
      </div>
    );
  });

  const baggageLogistics = props.data.baggageLogistics.map(function (
    baggageLogistics
  ) {
    return (
      <div key={baggageLogistics.school}>
        <h3>{baggageLogistics.school}</h3>
        <p className="info">{baggageLogistics.degree}</p>
        <p>{baggageLogistics.description}</p>
      </div>
    );
  });

  return (
    <section id="logisticsServices">
      <Slide left duration={1300}>
        <div className="logisticsheader">
          <h1>Logistikdienstleistungen</h1>
        </div>
      </Slide>

      <Slide left duration={1300}>
        <div className="row education">
          <div className="three columns header-col">
            <img
              className="profile-pic"
              width={383}
              height={232}
              src={"images/strengths/01.Webp"}
              alt="paketdienst"
            />
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{parcelService}</div>
            </div>
          </div>
        </div>
      </Slide>
      <Slide left duration={1300}>
        <div className="row education">
          <div className="three columns header-col">
            <img
              className="profile-pic"
              width={383}
              height={232}
              src={"images/strengths/02.WebP"}
              alt="paketdienst"
            />
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{courierService}</div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide left duration={1300}>
        <div className="row work">
          <div className="three columns header-col">
            <img
              className="profile-pic"
              width={383}
              height={232}
              src={"images/strengths/03.jpg"}
              alt="paketdienst"
            />
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{logistics}</div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide left duration={1300}>
        <div className="row education">
          <div className="three columns header-col">
            <img
              className="profile-pic"
              width={383}
              height={232}
              src={"images/strengths/04.jpg"}
              alt="paketdienst"
            />
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{baggageLogistics}</div>
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
};
    
    
    export default LogisticsServices;
    
    /* <Slide left duration={1300}>
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>
    </Slide> */