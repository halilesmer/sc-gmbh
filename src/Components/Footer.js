import Fade from "react-reveal";
import { NavLink } from "react-router-dom";



const Footer =(props)=> {
  
    if (!props.data) return null;

    /* const networks = props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    }); */

    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              {/* <ul className="social-links">{networks}</ul> */}

              <ul className="copyright">
                <li>
                  <NavLink
                    to="/impressum"
                    title="impressum"
                    className={({ isActive }) =>
                      isActive ? "footerNavActive" : "footerNavNonActive"
                    }
                    end
                  >
                    Impressum
                  </NavLink>
                </li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#root">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }


export default Footer;
