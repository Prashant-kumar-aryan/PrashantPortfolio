import React from "react";
import contact from "../assets/images/contact.png";
import ContactForm from "./ContactForm";
import "../assets/styles/contact.css"; // Assuming this contains specific styles for the Contact component
import "../assets/styles/ContactForm.css"; // Assuming this contains global styles

const Contact = () => {
  return (
    <>
      <section className="contact-header">
        <div className="contact-image">
          <img src={contact} alt="contact" />
        </div>
        <div className="contact-title">
          <h1>Contact Me</h1>

          <h2 style={{ color: "white" }}>
            I am always up for a good conversation.
          </h2>
          <h2 style={{ color: "white" }}>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=prashantkr2698@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="fa fa-google"
              style={{
                marginTop: "20px",
                color: "white",
                padding: "5px",
              }}
            >
              <span style={{ marginLeft: "10px" }}>
                prashantkr2698@gmail.com
              </span>
            </a>
          </h2>
          <h2 style={{ color: "white" }}>
            <a
              href="https://api.whatsapp.com/send/?phone=7250412245&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              className="fa fa-whatsapp"
              style={{
                marginTop: "20px",
                color: "white",
                padding: "5px",
              }}
            >
              <span style={{ marginLeft: "10px" }}>7250412245</span>
            </a>
          </h2>
        </div>
      </section>

      <section className="contact-form-section">
        <ContactForm />
      </section>

      <section className="fun-section">
        <h1 style={{ color: "white" }}>
          You may have some fun with Whack Mr. Sahay
        </h1>
        <iframe
          src="https://prashant-kumar-aryan.github.io/WhackMr.-sahay/"
          title="Whack Mr. Sahay Game"
          className="iframe"
          aria-label="Whack Mr. Sahay Game"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
