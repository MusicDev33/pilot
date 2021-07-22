import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IconContext } from 'react-icons';
import { FaUserAlt } from 'react-icons/fa';

import './Home.scss';

export default class Home extends Component {
  

  constructor() {
    super();

    this.state = {
      
    }
  }

  componentDidMount() {
    
  }

  render() {

    return (
      <Container fluid className="pt-3">
        <Row>
          <Col className="pl-4">
            <h5 className="login-text">
              <IconContext.Provider value={{ className: "user-icon" }}>
                <FaUserAlt />
              </IconContext.Provider> smccowan
            </h5>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <h1>Home</h1>
          </Col>
        </Row>
      </Container>
    )
  }
}
