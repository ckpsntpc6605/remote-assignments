const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { name } = req.query;
  res.cookie("name", name);
  res.redirect("/myName");
});

module.exports = router;