const passport = require('passport');
const jwt = require('jsonwebtoken');


function loginMiddleware(req, res, next) {
  passport.authenticate(
    'login',
    (err, user, info) => {
      try {
        if (err) {
          return next(err);
        }

        req.login(
          user,
          {session: false},
          (error) => {
            if (error) next(error);

            var body = {
              id: user.id,
            };
            
            const token = jwt.sign({user: body}, 'mysecretkey',
              {expiresIn: '15d'});

            body = {
              id: user.id,
              token: token,
            }
              
            res.cookie('jwt', token, {
              httpOnly: true,
              secure: 'development' === 'production',
            });

            res.status(200).json(body);
          },
        );
      } catch (error) {
        next(error);
      }
    },
  )(req, res, next);
}

function jwtMiddleware(req, res, next) {
  passport.authenticate('jwt', {session: false}, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      res.status(401).send('Você precisa estar logado para realizar essa ação');
    }

    req.user = user;

    next();
  })(req, res, next);
}

function notLoggedIn(req, res, next) {
  const token = req.cookies['jwt'];
  if (token) {
    jwt.verify(token, 'nysecretkey', (err, decoded) => {
      if (!(err instanceof jwt.TokenExpiredError)) {
        res.status(400).send('Você já está logado no sistema!');
      }
    });
  }
  next();
}

module.exports = {
  loginMiddleware,
  notLoggedIn,
  jwtMiddleware,
};