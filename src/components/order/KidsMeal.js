import kidsMeal from "../../data/kidsMeal.json";
import Items from "./Items";
import { Container, Row, Col } from "react-bootstrap";

function KidsMeal() {
  return (
    <Container className="item-container">
      <Row md={2} xs={1} lg={4} className="g-3">
        {kidsMeal.map((item) => (
          <Col key={item.id}>
            <Items {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default KidsMeal;
