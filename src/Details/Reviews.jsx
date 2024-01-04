import React from 'react'
import {Col, Container, Row } from 'react-bootstrap'

function Reviews() {
    return (
        <Container style={{ marginTop: '100px' }}>
            <Row>
                <Col md={6}>
                    <img
                        src="/images/img-24/new.webp"
                        height="300px"
                        alt="..."
                        style={{ width: "100%", objectFit: "cover", borderRadius: "8px" }}
                    />
                </Col>
                <Col md={6}>
                    <h1 style={{ color: 'red' }}>SIRUI SNIPER LENS</h1>
                    <h3 style={{ color: 'darkgrey' }}> SIRUI’S FIRST AUTOFOCUS SET</h3>
                    <p>SIRUI just announced their first autofocus lens ever – the SIRUI Sniper. The Sniper is a set of three lenses for APS-C sensors. We took the set for a ride, and they are a great pick for the price. Once you read the review, there is a good chance you’d wanna grab them. They are now pre-selling on Indiegogo for $299 a lens.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Reviews