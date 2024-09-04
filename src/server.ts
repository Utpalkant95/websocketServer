import { WebSocketServer } from 'ws';

// Create a WebSocket server
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  // Handle incoming messages from clients
  ws.on('message', (message) => {
    console.log('Received:', message);
    ws.send(`You sent: ${message}`);
  });

  // Handle client disconnection
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
