// import React from 'react'
// import './gallery.css'
// import './style.css';
// import {Col, Container, Row } from 'react-bootstrap';


// function Works() {
//   return (
// <Container style={{marginTop: '8%'}}>
//       <h2 className='text-center'>Works</h2>
//       <Row className='py-5'>            
//         <Col md={2}>
//         <img src="/images/img-2/work-2.jpg.webp" width="200px" height="302px"/>
//         </Col>
//         <Col md={2}>
//         <img src="/images/img-1/work-1.jpg.webp" width="200px" height="302px"/>
//         </Col>
//         <Col md={2}>
//         <img src="images/img-4/work-7.jpg.webp" width="200px" height="302px"/>
//         </Col>
//         <Col md={2}>
//         <img src="images/img-10/pexels-photo-8467419.webp" width="200px" height="302px"/>
//         </Col>
//         <Col md={2}>
//         <img src="images/img-3/work-6.jpg.webp" width="200px" height="302px"/>
//         </Col>
//         <Col md={2}>
//         <img src="images/img-8/pexels-photo-1526410.jpeg" width="200px" height="302px"/>
//         </Col>
//         <Col className='py-3' md={2}>
//         <img src="images/img-7/pexels-photo-1020016.jpeg" width="200px" height="302px"/>
//         </Col>
//         <Col className='py-3' md={2}>
//         <img src="images/img-11/amazing-animal-beautiful-beautifull.jpg" width="200px" height="302px"/>
//         </Col>
//         <Col className='py-3' md={2}>
//         <img src="images/img-13/pexels-photo-4553618.jpeg" width="200px" height="302px"/>
//         </Col>
//         <Col className='py-3' md={2}>
//         <img src="images/img-14/pexels-photo-1234035.jpeg" width="200px" height="302px"/>
//         </Col>
//         <Col className='py-3' md={2}>
//         <img src="images/img-6/work-9.jpg.webp" width="200px" height="302px"/>
//         </Col>
//         <Col className='py-3' md={2}>
//         <img src="/images/img-2/work-2.jpg.webp" width="200px" height="302px"/>
//         </Col>
//       </Row>
//     </Container>
//   )
// }

// export default Works;




import React from 'react';
import './gallery.css';
import './style.css';
import { Col, Container, Row } from 'react-bootstrap';

function Works() {
  return (
    <Container style={{marginTop: '8%'}}>
      <h2 className='text-center'>Works</h2>
      <Row className='py-5'>
      <Col md={2}>
  <img src="/images/img-2/work-2.jpg.webp" alt="Work 2" width="200px" height="302px"/>
</Col>
<Col md={2}>
  <img src="/images/img-1/work-1.jpg.webp" alt="Work 1" width="200px" height="302px"/>
</Col>
<Col md={2}>
  <img src="images/img-4/work-7.jpg.webp" alt="Work 7" width="200px" height="302px"/>
</Col>
<Col md={2}>
  <img src="images/img-10/pexels-photo-8467419.webp" alt="Work 10" width="200px" height="302px"/>
</Col>
<Col md={2}>
  <img src="images/img-3/work-6.jpg.webp" alt="Work 6" width="200px" height="302px"/>
</Col>
<Col md={2}>
  <img src="images/img-8/pexels-photo-1526410.jpeg" alt="Work 8" width="200px" height="302px"/>
</Col>
        {/* Additional images would continue below with proper `alt` text */}
      </Row>
    </Container>
  );
}

export default Works;