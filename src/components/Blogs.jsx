import React from 'react'
import {Col, Container, Image, Row } from 'react-bootstrap'
import './blog.css';
import { Link } from 'react-router-dom';


function Blogs() {
    return (
        <>
            <Container style={{ marginTop: '100px' }}>
                <h2 style={{ marginBottom: "50px" }}>Blogs</h2>
                <Row style={{ display: 'flex' }}>
                    <Col xs={4} md={2}>
                        <Image src="/images/img-23/creative.webp" thumbnail />
                        <Link className='text-center' style={{ display: 'flex', justifyContent: 'center' }} as={Link} to="/inspiriation/1">INSPIRATION</Link >
                    </Col>
                    <Col xs={4} md={2}>
                        <Image src="/images/img-24/new.webp" thumbnail />
                        <Link className='text-center' style={{ display: 'flex', justifyContent: 'center' }} as={Link} to="/reviews/1">REVIEWS</Link >
                    </Col>
                    <Col xs={4} md={2}>
                        <Image src="/images/img-25/c1-768x432.webp" thumbnail />
                        <Link className='text-center' style={{ display: 'flex', justifyContent: 'center' }} as={Link} to="/tradeshow/1">TRADESHOWS</Link >
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Blogs