import { Card, Button } from 'react-bootstrap';

function Items({id, name, price, imgUrl}) {
    return (
      <Card>
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
                <Button>Add To Cart</Button>
        </Card.Body>
      </Card>
    );
}

export default Items;