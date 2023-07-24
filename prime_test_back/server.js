const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const PORT = process.env.PORT || 5000;

const { user_route } = require('./routes/user_routes');


app.get('/', (req, res) => {
    res.send('Hello!');
  });

const { Sequelize } = require('sequelize');
const config = require('./config/config');

const sequelize = new Sequelize(config.development);

user_route(app);

app.listen(PORT|| 5000, () => console.log(`Server runing on port ${PORT}!`));