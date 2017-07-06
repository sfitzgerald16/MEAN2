const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');


mongoose.connect('mongodb://localhost/books');
mongoose.connection.on('connected', () => console.log('Connected to booksDB'));

mongoose.Promise = global.Promise;

const models_path = path.join(__dirname, '../models');

fs.readdirSync(models_path).forEach(function (file) {
  if (file.indexOf('.js') >= 0) {
    require(path.join(models_path, file));
  }
});
