const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

// Validation rules
const contactValidation = [
  body('from_name').trim().notEmpty().withMessage('Name is required'),
  body('from_email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email address'),
  body('subject').trim().notEmpty().withMessage('Subject is required'),
  body('message').trim().notEmpty().withMessage('Message is required'),
];

// Create Nodemailer transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: false, // true for port 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// @route  POST /api/contact
// @desc   Submit contact form — saves to MongoDB and sends email
// @access Public
router.post('/', contactValidation, async (req, res, next) => {
  // Check validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().reduce((acc, err) => {
        acc[err.path] = err.msg;
        return acc;
      }, {}),
    });
  }

  const { from_name, from_email, subject, message } = req.body;

  try {
    // 1. Save to MongoDB
    const contact = await Contact.create({ from_name, from_email, subject, message });

    // 2. Send email via Nodemailer (only if SMTP credentials are configured)
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = createTransporter();
        await transporter.sendMail({
          from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
          to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER,
          replyTo: from_email,
          subject: `[Portfolio] ${subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px; font-weight: bold; color: #64748b;">Name:</td>
                  <td style="padding: 8px;">${from_name}</td>
                </tr>
                <tr style="background: #f8fafc;">
                  <td style="padding: 8px; font-weight: bold; color: #64748b;">Email:</td>
                  <td style="padding: 8px;"><a href="mailto:${from_email}">${from_email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: bold; color: #64748b;">Subject:</td>
                  <td style="padding: 8px;">${subject}</td>
                </tr>
                <tr style="background: #f8fafc;">
                  <td style="padding: 8px; font-weight: bold; color: #64748b; vertical-align: top;">Message:</td>
                  <td style="padding: 8px; white-space: pre-line;">${message}</td>
                </tr>
              </table>
              <p style="color: #94a3b8; font-size: 12px; margin-top: 24px;">
                Submitted at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
              </p>
            </div>
          `,
        });
      } catch (emailErr) {
        // Email failed — log but still return success (data is saved to DB)
        console.error('Email send error:', emailErr.message);
      }
    }

    res.status(201).json({
      success: true,
      message: "Message sent! I'll get back to you soon.",
      id: contact._id,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
