import nodemailer from 'nodemailer';
import { MailAdapter, sendMailData } from "../adapters/mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "45c304bdf36eb0",
    pass: "0fd286c22d42de"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
async sendMail({subject,body}: sendMailData){
   
  await transport.sendMail({
    from: 'Equipe Fedget <oiFeget.com>',
    to: 'Felipe Fama <lipehfama@gmail.com>',
    subject: subject,
    html: body,
  })
 
};
}