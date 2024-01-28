const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "pug");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const getDataRoute = require("./routes/getdata");
app.use("/getData", getDataRoute);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("<h1>Hello,My Server!</h1>");
});

app.listen(3000, () => {
  console.log(`Listening on port ${PORT}.....`);
});
