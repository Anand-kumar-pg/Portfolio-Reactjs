
import React from 'react';
import './gallery.css';
import './style.css';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';

function Works() {
    return (
        <Container style={{ marginTop: '100px' }}>
            <h2 style={{ marginBottom: "50px" }}>Works</h2>
            <Row md={4}>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/images/img-19/jump.jpg" />
                        <Card.Body>
                            <Card.Title className='text-center ' style={{ color: 'silver' }}>Jump High</Card.Title>
                            <ListGroup.Item className='text-center ' style={{ color: 'silver' }}>CLIENT:Bella Luna</ListGroup.Item>
                            <ListGroup.Item className='text-center ' style={{ color: 'silver' }}>DATE:April 2018</ListGroup.Item>
                        </Card.Body>

                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/images/img-20/little-gentlemen.jpg" />
                        <Card.Body>
                            <Card.Title className='text-center' style={{ color: 'silver' }}>I am A Gentleman</Card.Title>
                            <ListGroup.Item className='text-center ' style={{ color: 'silver' }}>CLIENT:Kids Fashion</ListGroup.Item>
                            <ListGroup.Item className='text-center ' style={{ color: 'silver' }}>DATE:April 2018</ListGroup.Item>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/images/img-21/thinking.jpg" />
                        <Card.Body>
                            <Card.Title className='text-center' style={{ color: 'silver' }}>Thinking Seriously</Card.Title>
                            <ListGroup.Item className='text-center ' style={{ color: 'silver' }}>CLIENT:Kids Fashion</ListGroup.Item>
                            <ListGroup.Item className='text-center ' style={{ color: 'silver' }}>DATE:April 2018</ListGroup.Item>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/images/img-22/young-girl.jpg" />
                        <Card.Body>
                            <Card.Title className='text-center' style={{ color: 'silver' }}>People Series</Card.Title>
                            <ListGroup.Item className='text-center ' style={{ color: 'silver' }}>CLIENT:Bella Luna</ListGroup.Item>
                            <ListGroup.Item className='text-center ' style={{ color: 'silver' }}>DATE:April 2018</ListGroup.Item>
                        </Card.Body>
                    </Card>
                </Col>
                <Button variant="primary">Find More</Button>
            </Row>

        </Container>
    );
}

export default Works;

