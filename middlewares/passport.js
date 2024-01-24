const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const bcrypt = require("bcrypt");

const localStrategy = new LocalStrategy(
  {
    usernameField: "username",
    passwordField: "password",
  },
  async (username, password, done) => {
    try {
      const user = await User.findOne({ username: username });
      if (!user) return done({ message: "User not found" });
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return done({ message: "Incorrect password" });
      return done(null, user);
    } catch (error) {
      done(error);
    }
  }
);


module.exports = localStrategy;