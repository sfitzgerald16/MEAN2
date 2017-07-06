const Book = require('mongoose').model('Book');
const Author = require('mongoose').model('Author');

module.exports = {
  index: function (req, res) {
    Book.find({})
      .then(function(books){
        console.log(books);
        res.render('books/index', { books });
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  new: function (req, res) {
    Author.find({})
      .then(function(authors) {
        res.render('books/new', { authors });
      })
      .catch(console.log);
  },
  create: function (req, res) {
    Book.create(req.body)
      .then(function(book) {
        console.log(book);

        return Author.findById(book.author)
          .then(function(author) {
            console.log('author', author);

            if (!author) {
              throw new Error('can not find author');
            }
            // do something with author

            author.books.push(book);

            return author.save()
              .then(function() {
                res.redirect('/books');
              });
          });
      })
      .catch(function(error) {
        console.log(error.errors.name);
        // what else?
      });
  }
}
