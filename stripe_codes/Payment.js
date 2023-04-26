import {Container, Button} from 'react-bootstrap'

function Payment({ total }) {
  const totalIncents = parseInt(total * 100);
  console.log('totalIncents', totalIncents)
  const handlePay = () => {
    fetch("http://localhost:4000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Send along all the information about the items
      body: JSON.stringify({
        items: [
          {
            id: 1,
            quantity: 1,
          },
          {
            id: 2,
            quantity: 1,
          },
          
        ],
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        // If there is an error then make sure we catch that
        return res.json().then((e) => Promise.reject(e));
      })
      .then(({ url }) => {
        // On success redirect the customer to the returned URL
        window.location = url;
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <Container>
      <Button onClick ={()=>handlePay()}>{total}</Button>
    </Container>
  )
}

export default Payment


