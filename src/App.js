import React from 'react';
import './Components/media/media-queries.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/about/About';
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import Portfolio from './Components/portfolio/Portfolio';
import Contact from './Components/contact/Contact';
import './index.css';
import Fonts from './Fonts';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Wrapper = styled(Container)`
  max-width: 1440px !important;
`;

function App() {
  return (
    <>
      <Wrapper className="mx-auto">
        <Fonts />
        <Header />
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </Wrapper>
    </>
  );
}

export default App;
