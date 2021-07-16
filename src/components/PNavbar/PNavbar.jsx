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
      active: this.props.active,
      urlBase: window.location.pathname
    };
  }

  activeLink(link) {
    if (link === this.props.active) {
      return true;
    }

    return false;
  }

  changeUrlBase(urlBase) {
    this.setState({urlBase: urlBase});
  }

  activeCheck(base) {
    if (this.state.urlBase.includes(base)) {
      return 'active';
    }

    return '';
  }

  render() {
    let className = 'mx-1';
    let active = 'current';

    return (
      <Container fluid className="px-4 p-navbar">
        <Row>
          <Col className="text-left brand">
            Pilot
          </Col>
        </Row>

        <Row>
          <Col className="text-left px-0">
            <Link className="text-dec-0" to="/home" onClick={() => {this.changeUrlBase('home')}}>
              <div className={`nav-item ${this.activeCheck('home')}`}>
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
            <Link className="text-dec-0" to="/monitoring" onClick={() => {this.changeUrlBase('monitoring')}}>
              <div className={`nav-item ${this.activeCheck('monitoring')}`}>
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
            <Link className="text-dec-0" to="/data" onClick={() => {this.changeUrlBase('data')}}>
              <div className={`nav-item ${this.activeCheck('data')}`}>
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
            <Link className="text-dec-0" to="/security" onClick={() => {this.changeUrlBase('security')}}>
              <div className={`nav-item ${this.activeCheck('security')}`}>
                <IconContext.Provider value={{ className: "nav-icon" }}>
                  <FaShieldAlt />
                </IconContext.Provider>
                <span class="pl-2">Security</span>
              </div>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col className="text-left px-0">
            <Link className="text-dec-0" to="/docs" onClick={() => {this.changeUrlBase('docs')}}>
              <div className={`nav-item ${this.activeCheck('docs')}`}>
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
