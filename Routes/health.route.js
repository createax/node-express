const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  res.status(200).send({
    status: 200,
    message: "Congratulations! Your server is fit and healthy 🍟",
  });
});

module.exports = router;
