import wrapsAndburgers from "../../data/wrapsAndburgers.json";
import Items from "./Items";
import { Container, Row, Col } from "react-bootstrap";

function WrapsAndBurgers() {
  return (
    <Container className="item-container">
      <Row md={2} xs={1} lg={4} className="g-3">
        {wrapsAndburgers.map((item) => (
          <Col key={item.id}>
            <Items {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default WrapsAndBurgers;
