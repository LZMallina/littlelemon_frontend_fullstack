import '../../App.css';
import '../forms/Booking.css';
import {Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function ConfirmationPage() {
  const getData = JSON.parse(sessionStorage.getItem('bookingData'));
  //console.log('getData',getData)
    
  return (
    <Container fluid style={{ marginTop: "7vw", background: "var(--green)" }}>
      <Link to="/">
        <FontAwesomeIcon icon={faXmark} className="closeOut" />
      </Link>
      <h1
        style={{
          textAlign: "center",
          padding: "20px",
          color: "var(--yellow)",
          fontFamily: "var(--heading-font-family",
          fontSize: "3vw",
        }}
      >
        We look forward to seeing you!
      </h1>
      <Container className="information-container">
        <h3>Contact information:</h3>
        <Row>
          <Col>
            <p>
              Name:{" "}
              <u>
                {getData.firstName} {getData.lastName}
              </u>
            </p>
          </Col>
          <Col>
            <p>
              Email: <u>{getData.email}</u>
            </p>
          </Col>
          <Col>
            <p>
              Phone: <u>{getData.phone ? getData.phone : "not provided"}</u>
            </p>
          </Col>
        </Row>
        <hr />
        <h3>Booking details:</h3>
        <Row>
          <Col>
            <p>
              Date: <u>{getData.date}</u>
              <br />
              Time: <u>{getData.time}</u>
            </p>
            <p>
              Guest: <u>{getData.guestNum}</u>
              <br />
              Occasion: <u>{getData.type}</u>
            </p>
          </Col>
          <Col>
            <p>
              Special instructions: <u>{getData.comment}</u>
            </p>
          </Col>
          <Col>
            <p>
              Would you like an email reminder? <u>{getData.reminder}</u>
            </p>
          </Col>
        </Row>
        <hr />
        <h4 style={{ color: "red" }}>
          * If you can not make it to your reservation, please contact us 30
          minutes ahead to cancel.
        </h4>
        <Row>
          <Col>
            Little Lemon <br />
            25 North Clark St <br />
            Chicago, IL 606602
          </Col>
          <Col>
            <p>
              littlelemon@meta.com
              <br />
              312-445-9658
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="map-container"></Container>
    </Container>
  );
}

export default ConfirmationPage
