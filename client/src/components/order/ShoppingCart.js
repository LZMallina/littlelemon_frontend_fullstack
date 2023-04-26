import { Container, Stack, Button } from 'react-bootstrap';
import { useCartContext } from "../../context/CartContext";
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
//inside model
function ShoppingCart() {
  const { cartProducts, list, resetShoppingCart } = useCartContext();
  const checkout = useNavigate();
   
  return (
    <Container>
      <Stack gap={4}>
        {cartProducts.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        <div className="fw-bold fs-5" style={{ textAlign: "right" }}>
          SUBTOTAL ${" "}
          {cartProducts.reduce((total, cartProduct) => {
            const item = list.find((i) => i.id === cartProduct.id);
            const subtotal = total + (item?.price || 0) * cartProduct.quantity;
            return Math.round(subtotal * 100) / 100;
          }, 0)}
        </div>
        <Button variant="success" onClick = {() => checkout("/Checkout")}>CHECKOUT</Button>
        <Button variant ='danger' onClick ={()=>resetShoppingCart()}>CLEAR SHOPPING CART</Button>
      </Stack>
    </Container>
  );
}

export default ShoppingCart;