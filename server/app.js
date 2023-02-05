const express = require("express");
const mongoose = require("mongoose");
const About = require("./WebContent/About");
const Cto = require("./CtoHandler");

//INITIAL THE APPS
const app = express();
app.use(express.json());

//DATABASE CONNECTION
mongoose
  .connect("mongodb://localhost:27017/ascend", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

//ROUTER DEFINED
app.use("/", About);
app.use("/cto", Cto);

app.listen(2000, () => {
  console.log("Started");
});
