const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email address"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  username: {
    type: String,
    required: [true, "Please enter a username"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Minimum password length is 6 characters"],
  },
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

userSchema.statics.login = async function (username, password) {
  let user = await this.findOne({ username });
  if (user) {
    // Compare password
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    } else {
      throw Error("Incorrect password");
    }
  } else {
    user = await this.findOne({ email: username });

    if (user) {
      // Compare password
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      } else {
        throw Error("Incorrect password");
      }
    } else {
      throw Error("That user does not exist");
    }
  }
};

const User = mongoose.model("user", userSchema);

module.exports = User;
