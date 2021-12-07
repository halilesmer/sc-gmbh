import React, {useState, useRef } from "react";
import { Fade, Slide } from "react-reveal";
import emailjs from 'emailjs-com'
import snackbar from "snackbar";
import ClientCaptcha from "react-client-captcha";



const Contact = (props) => {
  const [captchaCode, setCaptchaCode] = useState('')
  const [captchaCodeInput, setCaptchaCodeInput] = useState('')
  
  const oncaptchaChange = (e) => {
    setCaptchaCodeInput(e.target.value)
  }

  
  const form = useRef();
  
  const sendemail = (e) => {
      e.preventDefault();
      console.log('captchaCodeInput === captchaCode: ', captchaCodeInput === captchaCode);
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
  

  
    if (!props.data) return null;

    const name = props.data.name;
    const street = props.data.address.street;
    //const city = props.data.address.city;
    const state = props.data.address.state;
    const zip = props.data.address.zip;
    const phone = props.data.phone;
    const message = props.data.contactmessage;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
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
                      /* onChange={handleChange} */
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
                      /* onChange={handleChange} */
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
                      /* onChange={handleChange} */
                    />
                  </div>

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
                      placeholder="Bitte lösen Sie Captcha richtig!"
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

              {/*  <div id="message-warning"> Error boy</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div> */}
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Adresse und Telefonnummer:</h4>
                <p className="address">
                  {name}
                  <br />
                  {street} <br />
                  {zip} {state}
                  <br />
                  <span>{phone}</span>
                </p>
              </div>

              {/* <div className="widget widget_tweets">
                <h4 className="widget-title">Latest Tweets</h4>
                <ul id="twitter">
                  <li>
                    <span>
                      This is Photoshop's version of Lorem Ipsum. Proin gravida
                      nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                      quis bibendum auctor, nisi elit consequat ipsum
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">2 Days Ago</a>
                    </b>
                  </li>
                  <li>
                    <span>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">3 Days Ago</a>
                    </b>
                  </li>
                </ul>
              </div> */}
            </aside>
          </Slide>
        </div>
      </section>
    );
  }


export default Contact;
