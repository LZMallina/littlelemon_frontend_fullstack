import soupAndSalad from "../../data/soupAndSalad.json";
import Items from "./Items";
import { Container, Row, Col } from "react-bootstrap";

function SoupAndSalad() {
  return (
    <Container className="item-container">
      <Row md={2} xs={1} lg={4} className="g-3">
        {soupAndSalad.map((item) => (
          <Col key={item.id}>
            <Items {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SoupAndSalad;
