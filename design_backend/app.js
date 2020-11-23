const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const server = require('http').Server(app);
const passport = require('passport');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const hookJWTStrategy = require('./services/passport');
const compression = require('compression');
const bodyParser = require('body-parser');
const helmet = require('helmet');

var allowedOrigins = ['http:localhost:8080/'];



app.use(express.static('public'));
app.use(cors());
app.use(compression()); //Compress all routes
app.use(helmet());      //Protect from well-known web vulnerabilities
var corsOptions = {
    origin: function(origin, callback) {
    // allow requests with no origin
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1) {
        var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
    }
        return callback(null, true);
    },
    methods: 'POST, GET, PUT, DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin, Authentication'
};
app.use(passport.initialize());
hookJWTStrategy(passport);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// app.get('/all-users', user_controller.getAll);


// API Routes
app.use('/api', require('./routes/api')(passport));






server.listen(port, () => console.log(`Listening on port ${port}!`));
