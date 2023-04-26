import { useCartContext } from "../../context/CartContext";
import ItemsCard from "./ItemsCard";
import { Container, Row, Col } from "react-bootstrap";

function WrapsAndBurgers() {
  const { wrapsAndburgers } = useCartContext();
  return (
    <Container className="item-container">
      <Row md={2} xs={1} lg={4} className="g-3">
        {wrapsAndburgers.map((item) => (
          <Col key={item.id}>
            <ItemsCard {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default WrapsAndBurgers;
