const express = require("express");
const router = express.Router();

// @access Public
router.get("/test", (req, res) => {
  res.json({ msg: "Posts Works" });
});

module.exports = router;
