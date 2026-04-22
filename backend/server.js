const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

let isWhatsAppReady = false;

console.log('Initializing WhatsApp client...');
const client = new Client({
  // This is the critical fix for Vercel's read-only filesystem
  authStrategy: new LocalAuth({
    dataPath: '/tmp' 
  }),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
  webVersionCache: {
    type: 'remote',
    remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html',
  }
});

client.on('qr', (qr) => {
  console.log('--------------------------------------------------');
  console.log('QR Code Received. Scan it with your phone\'s WhatsApp.');
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('--------------------------------------------------');
  console.log('✅ WhatsApp client is ready! Notifications are now active.');
  console.log('--------------------------------------------------');
  isWhatsAppReady = true;
});

client.initialize().catch(err => console.error('WhatsApp initialization failed:', err));

const app = express();
// PORT is not needed for serverless, but good to have for local testing
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const sendWhatsAppMessage = async (message) => {
  if (!isWhatsAppReady) {
    console.log('⏳ WhatsApp client is not ready yet. Skipping message.');
    return;
  }
  
  const number = process.env.MY_WHATSAPP_NUMBER;
  if (!number) {
    console.log('MY_WHATSAPP_NUMBER not set. Skipping message.');
    return;
  }
  
  const chatId = `${number}@c.us`;
  try {
    await client.sendMessage(chatId, message);
    console.log('WhatsApp notification sent successfully.');
  } catch (error) {
    console.error('Failed to send WhatsApp notification:', error);
  }
};

app.post('/api/contact', [
    // validation rules...
  ], async (req, res) => {
    // validation check...

    const { name, email, message } = req.body;

    const whatsappMessage = `*New Portfolio Message*\n\n*From:* ${name}\n*Email:* ${email}\n\n*Message:*\n${message}`;
    await sendWhatsAppMessage(whatsappMessage);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Contact from ${name}`,
      text: `You have received a new message.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully.');
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email.' });
    }
});

// For Vercel, we export the app. For local testing, we can still listen.
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running locally on port ${PORT}`);
  });
}

module.exports = app;
