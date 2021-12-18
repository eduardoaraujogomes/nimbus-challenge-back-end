const express = require('express');
require('express-async-errors');

const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  response.sendStatus(500);
});

app.listen(8000, () => console.log('👀 Server started at http://localhost:3000'));
