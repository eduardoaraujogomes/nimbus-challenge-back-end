const express = require('express');
require('express-async-errors');

const cors = require('cors');
const routes = require('./routes');


const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  console.log(error);
  response.sendStatus(500);
});

app.listen(port, () => console.log(`👀 Server started at http://localhost:${port}`));
