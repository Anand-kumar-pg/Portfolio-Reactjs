import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function SecondDetail() {
  return (
  <Container style={{marginTop: '8%'}}>
    <Row>
        <Col md={3}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/img-2/work-2.jpg.webp" />
     
    </Card>
        </Col>
        <Col md={9}>
        <Card.Body>
        <Card.Title className='text-danger'>NATURE</Card.Title>
        <Card.Text >
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorum nostrum et. Doloribus, tempora ea minus cumque cum fuga quasi nam provident deserunt ex, architecto neque illum sapiente quo quos.
          Commodi voluptatibus dicta, ad minus suscipit cupiditate laboriosam pariatur iusto facilis nobis tempora recusandae. Dolore dolores corporis debitis recusandae nesciunt adipisci quas ipsum repellendus repellat et! Eveniet expedita a delectus.
          Dignissimos itaque ab nisi facere sunt nulla a asperiores necessitatibus? Dolorum vero laudantium facilis et reiciendis explicabo sequi ex nesciunt, nam accusamus voluptate ducimus velit, modi quo rem fuga sapiente?
          Dolorem aut deleniti minima, sit unde debitis cupiditate cumque ut natus sed sunt maiores totam voluptatibus repellat minus ex nulla eum numquam, quo repudiandae cum! Exercitationem quibusdam minima architecto odit.
          Accusamus harum pariatur quis accusantium quia laboriosam sunt illum nostrum perspiciatis nam id dolorum doloremque praesentium iure corrupti ex commodi tempora asperiores, aperiam nihil inventore numquam. Deserunt reprehenderit beatae sunt.
        </Card.Text>
      </Card.Body>
        </Col>
    </Row>
  </Container>
  );
}

export default SecondDetail;