const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

// handle errs
const handleErrors = (err) => {
  let errors = { fullname: "", email: "", username: "", password: "" };

  // non-existing user - login
  if (err.message === "That user does not exist") {
    errors = { email: err.message };
    return errors;
  }

  // incorrect password - login
  if (err.message === "Incorrect password") {
    errors = { password: err.message };
    return errors;
  }

  // dupliacte err code - signup
  if (err.code === 11000) {
    if (Object.keys(err.keyValue)[0] === "email") {
      errors.email = "That email is already registered";
      return errors;
    } else if (Object.keys(err.keyValue)[0] === "username") {
      errors.username = "That username is already taken";
      return errors;
    }
  }

  // validation errs - signup
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ path, message }) => {
      errors[path] = message;
    });
  }

  return errors;
};

const maxAge = 60 * 60 * 24 * 3;

const createToken = (id, fullname, username) => {
  return jwt.sign({ id, fullname, username }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
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

      const token = createToken(user._id, user.fullname, user.username);
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });

      res.status(201).json({ user: user._id });
    } catch (err) {
      const errors = handleErrors(err);
      res.status(400).json({
        errType: "invalid-data",
        errors,
      });
    }
  } else {
    res.status(400).json({
      errType: "password-match-fail",
      error: "Passwords don't match",
    });
  }
};

const loginPOST = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    const token = createToken(user._id, user.fullname, user.username);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });

    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({
      errType: "incorrect-data",
      errors,
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
