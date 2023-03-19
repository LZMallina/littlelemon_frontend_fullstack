import { Card, Button } from 'react-bootstrap';
import { useCartContext } from "../../context/CartContext";

function ItemsCard({ id, name, price, imgUrl }) {
  const { addOneToCart, getProductQuantity, removeOneFromCart, deleteFromCart } = useCartContext();
  //let quantity = getProductQuantity(id);
    return (
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={process.env.PUBLIC_URL + imgUrl}
          height="200px"
          style={{ objectFit: "cover" }}
        ></Card.Img>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-5">{name}</span>
            <span className="ms-2 text-muted">{`$ ${price}`}</span>
          </Card.Title>
          <div className="mt-auto">
            
              <Button className="w-100" onClick={() => addOneToCart(id)}>
                Add To Cart
              </Button>
          </div>
        </Card.Body>
      </Card>
    );
}

export default ItemsCard;