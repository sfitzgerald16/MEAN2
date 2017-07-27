const User = require('mongoose').model('User');

module.exports = {
  login(request, response) {
    User.findOne({ email: request.body.email })
      .then(user => {
        if (!user) throw new Error();

        return User.validatePassword(request.body.password, user.password)
          .then(() => {
            // what to do when password match?
            completeLogin(request, response, user);
          });
      })
      .catch(error => {
        response.status(401).json('Email/password combination not found');
      });
  },
  register(request, response) {
    console.log(request.body);
    User.create(request.body)
      .then(user => {
        completeLogin(request, response, user);
      })
      .catch(error => {

        console.log(error);
        response.status(422).json(
          Object.keys(error.errors).map(key => error.errors[key].message)
        );

      });
  },
  logout(request, response) {
    request.session.destroy();

    response.clearCookie('userID');
    response.clearCookie('expiration');

    response.json(true);
  },
};

function completeLogin(request, response, user) {
  request.session.user = user.toObject();

  delete request.session.user.password;

  response.cookie('userID', user._id.toString());
  response.cookie('expiration', Date.now() + 86400 * 1000);
  response.json(user);
}
