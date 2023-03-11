import "../../App.css";
import "../order/Order.css";
import { Container, Button, Row, Col, Navbar } from "react-bootstrap";
import Appetizers from "../order/Appetizers";
import Entrees from "../order/Entrees";
import Beverages from "../order/Beverages";
import Dessert from "../order/Dessert";
import Dips from "../order/Dips";
import KidsMeal from "../order/KidsMeal";
import Sides from "../order/Sides";
import SoupAndSalad from "../order/SoupAndSalad";
import WrapsAndBurgers from "../order/WrapsAndBurgers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faTrash,
  faCirclePlus,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
import useFetchdata from "../hooks/useFetchdata";
import { useEffect, useState, useReducer } from "react";
import { ErrorMessage } from "formik";

const orderCategories = [
  "ENTREES",
  "APPETIZERS",
  "BEVERAGES",
  "DESSERT",
  "DIPS",
  "KIDS MEALS",
  "SIDES",
  "SOUP AND SALAD",
  "WRAPS AND BURGERS",
];
function Orderonline() {
    const [displayOrder, setDisplayOrder] = useState(<Entrees />);

  function handleOrder(i) {
    switch (i) {
      case "APPETIZERS":
            setDisplayOrder(<Appetizers />);
        break;
      case "BEVERAGES":
        setDisplayOrder(<Beverages />);
        break;
      case "DESSERT":
        setDisplayOrder(<Dessert />);
        break;
      case "DIPS":
        setDisplayOrder(<Dips />);
        break;
        case "ENTREES":
            setDisplayOrder(<Entrees />);
        break;
      case "KIDS MEALS":
        setDisplayOrder(<KidsMeal />);
        break;
      case "SIDES":
        setDisplayOrder(<Sides />);
        break;
      case "SOUP AND SALAD":
        setDisplayOrder(<SoupAndSalad />);
        break;
      case "WRAPS AND BURGERS":
        setDisplayOrder(<WrapsAndBurgers />);
        break;
      default:
        throw Error("something is wrong");
    }
  }

  return (
    <Container fluid style={{ marginTop: "7vw"}}>
      <Container>
        <Navbar className ="sticky">
          {orderCategories.map((i) => {
            return (
                <Button className="orderCat-BTN" key={i} onClick={() => handleOrder(i)}>
                {i}
              </Button>
            );
          })}
          <Button
            variant="outline-warning"
            className="rounded-circle shoppingCart"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
          </Button>
          <div className ="number">3</div>
        </Navbar>
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
