const nodemailer = require("nodemailer");

async function sendEmail(to, subject, message, name = "Student") {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use SMTP config
      auth: {
        user: "tulsirampathe81@gmail.com",
        pass: "vnarbvruzuyoamcn",
      },
    });

    const mailOptions = {
      from: `"SISTec Hackathon Team" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html: `
    <div style="max-width:600px; margin:0 auto; font-family:Arial, sans-serif; border:1px solid #e0e0e0; border-radius:8px; overflow:hidden;">
      <!-- Header with Logo -->
      <div style="background:#ffffff; padding:20px; text-align:center; border-bottom:1px solid #e0e0e0;">
        <img src="https://www.sistecrsih.in/images/logo.png" alt="SIH Logo" width="120" style="margin-bottom:10px;" />
        <h2 style="margin:0; color:#333;">SISTec Innovation Hackathon</h2>
      </div>

      <!-- Body -->
      <div style="padding:20px; color:#333; background:#fafafa;">
        <p style="font-size:14px; margin:0 0 15px;">Hello <strong>${name}</strong>,</p>
        <p style="line-height:1.6; font-size:14px;">${message}</p>
      </div>

      <!-- Footer -->
      <div style="background:#f8f9fa; padding:15px; text-align:center; font-size:12px; color:#555;">
        <p style="margin:0;">Regards,<br/><strong>SISTec Innovation Hackathon Team</strong></p>
      </div>
    </div>
  `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("❌ Email error:", error.message);
    return { success: false, error: error.message };
  }
}


module.exports = { sendEmail };
