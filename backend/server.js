const express = require('express');
const axios = require('axios');
const cors = require('cors');
const logEvent = require('./logger');

const app = express();
app.use(cors());
app.use(express.json());

const ACCESS_TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMjAzMDMxMjQwODE4QHBhcnVsdW5pdmVyc2l0eS5hYy5pbiIsImV4cCI6MTc1MDY2Mzc0OSwiaWF0IjoxNzUwNjYyODQ5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZGNlYTU1NzAtMjY1Mi00ZGZiLWE5NGUtMzA0NDFhNDk4Yzg0IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibWVrYWxhIGdhbmVzaCByZWRkeSIsInN1YiI6IjkzMTExODYyLWRmZmUtNDRhMi1iNzlkLWY0NjM4ZTNlMWYwZSJ9LCJlbWFpbCI6IjIyMDMwMzEyNDA4MThAcGFydWx1bml2ZXJzaXR5LmFjLmluIiwibmFtZSI6Im1la2FsYSBnYW5lc2ggcmVkZHkiLCJyb2xsTm8iOiIyMjAzMDMxMjQwODE4IiwiYWNjZXNzQ29kZSI6IlRSemdXTSIsImNsaWVudElEIjoiOTMxMTE4NjItZGZmZS00NGEyLWI3OWQtZjQ2MzhlM2UxZjBlIiwiY2xpZW50U2VjcmV0IjoiYmZwRmp1Uldod0h4cmtTViJ9.CImQpPAlNVJbFDe6Sqoqf76PUgKAJ30pysBppHSXSXw";

app.get('/api/questions', async (req, res) => {
  logEvent('backend', 'info', 'handler', 'Frontend requested questions');

  try {
    const response = await axios.get('http://20.244.56.144/evaluation-service/questions', {
      headers: {
        Authorization: ACCESS_TOKEN
      }
    });

    logEvent('backend', 'info', 'handler', 'Questions fetched successfully');
    res.json(response.data);

  } catch (error) {
    logEvent('backend', 'error', 'handler', `Failed to fetch questions: ${error.message}`);
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
