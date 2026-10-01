import express from 'express';
import dotenv from 'dotenv';
import contactHandler from './api/contact.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.post('/api/contact', async (req, res) => {
  await contactHandler(req, res);
});

app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

app.listen(port, () => {
  console.log(`Contact API running on http://localhost:${port}`);
});
