import React, { useState, useRef } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [scroll, setscroll] = useState();
  const scrollHide = useRef()

  const hideScroll = () => {
    scroll > 200 ? scrollHide.current.style.display = 'block' : scrollHide.current.style.display = 'none'
  }

  window.onscroll = () => {
    scrollFunction();
    hideScroll();
  };

  const scrollFunction = () => {
    setscroll(document.documentElement.scrollTop || document.body.scrollTop);
  };

  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome,
  };

  return (
    <header>
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              portfolio
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <p className="scrolldown" ref={scrollHide} onClick={topFunction}>
        <a className="smoothscroll" href="#home">
          {" "}
          <FontAwesomeIcon icon={faArrowCircleUp} />
        </a>
      </p>
    </header>
  );
}

export default Header;
