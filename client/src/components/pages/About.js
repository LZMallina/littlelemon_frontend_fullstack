import "../../App.css";
import { Container, Row, Col } from "react-bootstrap";
import OwnerOne from "../../assets/MarioandAdrianA.jpg";
import OwnerTwo from "../../assets/MarioandAdrianb.jpg";
function About() {
  return (
    <Container fluid className="about">
      <Container>
        <Row>
          <Col>
            <h1>Our story</h1>
            <p>
              When Mario's family immigrated from Iran 20 years ago, they had
              nothing but the clothes on their backs. However, Mario and his
              siblings never lacked good food because of his grandmother.
              Mario's grandma was a wonderful chef. When she passed away, she
              left a book full of Mediterranean recipes. Along with his friend,
              Chef Adrian, Mario started the Little Lemon restaurant in Chicago
              to bring his grandma's home cooking to this neighborhood. Mario
              wanted to share his grandma's warm and loving memories with all
              his customers through food.
            </p>
          </Col>
          <Col className="text-center">
            <div>
              <img src={OwnerOne} alt="owner" className="owner-one" />
            </div>
            <div>
              <img src={OwnerTwo} alt="owner" className="owner-two" />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
