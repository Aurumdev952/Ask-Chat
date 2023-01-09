const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT 

const app = express();


app.use(logger('dev'));
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}));
// app.use(cors)
app.use(bodyParser.json())
app.use('/api', require('./routes/oRoute'))

app.listen(PORT, () => {
    console.log('app listening on port ' + PORT);
});