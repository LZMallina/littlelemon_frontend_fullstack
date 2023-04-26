import ItemsCard from './ItemsCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useCartContext } from "../../context/CartContext";

function Entrees() {
 const { entrees } = useCartContext();

  return (
    <Container className ="item-container">
      <Row md ={2} xs={1} lg ={4} className ="g-3">
        {entrees.map(item => (
          <Col key={item.id}><ItemsCard {...item} /></Col>
        ))}
      </Row>
    </Container>
  )
}

export default Entrees