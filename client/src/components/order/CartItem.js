import { Stack} from 'react-bootstrap';
import { useCartContext } from "../../context/CartContext";

//inside modal
function CartItem({id}) {

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
        <img src={process.env.PUBLIC_URL + item.imgUrl} alt="food-img" style={{width:'80px'}} />
        <div style={{ width: "350px", textAlign:'left'}}>{item.name}</div>
        <Stack
          direction="horizontal"
          className="d-flex justify-content-evenly"
          gap={5}
        >
          <div style={{ width: "70px", textAlign:'right'}}> {` $${item.price}`}</div>

          <div style={{ width: "80px", textAlign:'right'}}>
            <button onClick={() => removeOneFromCart(id)}>-</button>
            <span style={{ background: "lightblue", padding: "7px" }}>
              {" "}
              {productQuantity}{" "}
            </span>
            <button onClick={() => addOneToCart(id)}>+</button>
          </div>
          <div style={{ width: "100px", textAlign: "right" }}>
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
