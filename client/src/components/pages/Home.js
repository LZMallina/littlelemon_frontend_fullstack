import "../../App.css";
import { Link } from "react-router-dom";
import { Container, Row, Col} from "react-bootstrap";
import personcarryingfood from "../../assets/personcarryingfood.jpg";

/**Data arrays**/

const specials = [
  {
    title: "BRACHROCETT",
    price: "$6.99",
    getImageSrc: () => require("../../assets/brachrocett.jpg"),
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    message: "Available for delivery 🚴‍♂️",
  },
  {
    title: "GREEK SALAD",
    price: "$12.99",
    getImageSrc: () => require("../../assets/greeksalad2.png"),
    description:
      "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    message: "Available for delivery 🚴‍♂️",
  },
  {
    title: "LEMON CAKE",
    price: "$5.99",
    getImageSrc: () => require("../../assets/lemon_dessert.jpg"),
    description:
      "This comes straight from grandma's recipe book, every last ingredient that has been sourced and is as authentic as can be imagined.",
    message: "Available for delivery 🚴‍♂️",
  },
];

const testimonials = [
  {
    getImageSrc: () => require("../../assets/user1.png"),
    stars: "⭐⭐⭐⭐⭐",
    comments: "Mario and Adrian are so nice.  The food is always delicious.",
  },
  {
    getImageSrc: () => require("../../assets/user2.png"),
    stars: "⭐⭐⭐⭐",
    comments: "This is a family style restaurant where you feel at home.",
  },
  {
    getImageSrc: () => require("../../assets/user3.png"),
    stars: "⭐⭐⭐⭐",
    comments:
      "Wonderful customer service and healthy food.  Very accommodating for a busy person like me.",
  },
  {
    getImageSrc: () => require("../../assets/user4.png"),
    stars: "⭐⭐⭐⭐⭐",
    comments:
      "My kids are loud and messy.  The staffs ensure we feel at home.  My kids love the Brachrocett.",
  },
];
function Home() {
  return (
    <main>
      <Container fluid className="hero">
        <Row>
          <Col className="hero-description">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Link to="/reservation">
              <button>Reserve a table</button>
            </Link>
          </Col>
          <Col>
            <section className="hero-image-container">
              <img
                src={personcarryingfood}
                alt="person carrying food"
                className="hero-image"
              ></img>
            </section>
          </Col>
        </Row>
      </Container>
      <Container fluid className="specials">
        <Row className="specials-title">
          <Col>
            <h2>Weekly Specials</h2>
          </Col>
          <Col>
            <Link to="/menu">
              <button>Menu</button>
            </Link>
          </Col>
        </Row>
        <Container ClassName="specials-container">
          <Row>
            {specials.map((i) => {
              return (
                <Col className="special-display" key={i.title}>
                  <div>
                    <h3>{i.title}</h3>
                    <h3 style={{ color: "var(--orange)" }}>{i.price}</h3>
                  </div>
                  <img src={i.getImageSrc()} alt={i.title} />
                  <p>{i.description}</p>
                  <h4>{i.message}</h4>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>
      <Container fluid className="testimonial">
        <Row>
          {testimonials.map((i) => {
            return (
              <Col key={i.comments} className="testimonial-display">
                <img
                  src={i.getImageSrc()}
                  alt="user pictures"
                  className="user-picture"
                />
                <p>{i.stars}</p>
                <p>{i.comments}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </main>
  );
}

export default Home;
