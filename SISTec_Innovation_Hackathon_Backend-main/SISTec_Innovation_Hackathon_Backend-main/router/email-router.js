const express = require("express");
const { sendEmail } = require("../services/emailService");
const Contact = require("../models/contact-model");

const router = express.Router();

// POST /api/email/reply
router.post("/reply", async (req, res) => {
  const { email, subject, message, name } = req.body;

  if (!email || !subject || !message) {
    return res
      .status(400)
      .json({ success: false, error: "All fields are required" });
  }

  const result = await sendEmail(email, subject, message, name);
  if (result.success) {
    // Update the contact in DB
    await Contact.findOneAndUpdate({ email: email }, { isReplied: true });

    res.json({ success: true, msg: "Reply sent successfully" });
  } else {
    res.status(500).json({ success: false, error: result.error });
  }
});

module.exports = router;
