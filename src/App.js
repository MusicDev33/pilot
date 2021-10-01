import './App.css';
import 'scss/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import wsClient from 'services/websocket';

import PContainer from './PContainer';

function App() {
  return (
    <PContainer />
  );
}

export default App;
