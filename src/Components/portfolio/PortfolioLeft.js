import React from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function PortfolioItems({ portfolio }) {
  const portfolioImage = `/images/${portfolio.pic}`;

  return (
    <Container className="center__content mx-auto">
      <div className="border__container">
        <p className="skewY__style">
          <i>{portfolio.info}</i>
        </p>

        <Row className="portfolio__row">
          <Col sm={10} md={5} lg={5} className="portfolio__img">
            <img src={portfolioImage} alt="port1" />
          </Col>
          <Col sm={10} md={5} lg={5} className="portfolio__text">
            <p>{portfolio.detail}</p>
            <h5 className="portfolio__info">{portfolio.description}</h5>
            <div className="flex__items">
              <Button
                variant="outline-dark"
                size="lg"
                className="portfolio__btn up"
                href={portfolio.visit}
                target="_blank"
              >
                Visit
              </Button>
              <Button
                variant="outline-dark"
                size="lg"
                className="portfolio__btn1 up"
                href={portfolio.source}
              >
                <FontAwesomeIcon icon={faGithub} size="1x" className="mr-1" />
                Source
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default PortfolioItems;
