//create a credit card processing form with react-credit card
//Post charges to a localhost server
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../forms/FormikControl";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Container, Button } from "react-bootstrap";
import { useState } from "react";
import "./Order.css";
function PaymentForm({ total }) {
  //Info we need from customers
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
    const [focus, setFocus] = useState("");
    const [Total, setTotal] = useState(total)

  //form
  const initialValues = {
    name: "",
    number: "",
    expiry: "",
    cvc: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "too Short")
      .max(50, "too long"),
    number: Yup.string().min(16, "too short"),
    expiry: Yup.string().min(4, "invalid number"),
    cvc: Yup.string().min(3, "invalid number"),
  });
    const onSubmit = (values, onSubmitProps) => {
        console.log('creditcard data:', values)
        setTotal(0)
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    console.log("form submitted");
  };
  return (
    <Container style={{ textAlign: "center" }}>
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {(formik) => {
          return (
            <Form className="creditcardForm">
              <FormikControl
                control="input"
                type="tel"
                label=""
                name="number"
                placeholder="Card number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
                className="creditcardInput"
              />
              <FormikControl
                control="input"
                type="text"
                label=""
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
                className="creditcardInput"
              />
              <div className="flex-creditbox">
                <FormikControl
                  control="input"
                  type="tel"
                  label=""
                  name="expiry"
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                  style={{
                    width: "145px",
                    padding: "5px",
                    borderRadius: "5px",
                    margin: "5px",
                  }}
                />
                <FormikControl
                  control="input"
                  type="tel"
                  label=""
                  name="cvc"
                  placeholder="CVC"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                  style={{
                    width: "145px",
                    padding: "5px",
                    borderRadius: "5px",
                    margin: "5px",
                  }}
                />
              </div>

              <Button
                type="submit"
                disabled={formik.isSubmitting}
                style={{ width: "300px" }}
              >
                {Total === 0?"Thank you for your purchase":`Pay ${Total}`}
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
}

export default PaymentForm;
