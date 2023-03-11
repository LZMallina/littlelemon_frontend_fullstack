import entrees from '../../data/entrees.json';
import EntreeItem from './EntreeItem';
import { Container, Row, Col } from 'react-bootstrap';

function Entrees() {
  return (
    <Container className ="mb-3 mt-3">
      <Row md ={2} xs={1} lg ={4} className ="g-3">
        {entrees.map(item => (
          <Col key={item.id}><EntreeItem {...item} /></Col>
        ))}
      </Row>

    </Container>
  )
}

export default Entrees