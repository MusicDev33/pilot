import { w3cwebsocket as WebSocketClient } from 'websocket';

const client = new WebSocketClient('ws://bioinfocore.usu.edu/ws', 'echo-protocol');

client.onopen = () => {
  console.log('WebSocket connected.');

  client.send('ready');
};

export default client;
