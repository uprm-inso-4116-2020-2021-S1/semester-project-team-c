const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const path = require('path');
const server = require('http').Server(app);
const morgan = require('morgan');
const passport = require('passport');
const compression = require('compression');
const bodyParser = require('body-parser');
const helmet = require('helmet');

var allowedOrigins = ['http:localhost:8080/'];

app.use(compression()); //Compress all routes
app.use(helmet());      //Protect from well-known web vulnerabilities


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));


// MEDIA (Logos, Resumes, and Public Documents)
app.use('/media', express.static('media'));

// API Routes
app.use('/api', require('./routes/api')(passport));


server.listen(port, () => console.log(`Listening on port ${port}!`));
