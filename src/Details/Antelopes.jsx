import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Antelopes() {
    return (
        <Container style={{ marginTop: "100px" }}>
            <Row>
                <Col md={6}>
                    <img
                        src="/images/img-18/antelope-nature-flowers-meadow-52961.jpeg"
                        height="300px"
                        alt="..."
                        style={{ width: "100%", objectFit: "cover", borderRadius: "8px" }}
                    />
                </Col>
                <Col md={6}>
                    <h1 style={{ color: 'red' }}>Antelopes on Green Field</h1>
                    <p>These are three of India’s six species of antelopes. These species are similar to each other, for they are all antelopes. But all three are unique in their own ways. At two feet in height and twenty kilos, the four-horned antelope (Tetracerus quadricornis) is small and skittish; it is mostly solitary and lives in areas with tall grass, thickets, and open dry-deciduous forests. The four distinct horns of the male are perhaps its most unique feature. No other wild herbivore has four horns, which does make it a unicorn, I suppose.
                        Contrast it with the nilgai (Boselaphus tragocamelus), locally known as Rohith, which is the largest antelope in Asia. </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Antelopes