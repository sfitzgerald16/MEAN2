const Author = require('mongoose').model('Author');

module.exports = {
  index: function (req, res) {
    Author.find({}).populate('books').exec(function(error, authors){
      if(error){
        throw error;
      }
      res.render('authors/index', { authors });
    });
  },
  new: function (req, res) {
    res.render('authors/new');
  },
  show: function (req, res) {
    Author.findById(req.params.author_id)
      .populate('books')
      .then(function(author) {
        // handle author
        console.log(` found author ${ author.name }`);
        res.render('authors/show', { author });
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  create: function (req, res) {
    Author.create(req.body)
      .then(function(author){
        console.log(author);
        res.redirect('/authors');
      })
      .catch(function(error) {
        // response.redirect('/authors');

        res.render('authors/new', {
          errors: Object.keys(error.errors)
                    .map(errorKey => error.errors[errorKey].message)
          });
      });
  }
}
