import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FaRedo } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import * as Uptime from 'services/uptime/uptime';

import './Docs.scss';

const classDict = {
  'Loading...': 'loading',
  'Online': 'online',
  'Offline': 'offline'
}

export default class NewComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bioinfoStatus: 'Loading...',
      biocoreStatus: 'Loading...',
      bioclusterStatus: 'Loading...'
    }
  }

  componentDidMount() {
    Uptime.getBioinfoUp()
      .then(response => {
        this.setState({bioinfoStatus: 'Online'});
      })
      .catch(e => {
        this.setState({bioinfoStatus: 'Offline'});
      });

    Uptime.getBiocoreUp()
      .then(response => {
        this.setState({biocoreStatus: 'Online'});
      })
      .catch(e => {
        this.setState({biocoreStatus: 'Offline'});
      });

    Uptime.getBioclusterUp()
      .then(response => {
        this.setState({bioclusterStatus: 'Online'});
      })
      .catch(e => {
        this.setState({bioclusterStatus: 'Offline'});
      });
  }

  render() { 

    return (<div></div>);
  }
}
