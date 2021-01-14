import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <h1 className="pt-5">About Me</h1>
      <p className="about__intro">If you are wondering about who I am</p>
      <p className="about__info">
        I'm a 21 years old full
        <span>
          <i>python developer</i>
        </span>
        by the name
        <span>
          <i>Christian Owusu Yaw</i>
        </span>
        and a Holy Ghost filled developer base in Ghana.
      </p>
      <p className="about__info">
        I started learning how to coding in 29th September 2019. It was a bit
        challenging because, I was an absolute beginer and I didn't have enough
        resources to learn coding. I started with python and with this, I
        learn't how to do some programming. I latter meet someone, by the name
        Bro Steven Smart and he gave{" "}
        <a
          href="https://www.w3schools.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          w3schools
        </a>
        . There I learnt a lot of stuff about coding.
      </p>
      <p className="about__info">
        So with w3schools, I leant
        <span>
          <i>HTML</i>
        </span>
        ,
        <span>
          <i>CSS</i>
        </span>
        ,
        <span>
          <i>JQUERY</i>
        </span>
        and some
        <span>
          <i>PYTHON</i>
        </span>
        . But before python, I built some front end website with this languages
        before leaning python. This took me about a eight months. And also built
        my own fronted website until I changed it to reactjs.
      </p>
      <p className="about__info">
        After this I continued with python because I stop learning python since
        there was no resource to learn. After learning python for just three
        weeks, I start learning django right and it was fun. I built some
        projects like django blog post app and DjangoInstgramClone. I also
        started with selenium and beautofulsoup with python. I like that very
        well and it have alot of potentials and job opportunities.
      </p>
      <p className="about__info">
        I know this alot though I cut some path of to end this, I got admission
        to the
        <span>
          <i>university</i>
        </span>
        in 13th November 2020 to study
        <span>
          <i>computer science</i>
        </span>
        .
      </p>
      <p className="about__info mb-5">
        I always want to learn more, do more, and be more. I’m also a firm
        believer that we should never settle. I’m hard working, super curious,
        passionate, committed, and also a fast learner!
      </p>
    </section>
  );
}

export default About;
