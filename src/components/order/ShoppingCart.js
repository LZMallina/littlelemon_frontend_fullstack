import { Container, Stack, Button } from 'react-bootstrap';
import { useCartContext } from "../../context/CartContext";
import { useState } from 'react';
import CartItem from './CartItem';
//inside model
function ShoppingCart() {
  const { cartProducts, list } = useCartContext();
  const [message, setMessage] = useState('')
  const handleCheckout = (e) => {
    e.preventDefault()
    
    let checkoutChoice = e.target.innerText;

    if (checkoutChoice === 'Pay at pick up') {
      setMessage('Your order will be ready in 15 minutes.')
    }
    if (checkoutChoice === 'Pay online') {
      console.log('stripe')
    }
  }
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
        <h4 style={{ textAlign: "center" }}>Ready to order?</h4>
        <Stack
          direction="horizontal"
          className="d-flex justify-content-evenly"
          gap={5}
        >
          <a href="https://www.doordash.com">
            <Button variant="success">Delivery</Button>
          </a>
          <Button variant="success" onClick={(e) => handleCheckout(e)}>
            Pay at pick up
          </Button>
          <Button variant="success" onClick={(e) => handleCheckout(e)}>
            Pay online
          </Button>
        </Stack>
        <p style={{ textAlign: "center", fontWeight: "bold", color: "blue" }}>
          {message}
        </p>
      </Stack>
    </Container>
  );
}

export default ShoppingCart;