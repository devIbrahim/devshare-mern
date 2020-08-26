const User = require("../models/User");

const loginPOST = async (req, res) => {
  console.log(req.body);
  res.json({
    authenticated: true,
  });
};

const signupPOST = async (req, res) => {
  console.log(req.body);
  const { fullname, email, username, password, repeatPassword } = req.body;

  if (password.trim() === repeatPassword.trim()) {
    try {
      const user = await User.create({
        fullname: fullname.trim(),
        email: email.trim(),
        username: username.trim(),
        password: password.trim(),
      });
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
      res.status(400).json({
        authenticated: false,
        error: "USER NOT CREATED",
      });
    }
  } else {
    res.status(400).json({
      authenticated: false,
      error: "PASSWORDS DON'T MATCH",
    });
  }
};

const testGET = (req, res) => {
  res.send("TEST SUCCESSFUL");
};

module.exports = {
  loginPOST,
  signupPOST,
  testGET,
};
