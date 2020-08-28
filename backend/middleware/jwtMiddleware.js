const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        res.json({
          AUTH_FAILED: "JWT IS INVALID",
        });
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.json({
      AUTH_FAILED: "JWT NOT FOUND",
    });
  }
};

module.exports = {
  requireAuth,
};
