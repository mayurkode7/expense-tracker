const path = require('path')
const express = require('express');
const dotenv = require('dotenv');  // helps create global variables like port, url .. kind of config
const moment = require('moment');
const colors = require('colors');
const morgan = require('morgan');
const app = express()
const logger = require('./middleware/logger')

dotenv.config({ path: './config/config.env' })

const transactions = require('./routes/transactions');

const connectDB = require('./config/db')

connectDB()

app.use(logger);
app.use(express.json());  // parse request body
// app.use(express.urlencoded({ extended: false }); // parse form in request body

// to show requests and status in console
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// route for api calls
app.use('/api/v1/transactions', transactions);

// route for front-end react code
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../web/build'))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'web', 'build', 'index.html')))
}


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server started on port`.blue.bold, PORT);
});