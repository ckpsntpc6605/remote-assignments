const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { number } = req.query;
  //   res.render("getdata", { number });
  if (!number) {
    res.render("getdata", { lack: "Lack of Params" });
  } else if (!Number.isInteger(Number(number)) || Number(number) <= 0) {
    res.render("getdata", { wrong: "Wrong Parameter" });
  } else {
    const result = ((1 + Number(number)) * Number(number)) / 2;
    res.render("getdata", { result });
  }
});

module.exports = router;
