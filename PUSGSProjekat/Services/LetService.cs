﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PUSGSProjekat.DTO;
using PUSGSProjekat.Entities;
using PUSGSProjekat.Repositories;
using System.Net.Mail;
using System.Net;

namespace PUSGSProjekat.Services
{
    public class LetService : ILetService
    {
        private AppDbContext _dbContext;

        public LetService(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Let> GetSviLetovi()
        {

            try
            {
                Let let = new Let();

                return _dbContext.Letovi.Select(
                    l => new Let()
                    {
                        LetId = l.LetId,
                        Destinacija = l.Destinacija,
                        DatumVrijemePolaska = l.DatumVrijemePolaska,
                        DatumVrijemeDolaska = l.DatumVrijemeDolaska,
                        VrijemePutovanja = l.VrijemePutovanja,
                        DuzinaPutovanja = l.DuzinaPutovanja,
                        BrojPresjedanja = l.BrojPresjedanja,
                        LokacijePresjedanja = l.LokacijePresjedanja,
                        CijenaKarte = l.CijenaKarte,
                        AviokompanijaId = l.AviokompanijaId
                  
                    }).ToList();
            }
            catch (Exception e)
            {
                var message = e.Message;
                Console.WriteLine(message);
                return null;
            }
        }


        private void sendMail(FlightSeat fs)
        {
            try
            {
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");

                mail.From = new MailAddress("nevermind43628@gmail.com");
                mail.To.Add("nevermind43628@gmail.com");
                mail.Subject = "Uspjesno ste rezervisali let!";
                mail.Body = "Ime i prezime: " + fs.Name + " " + fs.Surname + "\n" +
                    "Broj pasosa: " + fs.PassportNumber + "\n" +
                    "Broj sjedista u avionu: " + fs.SeatNumber + "\n";

                SmtpServer.Port = 587;
                SmtpServer.Credentials = new System.Net.NetworkCredential("nevermind43628@gmail.com", "relaxman");
                SmtpServer.EnableSsl = true;

                SmtpServer.Send(mail);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
        }

        public bool AddSeat(FlightSeat fs)
        {
            var seats = _dbContext.Seats.Where(s => s.SeatId == fs.SeatId).FirstOrDefault();

            if (seats != null)
                return false;

            try
            {
                _dbContext.Seats.Add(new FlightSeat
                {
                    SeatId = fs.SeatId,
                    LetId = fs.LetId,                  
                    SeatNumber = fs.SeatNumber,
                    ReservedById = fs.ReservedById,
                    PassportNumber = fs.PassportNumber,
                    Name = fs.Name,
                    Surname = fs.Surname
                });

                sendMail(fs);
            }
            catch (Exception e)
            {
                Console.WriteLine("Greska pri dodavanju sjedista", e);
            }

            _dbContext.SaveChanges();
            return true;
        }

        public List<int> GetSeats(int letId)
        {
            List<int> sn = new List<int>();

            try
            {
                var seats = _dbContext.Seats.Where(s => s.LetId == letId).ToList();

                foreach (var seat in seats)
                    sn.Add(seat.SeatNumber);

                return sn;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public bool DodajLet(Let l)
        {
            var letovi = _dbContext.Letovi.Where(a => a.LetId == l.LetId).FirstOrDefault();
            
            if (letovi != null)
                return false;

            try
            {
                _dbContext.Letovi.Add(new Let
                {
                    LetId = l.LetId,
                    Destinacija = l.Destinacija,
                    DatumVrijemePolaska = l.DatumVrijemePolaska,
                    DatumVrijemeDolaska = l.DatumVrijemeDolaska,
                    VrijemePutovanja = l.VrijemePutovanja,
                    DuzinaPutovanja = l.DuzinaPutovanja,
                    BrojPresjedanja = l.BrojPresjedanja,
                    LokacijePresjedanja = l.LokacijePresjedanja,
                    CijenaKarte = l.CijenaKarte,
                    AviokompanijaId = l.AviokompanijaId,
                    BrojSjedistaURedu = l.BrojSjedistaURedu,
                    Seats = l.Seats
                    
                });
                
            }
            catch (Exception e)
            {
                Console.WriteLine("Greska pri dodavanju leta", e);
            }

            //AddSeats(l.LetId, 50);

            _dbContext.SaveChanges();
            return true;
        }

        public bool IzmijeniLet(int id, Let l)
        {
            try
            {
                var letovi = _dbContext.Letovi.FirstOrDefault(c => c.LetId == id);
                if (letovi != null)
                {
                    letovi.Destinacija = l.Destinacija;
                    letovi.DatumVrijemePolaska = l.DatumVrijemePolaska;
                    letovi.DatumVrijemeDolaska = l.DatumVrijemeDolaska;
                    letovi.VrijemePutovanja = l.VrijemePutovanja;
                    letovi.DuzinaPutovanja = l.DuzinaPutovanja;
                    letovi.BrojPresjedanja = l.BrojPresjedanja;
                    letovi.LokacijePresjedanja = l.LokacijePresjedanja;
                    letovi.CijenaKarte = l.CijenaKarte;

                    _dbContext.SaveChanges();
                    return true;
                }
                return false;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public bool DeleteLet(int id)
        {
            try
            {
                var let = _dbContext.Letovi.Where(l => l.LetId == id).FirstOrDefault();
                if (let != null)
                {
                    _dbContext.Letovi.Remove(let);
                    _dbContext.SaveChanges();
                    return true;
                }

                return false;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public Let GetLet(int aviokompanijaId, int letId)
        {
            try
            {
                return _dbContext.Letovi.Where(a => a.AviokompanijaId == aviokompanijaId && a.LetId == letId).FirstOrDefault();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public Let GetFlight(DateTime datum, string destinacija)
        {
            try
            {
                return _dbContext.Letovi.Where(a => a.DatumVrijemePolaska == datum &&
                    a.Destinacija == destinacija).FirstOrDefault();

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public List<Let> GetLetovi(int aviokompanijaId)
        {
            try
            {
                var letovi = _dbContext.Letovi.Where(l => l.AviokompanijaId == aviokompanijaId).ToList();

                return letovi;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }


        public List<Let> GetLetic(int id)
        {
            try
            {
                var letovi = _dbContext.Letovi.Where(l => l.LetId == id).ToList();

                return letovi;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public List<Let> GetFlightDate(DateTime startDate, DateTime endDate, int aviokompanijaId)
        {
            try
            {
                var letovi = _dbContext.Letovi.Where(l => l.AviokompanijaId == aviokompanijaId
                && l.DatumVrijemePolaska >= startDate && l.DatumVrijemePovratka <= endDate).ToList();

                return letovi;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public Let OtkaziLet(int letId)
        {
            try
            {         
                var let = _dbContext.Letovi.Where(l => l.LetId == letId).FirstOrDefault();

                if (let.CancelReservation())
                {

                    int id = let.KorisnikId.GetValueOrDefault();

                    OtkaziRezervaciju(let.LetId, id);

                    let.KorisnikId = null;

                    _dbContext.SaveChanges();
                }
                else
                    let = null;

                return let;
                
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public List<Let> PrikazRezervisanihLetova(int korisnikId)
        {

            try
            {
                var letovi = _dbContext.Letovi.Where(a => a.KorisnikId == korisnikId).ToList();

                return letovi;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        private void sMail(Korisnik k, Let l)
        {
            try
            {
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");

                mail.From = new MailAddress("nevermind43628@gmail.com");
                mail.To.Add("nevermind43628@gmail.com");
                mail.Subject = "Uspjesno ste rezervisali let!";
                mail.Body = "Ime i prezime: " + k.Name + " " + k.Surname + "\n" +
                    "Let za: " + l.Destinacija + "\n" +
                    "Vrijeme polaska: " + l.DatumVrijemePolaska + "\n";

                SmtpServer.Port = 587;
                SmtpServer.Credentials = new System.Net.NetworkCredential("nevermind43628@gmail.com", "relaxman");
                SmtpServer.EnableSsl = true;

                SmtpServer.Send(mail);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
        }

        public Let RezervisiLet(int letId, int korisnikId)
        {
            try
            {
                var let = _dbContext.Letovi.Where(a => a.LetId == letId).FirstOrDefault();
                var korisnik = _dbContext.Korisnici.Where(a => a.Id == korisnikId).FirstOrDefault();

                let.KorisnikId = korisnikId;

                Rezervacije rez = new Rezervacije();
                rez.KorisnikId = korisnikId;
                rez.LetId = letId;

                Rezervisi(rez);

                _dbContext.SaveChanges();

                sMail(korisnik, let);

                return let;

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public Let FindFlight(int letId)
        {
            try
            {
                return _dbContext.Letovi.Where(a => a.LetId == letId).FirstOrDefault();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }


        public List<Let> GetReservedFlights(int id)
        {
            List<Let> flights = new List<Let>();

            try
            {
                var reservations = _dbContext.Seats.Where(s => s.ReservedById == id).ToList();

                foreach (var r in reservations)
                {
                    Let l = new Let();
                    l = FindFlight(r.LetId);
                    flights.Add(l);
                }

                return flights;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public List<Let> GetReservations(int id)
        {
            try
            {
                var letovi = _dbContext.Letovi.Where(l => l.LetId == id).ToList();

                return letovi;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public bool CancelReservation(int id)
        {
            try
            {
                var seat = _dbContext.Seats.Where(s => s.SeatId == id).FirstOrDefault();
                var let = _dbContext.Letovi.Where(l => l.LetId == seat.LetId).FirstOrDefault();

                if (let.CancelReservation())
                {
                    _dbContext.Seats.Remove(seat);
                    _dbContext.SaveChanges();
                    return true;
                }

                return false;
            }
            catch (Exception)
            {
                return false;
            }
        }

        //public List<Let> PrikazRezervisanihLetova(int korisnikId)
        //{
        //    try
        //    {
        //        var rezervacije = _dbContext.Rezervacije.Where(l => l.KorisnikId == korisnikId).ToList();

        //        var letovi = new List<Let>();

        //        if (rezervacije != null)
        //        {
        //            letovi = rezervacije.Select(
        //            l => new Let()
        //            {
        //                LetId = l.LetId,
        //                Destinacija = l.Let.Destinacija,
        //                DatumVrijemePolaska = l.Let.DatumVrijemePolaska,
        //                DatumVrijemeDolaska = l.Let.DatumVrijemeDolaska,
        //                VrijemePutovanja = l.Let.VrijemePutovanja,
        //                DuzinaPutovanja = l.Let.DuzinaPutovanja,
        //                BrojPresjedanja = l.Let.BrojPresjedanja,
        //                LokacijePresjedanja = l.Let.LokacijePresjedanja,
        //                CijenaKarte = l.Let.CijenaKarte,
        //                AviokompanijaId = l.Let.AviokompanijaId

        //            }).ToList();
        //        }

        //        return letovi;
        //    }
        //    catch (Exception e)
        //    {
        //        Console.WriteLine(e);
        //        return null;
        //    }
        //}

        public bool OtkaziRezervaciju(int letId, int korisnikId)
        {
            try
            {
                var rez = _dbContext.Rezervacije.Where(r => r.LetId == letId && r.KorisnikId == korisnikId).FirstOrDefault();
                if (rez != null)
                {
                    _dbContext.Rezervacije.Remove(rez);
                    _dbContext.SaveChanges();
                    return true;
                }

                return false;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public bool Rezervisi(Rezervacije r)
        {
            var rezervacije = _dbContext.Rezervacije.Where(a => a.IdRezervacije == r.IdRezervacije).FirstOrDefault();

            if (rezervacije != null)
                return false;

            try
            {
                _dbContext.Rezervacije.Add(new Rezervacije
                {
                    IdRezervacije = r.IdRezervacije,
                    LetId = r.LetId,
                    KorisnikId = r.KorisnikId,

                });
            }
            catch (Exception e)
            {
                Console.WriteLine("Greska pri dodavanju rezervacije", e);
            }

            _dbContext.SaveChanges();
            return true;
        }

        public bool OcijeniLet(int letId, int ocjena)
        {
            try
            {
                var let = _dbContext.Letovi.Where(a => a.LetId == letId).FirstOrDefault();

                let.Ocjena = ocjena;

                _dbContext.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return false;
            }
        }
    }
}
