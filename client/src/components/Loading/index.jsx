import React from 'react';
import { Col, Container, Row, Spinner } from 'reactstrap';
import './Loading.scss';

function Loading() {
    return (
        <Container className="justify-content-center">
            <Row>
                <Col xs="auto">
                    <Spinner className='spinner' color="primary" />
                </Col>
            </Row>
        </Container>
    );
}

export default Loading;