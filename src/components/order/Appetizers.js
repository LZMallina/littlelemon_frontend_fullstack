import appetizers from "../../data/appetizers.json";
import Items from "./Items";
import { Container, Row, Col } from "react-bootstrap";

function Appetizers() {
  return (
    <Container className="item-container">
      <Row md={2} xs={1} lg={4} className="g-3">
        {appetizers.map((item) => (
          <Col key={item.id}>
            <Items {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Appetizers;