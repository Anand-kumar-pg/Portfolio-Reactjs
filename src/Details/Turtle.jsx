import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Turtle() {
  return (
    <Container style={{marginTop:"100px"}}>
    <Row>
        <Col md={6}>
            <img
                src="/images/img-16/pexels-photo-847393.jpeg"
                height="300px"
                alt="..."
                style={{width:"100%",objectFit:"cover",borderRadius:"8px"}}
            />
        </Col>
        <Col md={6}>
            <h1 style={{color:'red'}}>Turtle Swimming</h1>
            <p>Although much smaller than ours, a turtle’s lungs are incredibly powerful, allowing them to stay underwater for long periods. Turtles also breathe through their shells and scutes. They have red blood cells that absorb oxygen in the water while they swim, albeit in very small quantities.</p>
        </Col>
    </Row>
</Container>
  )
}

export default Turtle