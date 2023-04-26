import ItemsCard from "./ItemsCard";
import { useCartContext } from '../../context/CartContext';
import { Container, Row, Col } from "react-bootstrap";

function Appetizers() {

  const {appetizers} = useCartContext();
  return (
    <Container className="item-container">
      <Row md={2} xs={1} lg={4} className="g-3">
        {appetizers.map((item) => (
          <Col key={item.id}>
            <ItemsCard {...item} />
          </Col> 
        ))}
        
      </Row>
    </Container>
  );
}

export default Appetizers;