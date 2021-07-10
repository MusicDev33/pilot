import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { IconContext } from 'react-icons';
import { FaBell } from 'react-icons/fa';

import './AttentionItemsBar.scss';

export default class AttentionItemsBar extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <Container fluid className="px-4 att-bar">
        <Row className="justify-content-end pt-3">
          <Col sm={3}>
            <IconContext.Provider value={{ className: "notif-icon" }}>
              <FaBell />
            </IconContext.Provider>
          </Col>
        </Row>
      </Container>
    );
  }
}
