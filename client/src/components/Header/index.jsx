import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';

Header.propTypes = {};

function Header() {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a
                            className="header__link header__title"
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Weather App
                        </a>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;