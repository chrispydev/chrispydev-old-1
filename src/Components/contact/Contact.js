import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact__me" id="contact">
      <h1>Contact</h1>
      <p>It you want to talk, you can find me at:</p>
      <a className="mail__to" href="mailto:chrispydev.owusu@gmail.com">
        chrispydev.owusu@gmail.com
      </a>
      <div className="font__icons">
        <a
          href="https://github.com/chrispydev"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          <FontAwesomeIcon icon={faGithub} className="margin" />
        </a>
        <a
          href="https://www.instagram.com/chrispydev"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          <FontAwesomeIcon icon={faInstagram} className="margin" />
        </a>
        <a
          href="https://twitter.com/chrispydev1"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          <FontAwesomeIcon icon={faTwitter} className="margin" />
        </a>
        <a
          href="https://www.facebook.com/chrispydev1"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          <FontAwesomeIcon icon={faFacebook} className="margin" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
