const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 5000;
app.listen(process.env.PORT || port, () => {
  console.log("SERVER RUNNING AT PORT", port);
});
