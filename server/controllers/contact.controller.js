import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const handleSendMessage = async (req, res) => {
	try {
		const { name, email, subject, message } = req.body;
		await resend.batch.send([
			{
				from: `${name} <onboarding@resend.dev>`,
				to: ["mayukhchaturvedi@gmail.com"],
				reply_to: email,
				subject: `${name} send a message`,
				html: adminEmailTemplate(name, email, subject, message),
			},
			{
				from: `Auction System <mayukhchaturvedi@gmail.com>`,
				to: email,
				subject: `Reply from Online Auction System`,
				html: userEmailTemplate(name, email, subject, message),
			},
		]);
		res.status(200).json({ message: "Message sent succesfully" });
	} catch (error) {
		return res.status(500).json({ error: "Something went wrong from server" });
	}
};

const userEmailTemplate = (name, email, subject, message) => `
  <!DOCTYPE html>
  <html lang="en" style="margin: 0; padding: 0;">
    <head>
      <meta charset="UTF-8" />
      <title>Contact Confirmation</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f2f4f6;
          margin: 0;
          padding: 20px;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: auto;
          background: #ffffff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }
        .btn {
          display: inline-block;
          background-color: #007bff;
          color: #fff;
          text-decoration: none;
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: bold;
          margin: 20px 0;
        }
        .footer {
          font-size: 12px;
          color: #888;
          text-align: center;
          margin-top: 30px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <p>Hi <strong>${name}</strong>,</p>

        <p>
          Thank you for contacting us. We’ve received your message and our team will get back to you shortly. Here's a copy of what you submitted:
        </p>

        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>

        <p>
          If this wasn’t you or you need immediate help, feel free to reply directly to this email.
        </p>

        <div class="footer">
          &copy; 2025 Onlie Auction. All rights reserved. <br />
          This is an automated confirmation. Please do not reply.
        </div>
      </div>
    </body>
  </html>
`;

const adminEmailTemplate = (name, email, subject, message) => `
<!DOCTYPE html>
  <html lang="en" style="margin: 0; padding: 0;">
    <head>
      <meta charset="UTF-8" />
      <title>Contact Confirmation</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f2f4f6;
          margin: 0;
          padding: 20px;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: auto;
          background: #ffffff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }
      </style>
    </head>
    <body>
      <div class="container">
      <p>
          New Contact Form Submission from Online Auction
        </p>

        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>

      </div>
    </body>
    </html>
`;
