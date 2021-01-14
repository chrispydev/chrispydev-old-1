import React from "react";
import "./Components/media/media-queries.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Components/about/About";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/contact/Contact";
import "./index.css"

function App() {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Portfolio />
            <Contact />
        </>
    );
}

export default App;
