const nodemailer = require('nodemailer');

let sendNoHeaderEmail;
module.exports = (
  res, mailOptions
) => sendNoHeaderEmail(res, mailOptions);

sendNoHeaderEmail = (res, mailOptions) => {
  const transporter = nodemailer.createTransport({
    service: `${process.env.NODEMAILER_NOREPLY_SENDER_SERVICE}`,
    auth: {
      user: `${process.env.NODEMAILER_NOREPLY_SENDER_USER}`,
      pass: `${process.env.NODEMAILER_NOREPLY_SENDER_PASSWORD}`
    }
  });
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
    }
  });
  console.log('temp');
};
