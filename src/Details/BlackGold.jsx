import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function BlackGold() {
  return (
    <Container style={{marginTop:"100px"}}>
    <Row>
        <Col md={6}>
            <img
                src="/images/img-1/work-1.jpg.webp"
                height="300px"
                alt="..."
                style={{width:"100%",objectFit:"cover",borderRadius:"8px"}}
            />
        </Col>
        <Col md={6}>
            <h1 style={{color:'red'}}>PORTRAIT</h1>
            <h3 style={{color:'darkgrey'}}>Black & Gold Paint Face</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quasi suscipit nisi iusto, enim voluptatibus quod quisquam odio unde ea ad, ducimus nemo delectus magnam eum libero corrupti optio a!</p>
        </Col>
    </Row>
</Container>
  )
}

export default BlackGold