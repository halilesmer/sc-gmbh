import {useState, useRef } from "react";
import { Fade, Slide } from "react-reveal";
import emailjs from 'emailjs-com'
import snackbar from "snackbar";
import ClientCaptcha from "react-client-captcha";



const Contact = ({data}) => {
  const [captchaCode, setCaptchaCode] = useState('')
  const [captchaCodeInput, setCaptchaCodeInput] = useState('')
  
  const oncaptchaChange = (e) => {
    setCaptchaCodeInput(e.target.value)
  }

  
  const form = useRef();
  
  const sendemail = (e) => {
      e.preventDefault();
      
    if (captchaCodeInput === captchaCode) {
      emailjs
        .sendForm(
          "service_7364xg5",
          "template_mg2fimu",
          form.current,
          //e.target,
          "user_0XboTQFHWXrfUxdhzR593"
        )
        .then(
          (result) => {
            console.log(result.text);
            snackbar.gap = 950;
            snackbar.duration = 3000;
            return snackbar.show("Ihre Nachricht wurde Erfolgreich versendet!");
          },
          (error) => {
            console.log(error.text);
          }
      );
    e.target.reset();
    } else {
      snackbar.duration = 2000;
      return snackbar.show("Bitte lösen Sie Captcha richtig!");
    }
    
    
  }
  

  
    if (!data) return null;

    const companyName = data.companyName;
    const street = data.address.street;
    //const city = data.address.city;
    const state = data.address.state;
    const zip = data.address.zip;
    const phone = data.phone;
    const message = data.contactmessage;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              {/* <h1>
                <span>Get In Touch.</span>
              </h1> */}
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form
                ref={form}
                onSubmit={sendemail}
                action=""
                method="post"
                id="contactForm"
                name="contactForm"
              >
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactName"
                      name="name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      name="email"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">
                      Betreff<span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactSubject"
                      name="subject"
                      required
                    />
                  </div>
                  {/*-------------- Captcha -----------------*/}

                  <div>
                    <label htmlFor="contactMessage">
                      Nachricht <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      id="contactMessage"
                      name="message"
                      required
                    ></textarea>
                  </div>
                  <div id="captcha">
                    <ClientCaptcha captchaCode={setCaptchaCode} />
                    <input
                      type="text"
                      placeholder="Bitte Captcha hier eingeben!"
                      value={captchaCodeInput}
                      onChange={oncaptchaChange}
                    />
                  </div>

                  <div>
                    <input type="submit" className="submit" value="Senden" />
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Adresse und Telefonnummer:</h4>
                <p className="address">
                  {companyName}
                  <br />
                  {street} <br />
                  {zip} {state}
                  <br />
                  <span>{phone}</span>
                </p>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }


export default Contact;
