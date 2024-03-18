// server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3200;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/send-email', (req, res) => {
    const { name, tagline, has, hasNot, colorInfo } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // Use your email service provider
        auth: {
            user: 'nikodola@gmail.com', // Your email address
            pass: 'vejc wtdh aqiy eima' // Your email password
        }
    });

    // Email content
    const mailOptions = {
        from: 'nikodola@gmail.com',
        to: 'nikodola@gmail.com', // Use the email from the form
        subject: 'Thank you for contacting us!',
        text: `Company name ${name}, tagline ${tagline}, should have: ${has}, should not have ${hasNot}, colors${colorInfo}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.send('Email sent successfully!');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

