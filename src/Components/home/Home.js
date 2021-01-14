import React from "react";
import "./Home.css";
import { Button } from "react-bootstrap";
import Emoji from "../ui/Emoji";

function Home() {
  return (
    <section className="home__main" id="home">
      <div className="home__info">
        <h2>
          Hello
          <Emoji symbol="✌" label="hi" />
          ,
        </h2>
        <h2>
          I'm <span>chrispydev</span>
        </h2>
        <p>
          A <span>Full Stack python Developer</span> by Day, Founder &&
          Freelancer by Night. <span>#chrispydev"</span>
        </p>
        <Button
          variant="outline-dark"
          size="lg"
          className="home__btn"
          href="#about"
        >
          About Me
        </Button>
      </div>
    </section>
  );
}

export default Home;
