const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const routes = require('./routes');

app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: ['http://localhost:8000'],
}));
app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log('Server started at http://localhost:3000'));
