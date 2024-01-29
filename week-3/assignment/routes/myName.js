const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { name } = req.cookies;
  res.render("myName", { name });
});

module.exports = router;
