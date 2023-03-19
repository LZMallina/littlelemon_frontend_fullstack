import { Stack} from 'react-bootstrap';
import { useCartContext } from "../../context/CartContext";

function CartItem({ id, quantity }) {

    const { addOneToCart, getProductQuantity, removeOneFromCart, deleteFromCart, list } =
        useCartContext();
    let productQuantity = getProductQuantity(id);
    const item = list.find(i => i.id === id)
    
    if (item === null) return null;
    
    return (
      <Stack
        direction="horizontal"
        gap={2}
        className="d-flex justify-content-between"
      >
        {item.name}
        <Stack
          direction="horizontal"
          className="d-flex justify-content-evenly"
          gap={5}
        >
          <div> {` $${item.price}`}</div>

          <div>
            <button onClick={() => removeOneFromCart(id)}>-</button>
            <span style={{ background: "lightblue", padding: "7px" }}>
              {" "}
              {productQuantity}{" "}
            </span>
            <button onClick={() => addOneToCart(id)}>+</button>
          </div>
          <div>
            <span style={{ marginRight: "10px" }}>
              ${item.price * productQuantity}
            </span>
            <button onClick={() => deleteFromCart(id)}>X</button>
          </div>
        </Stack>
      </Stack>
    );
}

export default CartItem;
