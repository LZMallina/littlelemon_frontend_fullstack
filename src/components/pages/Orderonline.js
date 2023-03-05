import '../../App.css';
import '../order/Order.css';
import { Container, Button, Row, Col, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrash, faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons"
import useFetchdata from '../hooks/useFetchdata';
import {useEffect, useState, useReducer} from 'react'

import React from 'react'

function Orderonline() {
  return (
      <Container fluid style={{marginTop:'7vw'}}>
          <Navbar>
              <p>buttons for different categories.  Onclick, it will display the right list of things for order</p>
              <p>Shopping cart</p>
              <div># of items</div>
          </Navbar>
          <Container className="order-container">
              <Row>
                  <Col>display of single items for order</Col>
              </Row>
          </Container>
      </Container>
  )
}

export default Orderonline