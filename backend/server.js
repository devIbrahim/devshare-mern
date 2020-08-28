// DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const appRoutes = require("./routes/appRoutes");

const authRoutes = require("./routes/authRoutes");
const appRoutes = require("./routes/appRoutes");

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// DATABASE CONNECTION
const dbURI =
  "mongodb+srv://ibrahim:5Io26ZyxWBM2PwCH@cluster0.e5moe.mongodb.net/devshare";

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    // START LISTENING
    const port = 8080;
    app.listen(process.env.PORT || port, () => {
      console.log("SERVER RUNNING AT PORT", port);
    });
  })
  .catch((err) => console.log(err));

// ROUTES
app.use("/api", authRoutes);
app.use("/user", appRoutes);

app.get("/", (req, res) => res.send("THIS IS THE SERVER"));
