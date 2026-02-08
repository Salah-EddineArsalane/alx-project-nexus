// server.js

require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db'); // your existing db connection
const app = express();

// Middleware to parse JSON
app.use(express.json());

// ----------------------------
// Connect to MongoDB
// ----------------------------
const startServer = async () => {
  if (!process.env.MONGO_URI) {
    console.error('MONGO_URI is missing. Set it in Railway variables.');
    process.exit(1);
  }

  try {
    await connectDB();
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('DB connection error:', err);
    process.exit(1);
  }
};

// ----------------------------
// Browser-friendly landing page
// ----------------------------
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>DevHire API</title>
        <style>
          body { font-family: Arial, sans-serif; background: #f4f4f4; color: #333; text-align: center; padding: 50px; }
          h1 { color: #0070f3; }
          a { display: block; margin: 10px 0; color: #0070f3; text-decoration: none; font-weight: bold; }
          a:hover { text-decoration: underline; }
          p { max-width: 600px; margin: 0 auto; }
        </style>
      </head>
      <body>
        <h1>Welcome to DevHire API 🚀</h1>
        <p>Your API is running successfully on Railway!</p>
        <h2>Endpoints</h2>
        <a href="/api/health" target="_blank">/api/health</a>
        <a href="/api/auth/login" target="_blank">/api/auth/login</a>
        <a href="/api/auth/register" target="_blank">/api/auth/register</a>
        <a href="/api/jobs" target="_blank">/api/jobs</a>
        <a href="/api/jobs/create" target="_blank">/api/jobs/create</a>
        <p>Use Postman or curl to test API requests.</p>
      </body>
    </html>
  `);
});

// ----------------------------
// Health check route
// ----------------------------
app.get('/api/health', (req, res) => {
  res.json({ status: 'API Running' });
});

// ----------------------------
// Placeholder routes (replace with your actual routes)
// ----------------------------
app.use('/api/auth', require('./src/routes/auth')); // login, register
app.use('/api/jobs', require('./src/routes/jobs')); // jobs CRUD

// ----------------------------
// Start the server
// ----------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await startServer();
  console.log(`Server running on port ${PORT}`);
});
