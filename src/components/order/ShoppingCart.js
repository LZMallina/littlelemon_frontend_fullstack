import { Container, Row, Col, Button, Stack } from 'react-bootstrap';
import { useCartContext } from "../../context/CartContext";
import CartItem from './CartItem';

function ShoppingCart() {
  const {cartProducts, list} = useCartContext();
  return (
    <Container>
      <Stack gap ={4}>
        {cartProducts.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
        <div className="fw-bold fs-5" style={{textAlign:'right'}}>
          SUBTOTAL $ {cartProducts.reduce((total, cartProduct) => {
            const item = list.find((i) => i.id === cartProduct.id)
            return total + (item?.price || 0) * cartProduct.quantity
          },0)}
        </div>
      </Stack>
    </Container>
  )
}

export default ShoppingCart;