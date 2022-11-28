const express = require('express');
const { getConnection } = require('./db/db-connection-mongo');
const cors = require('cors');
require ('dotenv').config();


const app = express();
const port = process.env.port;

//Implementación Cors
app.use(cors());

getConnection();

// Parseo JSON
app.use(express.json());

app.use('/proyecto', require('./router/proyecto'));

  app.listen(port, () => {
    console.log(`Conexión establecida en  ${port}`)
  });