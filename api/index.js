const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());


app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Express on Vercel!' });
});

module.exports = app;

