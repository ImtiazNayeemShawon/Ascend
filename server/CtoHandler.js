const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const AboutSchema = require("./WebContent/ContentSchema");
const Ascend = new mongoose.model("AboutUs ", AboutSchema);

//GET ALL DATA
router.get("/AboutContent", (req, res) => {
  Ascend.find()
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
});

//ADD ABOUT CONENT
router.post("/AboutContent", async (req, res) => {
  const AboutUs = new Ascend(req.body);
  await AboutUs.save((err) => {
    if (err) {
      res.status(500).json({
        error: "there was an server side error",
      });
    } else {
      res.status(200).json({
        message: "Done",
      });
    }
  });
});

//UPDATE DATA
router.put("/AboutContent", async (req, res) => {
  const AboutUs = new Ascend(req.body);
  await AboutUs.save((err) => {
    if (err) {
      res.status(500).json({
        error: "there was an server side error",
      });
    } else {
      res.status(200).json({
        message: "Done",
      });
    }
  });
});
module.exports = router;
