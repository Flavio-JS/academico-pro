import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

import { SendEmailDto } from './dto/send-email.dto';
import { EmailOptions } from './interfaces/email-options.interface';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async sendEmail(options: SendEmailDto): Promise<void> {
    const mailOptions: EmailOptions = {
      from: process.env.EMAIL_FROM || '"Academico Pro" <no-reply@academicopro.com>',
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
    };

    try {
      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  }
}
