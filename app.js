const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const ejs = require('ejs');

app.use(bodyParser.json());
app.use(cors());
app.set('view engine', 'ejs');

const routes = require('./routes/user');

app.use('/api', routes);

app.get('/', (req, res) => {
  res.render('index', { users: [] });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});