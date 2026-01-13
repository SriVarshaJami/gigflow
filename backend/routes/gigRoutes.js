const express = require("express");
const Gig = require("../models/Gig");
const auth = require("../middleware/authMiddleware.js");

const router = express.Router();

// Get all gigs
router.get("/", async (req, res) => {
  const gigs = await Gig.find();
  res.json(gigs);
});

// Create gig
router.post("/", auth, async (req, res) => {
  const gig = await Gig.create({
    ...req.body,
    ownerId: req.userId
  });
  res.status(201).json(gig);
});

module.exports = router;   // ✅ REQUIRED