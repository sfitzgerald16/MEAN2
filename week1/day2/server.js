require('dotenv').load();

const express = require('express');
const path = require('path');
const parse = require('body-parser');
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');

// object destructing finds propterty Schema on object mongoose
// const Schema = mongoose.Schema;
const { Schema } = mongoose;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.use(parse.urlencoded({extended: true}));
app.use(express.static(path.resolve('client')));

//db
require('./server/config/db_config');

//routes
const authorRoutes = require('./server/config/routes/authors');
app.use('/authors', authorRoutes);
require('./server/config/routes')(app);

app.listen(port, () => console.log(`Listening to server on port ${ port }`));
