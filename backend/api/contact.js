const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');

// Validation middleware (adapted for serverless)
const validationRules = () => {
  return [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('message').notEmpty().withMessage('Message is required'),
  ];
};

// Helper to validate request data
async function validateRequest(req) {
  const rules = validationRules();
  const errors = [];
  
  // Simple validation
  if (!req.body.name || req.body.name.trim() === '') {
    errors.push({ msg: 'Name is required' });
  }
  if (!req.body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(req.body.email)) {
    errors.push({ msg: 'Valid email is required' });
  }
  if (!req.body.message || req.body.message.trim() === '') {
    errors.push({ msg: 'Message is required' });
  }
  
  return errors;
}

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Validate request
    const errors = await validateRequest(req);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const { name, email, message } = req.body;

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Contact from ${name}`,
      text: `You have received a new message.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully from:', name);
    
    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error in contact endpoint:', error);
    return res.status(500).json({ message: 'Failed to send email. Please try again later.' });
  }
};
