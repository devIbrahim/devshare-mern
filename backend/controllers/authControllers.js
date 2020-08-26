const User = require("../models/User");

// handle errs
const handleErrors = (err) => {
  // console.log(err.message, err.code);
  let errors = { fullname: "", email: "", username: "", password: "" };

  // dupliacte err code
  if (err.code === 11000) {
    // errors.email = "That email is already registered";
    // return errors;
    // console.log(err.keyValue);
    if (Object.keys(err.keyValue)[0] === "email") {
      errors.email = "That email is already registered";
      return errors;
    } else if (Object.keys(err.keyValue)[0] === "username") {
      errors.username = "That username is already taken";
      return errors;
    }
  }

  // validation errs
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ path, message }) => {
      errors[path] = message;
    });
  }

  return errors;
};

const signupPOST = async (req, res) => {
  // console.log(req.body);
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
      const errors = handleErrors(err);
      res.status(400).json(errors);
    }
  } else {
    res.status(400).json({
      authenticated: false,
      error: "PASSWORDS DON'T MATCH",
    });
  }
};

const loginPOST = async (req, res) => {
  console.log(req.body);
  res.json({
    authenticated: true,
  });
};

const testGET = (req, res) => {
  res.send("TEST SUCCESSFUL");
};

module.exports = {
  loginPOST,
  signupPOST,
  testGET,
};
