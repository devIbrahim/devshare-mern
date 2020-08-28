const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        res.json({
          authed: false,
        });
      } else {
        console.log(decodedToken);
        res.locals.dToken = decodedToken;
        next();
      }
    });
  } else {
    res.json({
      authed: false,
    });
  }
};

module.exports = {
  requireAuth,
};
