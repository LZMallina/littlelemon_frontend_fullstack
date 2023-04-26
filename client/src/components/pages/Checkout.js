import { Container, Row, Col, Stack, Button, Modal } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../forms/FormikControl";
import { useState } from "react";
import PaymentForm from "../order/PaymentForm";

function Checkout() {
  /*left: display order summary */
  const getCartProduct = JSON.parse(sessionStorage.getItem("shoppingData"));
  const { list } = useCartContext();
  const subTotal = getCartProduct.reduce((total, cartProduct) => {
    const item = list.find((i) => i.id === cartProduct.id);
    const subtotal = total + (item?.price || 0) * cartProduct.quantity;
    return Math.round(subtotal * 100) / 100;
  }, 0);

  const Total = Math.round((subTotal + subTotal * 0.06) * 100) / 100;

  /*Right side: display form */
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  /*Payment: display modal*/
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleMessage = () => {
    setMessage(
      <p
        style={{ padding: "20px", textAlign: "justify", background: "yellow" }}
      >
        Thank you {name}. See you in 20 minutes. Check your email for
        confirmation.
      </p>
    );
  };
  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "too Short")
      .max(50, "too long")
      .required("required"),
    email: Yup.string().email("invalid email").required("required"),
    phone: Yup.string()
      .min(10, "invalid number")
      .max(14, "invalid number")
      .required("required"),
  });
  const onSubmit = (values, onSubmitProps) => {
    console.log("Form values", values);
    setName(values.name);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    console.log("form submitted");
  };
  return (
    <Container fluid style={{ marginTop: "10vw", padding: "20px" }}>
      <p style={{ color: "green" }}>Checkout</p>
      <Row>
        <Col>
          <Container
            style={{
              margin: "10px",
              border: "2px solid black",
              width: "600px",
              padding: "20px",
            }}
          >
            <h4>Your Order:</h4>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                fontSize: "20px",
              }}
            >
              <span style={{ width: "200px", textAlign: "left" }}>Item</span>
              <span style={{ width: "100px", textAlign: "right" }}>Price</span>
              <span style={{ width: "100px", textAlign: "right" }}>
                Quantity
              </span>
              <span style={{ width: "100px", textAlign: "right" }}>Cost</span>
            </div>
            <hr />
            {getCartProduct.map((product) => {
              const item = list.find((i) => i.id === product.id);
              return (
                <Stack
                  key={product.id}
                  direction="horizontal"
                  className="d-flex justify-content-evenly"
                  gap={5}
                >
                  <div style={{ width: "200px", textAlign: "left" }}>
                    {item.name}
                  </div>
                  <div style={{ width: "100px", textAlign: "right" }}>
                    ${item.price}
                  </div>
                  <div style={{ width: "100px", textAlign: "right" }}>
                    {product.quantity}
                  </div>
                  <div style={{ width: "100px", textAlign: "right" }}>
                    $ {item.price * product.quantity}
                  </div>
                </Stack>
              );
            })}
            <hr />
            <div className="fw-bold fs-5" style={{ textAlign: "right" }}>
              SUBTOTAL = ${subTotal}
            </div>
            <div className="fw-bold fs-5" style={{ textAlign: "right" }}>
              TAX = ${Math.round(subTotal * 0.06 * 100) / 100}
            </div>
            <div className="fw-bold fs-5" style={{ textAlign: "right" }}>
              TOTAL = ${Total}
            </div>
          </Container>
        </Col>
        <Col>
          <Container
            style={{
              fontSize: "1.25rem",
              fontFamily: "var(--paragraph-font-family)",
              background: "lightblue",
              padding: "20px",
            }}
          >
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              validateOnChange={true}
              validateOnBlur={true}
            >
              {(formik) => {
                return (
                  <Form>
                    <Container
                      style={{
                        width: "450px",
                        textAlign: "right",
                        padding: "20px",
                      }}
                    >
                      <FormikControl
                        control="input"
                        type="text"
                        label="Name"
                        name="name"
                        style={{ marginLeft: "10px" }}
                      />

                      <FormikControl
                        control="input"
                        type="email"
                        label="Email"
                        name="email"
                        style={{ marginLeft: "10px" }}
                      />
                      <FormikControl
                        control="input"
                        type="tel"
                        label="Phone number"
                        name="phone"
                        style={{ marginLeft: "10px" }}
                      />
                      <Button
                        type="submit"
                        disabled={formik.isSubmitting}
                        variant="warning"
                        className="w-100"
                      >
                        Continue checkout as guest
                      </Button>
                      <br />
                      <br />
                      <h3>How would you like to pay?</h3>
                      <br />
                      <Stack
                        direction="horizontal"
                        className="d-flex justify-content-evenly"
                        gap={2}
                      >
                        <Button
                          disabled={!name}
                          onClick={() => handleMessage()}
                        >
                          At pickup
                        </Button>
                        <Button disabled={!name} onClick={handleShow}>
                          Online
                        </Button>
                      </Stack>
                      <br />
                      {message}
                    </Container>
                  </Form>
                );
              }}
            </Formik>
            <Modal
              show={show}
              onHide={handleClose}
              dialogClassName="adjustModal"
            >
              <Modal.Header closeButton>
                <Modal.Title>Online Payment</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <PaymentForm total={Total} />
              </Modal.Body>
            </Modal>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;
