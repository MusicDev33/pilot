import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { IconContext } from 'react-icons';
import { FaHome, FaServer, FaDatabase, FaShieldAlt, FaFileAlt } from 'react-icons/fa';

import './PNavbar.scss';

export default class PNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: this.props.active
    };
  }

  activeLink(link) {
    console.log(link)
    console.log(this.props.active)
    if (link === this.props.active) {
      return true;
    }

    return false;
  }

  render() {
    let className = 'mx-1';
    let active = 'mx-1 current';

    return (
      <Container fluid className="px-4 p-navbar">
        <Row>
          <Col className="text-left brand">
            Pilot
          </Col>
        </Row>

        <Row>
          <Col className="text-left px-0">
            <Link className="text-dec-0">
              <div className="nav-item active">
                <IconContext.Provider value={{ className: "nav-icon" }}>
                  <FaHome />
                </IconContext.Provider>
                <span class="pl-2">Home</span>
              </div>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col className="text-left px-0">
            <Link className="text-dec-0" to="/monitoring">
              <div className="nav-item">
                <IconContext.Provider value={{ className: "nav-icon" }}>
                  <FaServer />
                </IconContext.Provider>
                <span class="pl-2">Monitoring</span>
              </div>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col className="text-left px-0">
            <Link className="text-dec-0" to="/data">
              <div className="nav-item">
                <IconContext.Provider value={{ className: "nav-icon" }}>
                  <FaDatabase />
                </IconContext.Provider>
                <span class="pl-2">Data</span>
              </div>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col className="text-left px-0">
            <Link className="text-dec-0" to="/security">
              <div className="nav-item">
                <IconContext.Provider value={{ className: "nav-icon" }}>
                  <FaShieldAlt />
                </IconContext.Provider>
                <span class="pl-2">Data</span>
              </div>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col className="text-left px-0">
            <Link className="text-dec-0" to="/docs">
              <div className="nav-item">
                <IconContext.Provider value={{ className: "nav-icon" }}>
                  <FaFileAlt />
                </IconContext.Provider>
                <span class="pl-2">Documentation</span>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
