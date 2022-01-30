import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
const Strengths =(props)=> {

/*     if (!props.data) return null;

    const projects = props.data.projects.map( (projects) => {
      let projectImage = "images/strengths/" + projects.image;

      return (
        <div key={id++} className="columns strengths-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    }); */
      if (!props.data) return null;

      const projects = props.data.projects.map((projects) => {
        let projectImage = "images/strengths/" + projects.image;

        return (
          <section key={id++}>
            <Fade left duration={1000} distance="40px">
              <div className="columns strengths-item">
                <div className="item-wrap">
                  <Zmage
                    alt={projects.title}
                    src={projectImage}
                    widt={350}
                    heigth={200}
                  />
                  <div style={{ textAlign: "center" }}>{projects.title}</div>
                </div>
              </div>
            </Fade>
          </section>
        );
      });

  return (
    
    <section id="strengths">
        
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Dies sind unsere Stärken</h1>

              <div
                id="strengths-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
      </div>
      
      
        
      </section>

      
    );
  }


export default Strengths;

  /* <section id="strengths">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <div
                id="strengths-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section> */
