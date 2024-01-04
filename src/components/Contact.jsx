import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function Contact() {
  return (
    <Container style={{marginTop: '8%'}}>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Location</th>
          <th>phone number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>cyl</td>
          <td>+12354678</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>+8512347</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>thomason</td>
          
          <td>+521364</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Mark</td>
          <td>cyl</td>
          <td>+12354678</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>+8512347</td>
        </tr>
        <tr>
          <td>6</td>
          <td colSpan={2}>thomason</td>
          
          <td>+521364</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Mark</td>
          <td>cyl</td>
          <td>+12354678</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>+8512347</td>
        </tr>
        <tr>
          <td>9</td>
          <td colSpan={2}>thomason</td>
          <td>+521364</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>cyl</td>
          <td>+12354678</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>+8512347</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>thomason</td>
          
          <td>+521364</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Mark</td>
          <td>cyl</td>
          <td>+12354678</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>+8512347</td>
        </tr>
        <tr>
          <td>6</td>
          <td colSpan={2}>thomason</td>
          
          <td>+521364</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Mark</td>
          <td>cyl</td>
          <td>+12354678</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>+8512347</td>
        </tr>
        <tr>
          <td>9</td>
          <td colSpan={2}>thomason</td>
          <td>+521364</td>
        </tr>
      </tbody>
    </Table>
    </Container>
  );
}

export default Contact;