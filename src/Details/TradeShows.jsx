import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function TradeShows() {
    return (
        <Container style={{ marginTop: '100px' }}>
            <Row>
                <Col md={6}>
                    <img
                        src="/images/img-25/c1-768x432.webp"
                        height="300px"
                        alt="..."
                        style={{ width: "100%", objectFit: "cover", borderRadius: "8px" }}
                    />
                </Col>
                <Col md={6}>
                    <h1 style={{ color: 'red' }}>WILL PHOTO & VIDEO TRADE SHOWS AND CONVENTIONS SURVIVE COVID-19?</h1>
                    <p>We just went to WPPI. WPPI was a lot of fun to be there. It was great to be with other photographers again, to be able to sit in the classes to hear people talk about their businesses, show their work and really teach photography principles. But it was so small. I mean they had only about under 4,000 people that registered. This is what I heard. This is nothing official and about 3,000 people actually picked up their badges. So it was a very small show. The conference was lacking so many people. Sony wasn’t there. Nikon wasn’t there. Just a whole group of people that didn’t come.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default TradeShows