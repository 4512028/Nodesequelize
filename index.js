const express = require("express");
const app = express();
var bodyParser = require("body-parser");
require("./models");
var {
  adduser,
  getUsers,
  getUser,
  postUser,
  deleteUser,
  patchUser,
  oneToOne,
} = require("./controllers/user.conroller");

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/add", adduser);
app.get("/getall", getUsers);
app.get("/getuser/:id", getUser);
app.post("/postuser", postUser);
app.delete("/deleteuser/:id", deleteUser);
app.patch("/patchuser/:id", patchUser);
app.get("/oneToOne", oneToOne);

app.listen(3000, () => {
  console.log("shjcbs");
});
