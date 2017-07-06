const booksController = require('../controllers/books');

module.exports = function (app){
  app.get('/', function (request, response) {
    response.redirect('/authors');
  });



  app.get('/books', booksController.index);
  app.get('/books/new', booksController.new);
  app.post('/books',booksController.create);
};
