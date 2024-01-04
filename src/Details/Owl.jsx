import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Owl() {
  return (
    <Container style={{marginTop:"100px"}}>
    <Row>
        <Col md={6}>
            <img
                src="/images/img-17/owl-bird-eyes-eagle-owl-86596.jpeg"
                height="300px"
                alt="..."
                style={{width:"100%",objectFit:"cover",borderRadius:"8px"}}
            />
        </Col>
        <Col md={6}>
            <h1 style={{color:'red'}}>Brown and Black Owl Staring</h1>
            <p>Explore the various interpretations of owl staring, from its in different cultures to its role in spirituality and personal reflection. Uncover the and beliefs surrounding owl staring, including its connection to warnings and death omens. Understand the reasons behind owl staring and its potential as a form of recognition.</p>
        </Col>
    </Row>
</Container>
  )
}

export default Owl