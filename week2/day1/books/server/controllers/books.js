const Book = require('mongoose').model('Book');

module.exports = {
  index(request, response) {
    Book.find({})
      .then(function(books) {
        response.json(books);
      })
      .catch(function(error) {
        console.log(error);
      })
  },
  create(request, response) {
    const book = new Book(request.body);

    console.log('created new book', book);

    book.save()
      .then(function(book) {
        console.log('saved book', book);
        response.json(book);
      })
      .catch(function(error) {
        console.log(error);
      })
  },
  show(request, response) {
    Book.findById(request.params.id)
      .then(function(book) {
        response.json(book);
      })
      .catch(console.log);
  },
  update(request, response) {
    Book.findByIdAndUpdate(request.params.id, request.body, { new: true })
      .then(function(book) {
        console.log('updated book', book);
        response.json(book);
      })
      .catch(console.log);
  },
  destroy(request, response) {
    Book.findByIdAndRemove(request.params.id)
      .then(function(book) {
        response.json(book);
      })
      .catch(console.log);
  },
};
