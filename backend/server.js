const express = require("express");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(authRoutes);

const port = 5000;
app.listen(process.env.PORT || port, () => {
  console.log("SERVER RUNNING AT PORT", port);
});
