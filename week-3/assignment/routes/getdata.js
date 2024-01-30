const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { number } = req.query;

  if (!number) {
    res.json({ lack: "Lack of Params" });
  } else if (!Number.isInteger(Number(number)) || Number(number) <= 0) {
    res.json({ wrong: "Wrong Parameter" });
  } else {
    const result = ((1 + Number(number)) * Number(number)) / 2;
    res.json({ result });
  }
});

module.exports = router;
