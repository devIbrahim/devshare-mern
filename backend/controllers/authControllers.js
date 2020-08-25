const loginPOST = (req, res) => {
  res.send("LOGIN SUCCESS");
};

const signupPOST = (req, res) => {
  res.send("SIGNUP SUCCESS");
};

module.exports = {
  loginPOST,
  signupPOST,
};
