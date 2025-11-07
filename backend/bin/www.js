#!/usr/bin/env node
import app from '../app.js';
import http from 'http';

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
}

const port = normalizePort(process.env.PORT || '4000');
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

server.on('listening', () => {
  console.log(`✅ Tiny backend running on port ${port}`);
});
server.on('error', (err) => {
  console.error("❌ Server error:", err.message);
});
