import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './blog.css';
import { Link } from 'react-router-dom';


function Blogs() {
  return (
    <>
      <Container style={{ marginTop: '8%' }}>
        <h2 className='text-center'>Blogs</h2>
        <Row>
          <Col md={3} className='py-5 px-5'>
            <Card style={{ width: '18rem' }}>
              <Card.Img className='custom-card-left img' variant="top" src="/images/img-1/work-1.jpg.webp" />
              <Card.Body>
                <Card.Title>PORTRAIT</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button as={Link} to = "/detail/1" variant="primary">more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='py-5 px-5'>
            <Card style={{ width: '18rem' }}>
              <Card.Img className='custom-card-left img' variant="top" src="/images/img-2/work-2.jpg.webp" />
              <Card.Body>
                <Card.Title>NATURE</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='py-5 px-5'>
            <Card style={{ width: '18rem' }}>
              <Card.Img className='custom-card-left img' variant="top" src="/images/img-1/work-1.jpg.webp" />
              <Card.Body>
                <Card.Title>PORTRAIT</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='py-5 px-5'>
            <Card style={{ width: '18rem' }}>
              <Card.Img className='custom-card-left img' variant="top" src="/images/img-2/work-2.jpg.webp" />
              <Card.Body>
                <Card.Title>NATURE</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">more</Button>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={3} className='py-5 px-5'>
            <Card style={{ width: '18rem' }}>
              <Card.Img className='custom-card-left img' variant="top" src="/images/img-1/work-1.jpg.webp" />
              <Card.Body>
                <Card.Title>PORTRAIT</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='py-5 px-5'>
            <Card style={{ width: '18rem' }}>
              <Card.Img className='custom-card-left img' variant="top" src="/images/img-2/work-2.jpg.webp" />
              <Card.Body>
                <Card.Title>NATURE</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">more</Button>
              </Card.Body>
            </Card>
          </Col>
          
          
        </Row>
      </Container>
    </>
  )
}

export default Blogs