const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.listen(port, ()=> { console.log(`server on ${port}`) });

// JSON
const about = require('./JSON/about.json');
const portfolio = require('./JSON/portfolio.json');

// Send json
app.get('/about', (req, res) => { res.json(about) });
app.get('/portfolio', (req, res) => { res.json(portfolio) })

app.get('/', (req, res) => { res.json('is Working!') })