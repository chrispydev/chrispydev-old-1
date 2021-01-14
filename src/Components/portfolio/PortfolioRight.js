import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function PortfolioRight({ portfolio }) {
    const portfolioImage = `/images/${portfolio.pic}`;

    return (
        <Container className="center__content mx-auto mb-4">
            <span>
                <i>{portfolio.info}</i>
            </span>
            <Row className="portfolio__row">
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
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                size="1x"
                                className="mr-1"
                            />
                            Source
                        </Button>
                    </div>
                </Col>
                <Col sm={10} md={5} lg={5} className="portfolio__img">
                    <img src={portfolioImage} alt="port1" />
                </Col>
            </Row>
        </Container>
    );
}

export default PortfolioRight;
