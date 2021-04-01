import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Brand} from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      <div className="mx-5 mb-4 mt-3 nav-wrapper mx-auto">
        <Navbar>
          <Navbar.Brand className="h-brand">
            <b>Pilot</b>
          </Navbar.Brand>

          <Nav className="w-100 nav-fill">
            <Nav.Link href="/home">
              <span className="current">Home</span>
            </Nav.Link>
            <Nav.Link href="#" className={'about' === this.props.active ? active : className}>
              <span>Monitoring</span>
            </Nav.Link>
            <Nav.Link href="#" className={'dataset' === this.props.active ? active : className}>
              <span>Data</span>
            </Nav.Link>
            <Nav.Link href="#" className={'help' === this.props.active ? active : className}>
              <span>Security</span>
            </Nav.Link>
          </Nav>

        </Navbar>
      </div>
    );
  }
}
