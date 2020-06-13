using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace PUSGSProjekat.Helper
{
    public static class EmailService
    {
        public async static void SendEmail(string text, string toEmail)
        {
            var smtpClient = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true
            };

            smtpClient.UseDefaultCredentials = false;
            smtpClient.Credentials = new NetworkCredential("saracobovic725@gmail.com", "sara1996");
            smtpClient.EnableSsl = true;

            using (var message = new MailMessage("saracobovic725@gmail.com", toEmail)
            {
                Subject = "Public Transport - Ticket",
                Body = text
            })
            {
                try
                {
                    await smtpClient.SendMailAsync(message);
                }
                catch (Exception e)
                {
                    Trace.WriteLine($"Error while sedding mail: {e.Message}");
                }
            }
        }
    }
}
