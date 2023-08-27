const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

require('dotenv').config(); // Loads environment variables from .env
const gmailPassword = process.env.GMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  service: 'Gmail', 
  auth: {
    user: 'pawesomeVolunteer@gmail.com',
    pass: gmailPassword,
  },
});

app.post('/send-email', async (req, res) => {
  try {
    const { email } = req.body;

    const mailOptions = {
      from: 'pawesomeVolunteer@gmail.com',
      to: email,
      subject: "Pawesome Park Volunteering",
      text: "Thank you for signing up to our newsletter! You will be emailed with opportunities when they are available!",
    };

    await transporter.sendMail(mailOptions);
    res.sendStatus(200);
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("An error occurred while sending the email.");
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
