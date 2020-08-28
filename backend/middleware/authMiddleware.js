const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  // check if jwt exists & is verified
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        res.json({ authenticated: [false, { cause: "invalid-jwt" }] });
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.json({ authenticated: [false, { cause: "jwt-not-found" }] });
  }
};

module.exports = {
  requireAuth,
};
