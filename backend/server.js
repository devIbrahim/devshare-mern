const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", authRoutes);

app.get("/", (req, res) => res.send("THIS IS THE SERVER"));

const port = 8080;
app.listen(process.env.PORT || port, () => {
  console.log("SERVER RUNNING AT PORT", port);
});
