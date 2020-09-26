import React from 'react';
import emailjs from 'emailjs-com';
import { Row, Container } from 'react-bootstrap';
import './index.css';
import ScrollableSection from 'react-update-url-on-scroll';

function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.user_name.value);
    console.log(e.target.user_email.value);
    console.log(e.target.message.value);

    emailjs.sendForm('outlook', 'portfoliositecontact', e.target, 'user_D6Whn8ZWKEkuy23eNghGk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.user_name.value = "";
      e.target.user_email.value = "";
      e.target.message.value = "";
  }

  function onClick(e) {
    e.preventDefault();

  }

  return (
    <section id="contact">
      <Container>
        <ScrollableSection name={'contact'}>
          <Row>
            <div className="col-md-12 flex">
              <h2 data-aos="fade-right">Contact Me</h2>
              <div className="header-bar" data-aos="fade-left"></div>
              <form id="contact-form" onSubmit={sendEmail}>
                <Row>
                  <div className="col-md-12">
                    <input name="user_name"
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                    <input name="user_email"
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                    <input name="message"
                      type="text"
                      id="message-form-control"
                      className="form-control"
                      placeholder="Message"
                    />
                    <button id="button-submit" type="submit" value="Send" className="btn btn-primary" click={onClick}>
                      Send Email
                    </button>
                  </div>
                </Row>
              </form>
            </div>
          </Row>
        </ScrollableSection>
      </Container>
    </section>
  )
}

export default Contact;
