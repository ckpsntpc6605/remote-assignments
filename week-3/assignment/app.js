const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cookieParser = require("cookie-parser");

app.set("view engine", "pug");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const getDataRoute = require("./routes/getdata");
app.use("/getData", getDataRoute);
const myNameRoute = require("./routes/myName");
app.use("/myName", myNameRoute);
const trackNameRoute = require("./routes/trackName");
app.use("/trackName", trackNameRoute);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("<h1>Hello,My Server!</h1>");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.....`);
});
