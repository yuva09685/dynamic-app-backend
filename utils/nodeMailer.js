const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',  
    auth: {
        user: 'yuvaraj09685@gmail.com', 
        pass: 'sbnbgbppqmwthhbj',
    },
});

const sendEmail = async (to, subject, html) => {
    try {
        const info = await transporter.sendMail({
            from: "yuvaraj09685@gmail.com",
            to: to,
            subject: subject,
            html: html,
        });
        console.log("Email sent successfully!",info);
    } catch (error) {
        console.error("Error sending email:", error);
        throw error; 
    }
};

module.exports = { sendEmail };