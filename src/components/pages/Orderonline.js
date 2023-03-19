import "../../App.css";
import "../order/Order.css";
import { Container, Button, Row, Col, Navbar, Badge, Modal } from "react-bootstrap";
import Appetizers from "../order/Appetizers";
import Entrees from "../order/Entrees";
import Beverages from "../order/Beverages";
import Dessert from "../order/Dessert";
import Dips from "../order/Dips";
import KidsMeal from "../order/KidsMeal";
import Sides from "../order/Sides";
import SoupAndSalad from "../order/SoupAndSalad";
import WrapsAndBurgers from "../order/WrapsAndBurgers";
import { useCartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faTrash,
  faCirclePlus,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Orderonline() {
  const { orderCategories, cartQuantity} = useCartContext();
  const [displayOrder, setDisplayOrder] = useState(<Entrees />);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleOrder(i) {
    switch (i) {
      case "Appetizers":
            setDisplayOrder(<Appetizers />);
        break;
      case "Beverages":
        setDisplayOrder(<Beverages />);
        break;
      case "Dessert":
        setDisplayOrder(<Dessert />);
        break;
      case "Dips":
        setDisplayOrder(<Dips />);
        break;
        case "Entrees":
            setDisplayOrder(<Entrees />);
        break;
      case "Kids Menu":
        setDisplayOrder(<KidsMeal />);
        break;
      case "Sides":
        setDisplayOrder(<Sides />);
        break;
      case "Soup and Salads":
        setDisplayOrder(<SoupAndSalad />);
        break;
      case "Wraps and Burgers":
        setDisplayOrder(<WrapsAndBurgers />);
        break;
      default:
        throw Error("something is wrong");
    }
  }

  return (
    <Container fluid style={{ marginTop: "7vw" }}>
      <Container>
        <Navbar className="sticky overflow-auto">
          {orderCategories.map((i) => {
            return (
              <Button
                className="orderCat-BTN"
                key={i}
                onClick={() => handleOrder(i)}
              >
                {i}
              </Button>
            );
          })}
          <Button onClick={handleShow}>
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ fontSize: "20px", paddingRight: "2px" }}
            />
            <Badge bg="warning" text="dark">
              {cartQuantity}
            </Badge>
          </Button>
        </Navbar>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Shopping Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>This is a modal body</h1>
          </Modal.Body>
        </Modal>
      </Container>
      <Container className="order-container">
        <Row>
          <Col>{displayOrder}</Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Orderonline;
