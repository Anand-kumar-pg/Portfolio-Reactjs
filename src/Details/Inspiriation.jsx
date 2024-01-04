import React from 'react'
import {Col, Container, Row } from 'react-bootstrap'

function Inspiriation() {
    return (
        <Container style={{ marginTop: '100px' }}>
            <Row>
                <Col md={6}>
                    <img
                        src="/images/img-23/creative.webp"
                        height="300px"
                        alt="..."
                        style={{ width: "100%", objectFit: "cover", borderRadius: "8px" }}
                    />
                </Col>
                <Col md={6}>
                    <h1 style={{ color: 'red' }}>INSPIRATION</h1>
                    <h3 style={{ color: 'darkgrey' }}>TECHNICAL OR CREATIVE PHOTOGRAPHY?</h3>
                    <p>Are you more of a creative photographer, leaning on visual beauty and your intuition when taking photos? Or do you care more about gear, specs, settings, and other more “technical” aspects of photography? In this video from Adorama, David Bergman discusses the limitations of being focused on just one of them. He breaks down the importance of both aspects, giving you examples for improving them and perfecting your skills.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Inspiriation