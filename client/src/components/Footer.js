import '../App.css'
import { Container, Row, Col } from 'react-bootstrap';
import footerlogo from '../assets/footerlogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    icon: faFacebook,
    url: "https://www.facebook.com",
  },
  {
    icon: faTwitter,
    url: "https://www.twitter.com",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com",
  },
  {
    icon: faYoutube,
    url: "https://youtube.com",
  },
];
function Footer() {

//display social icons
     const icons = socials.map((i) => {
    return <a href={i.url} key={i}>
      <FontAwesomeIcon icon={i.icon} className="social-icon"/>
      </a>
  })
/***********functions above **************/
    return (
      <footer>
        <Container fluid>
          <Row>
            <Col className ="text-center">
              <img
                src={footerlogo}
                alt="footer logo"
                className="footer-logo"
              ></img>
            </Col>
            <Col>
              <p>
                25 North Clark St <br />
                Chicago, IL 606602
              </p>
              <p>312-445-9658</p>
              <p>email: littlelemon@meta.com</p>
            </Col>
            <Col>
              <h4>Business Hours</h4>
              <table>
                <tr>
                  <td>Mon - Fri:</td>
                  <td>11:00 AM - 9:00 PM</td>
                </tr>
                <tr>
                  <td>Sat:</td>
                  <td>11:00 AM - 11:00 PM</td>
                </tr>
                <tr>
                  <td>Sun:</td>
                  <td>Closed</td>
                </tr>
              </table>
            </Col>
            <Col>
              {icons}
              <p>2023 &copy; WNT</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
};

export default Footer;