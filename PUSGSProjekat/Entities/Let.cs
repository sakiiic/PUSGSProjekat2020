using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using PUSGSProjekat.Entities;

namespace PUSGSProjekat.DTO
{
    public class Let
    {
        public int LetId { get; set; }
        public string Polazak { get; set; }
        public string Destinacija { get; set; }
        public DateTime DatumVrijemePolaska { get; set; }
        public DateTime DatumVrijemeDolaska { get; set; }
        public string VrijemePutovanja { get; set; }
        public string DuzinaPutovanja { get; set; }
        public int BrojPresjedanja { get; set; }
        public string LokacijePresjedanja { get; set; }
        public float CijenaKarte { get; set; }
        public DateTime DatumVrijemePovratka { get; set; }
        public int Ocjena { get; set; }
        public string NazivAviokompanije { get; set; }
        public int BrojSjedistaURedu { get; set; } = 4;

        public ICollection<FlightSeat> Seats { get; set; }
        public ICollection<FlightTicket> Tickets { get; set; }

        [ForeignKey("Korisnik")]
        public int? KorisnikId { get; set; }

        [ForeignKey("Aviokompanija")]
        public int AviokompanijaId { get; set; }

        public bool CancelReservation()
        {
            TimeSpan diff = DatumVrijemePolaska - DateTime.Now; 
            return DatumVrijemePolaska == null
                || diff.TotalHours > 3;
        }

        public Let() 
        {
            
        }


        public Let(Let flight)
        {
            if (flight == null)
                return;

            LetId = flight.LetId;
            Polazak = flight.Polazak;
            Destinacija = flight.Destinacija;
            DatumVrijemePolaska = flight.DatumVrijemePolaska;
            DatumVrijemeDolaska = flight.DatumVrijemeDolaska;
            VrijemePutovanja = flight.VrijemePutovanja;
            DuzinaPutovanja = flight.DuzinaPutovanja;
            BrojPresjedanja = flight.BrojPresjedanja;
            LokacijePresjedanja = flight.LokacijePresjedanja;
            CijenaKarte = flight.CijenaKarte;
            DatumVrijemePovratka = flight.DatumVrijemePovratka;
            Ocjena = flight.Ocjena;
            AviokompanijaId = flight.AviokompanijaId;
            NazivAviokompanije = flight.NazivAviokompanije;
            BrojSjedistaURedu = flight.BrojSjedistaURedu;

            Tickets = flight.Tickets.Select(t => new FlightTicket(t)).ToList();
            Seats = flight.Seats.Select(s => MapSeat(s, flight.Tickets)).ToList();

        }

        public static FlightSeat MapSeat(FlightSeat seat, ICollection<FlightTicket> tickets)
        {
            return new FlightSeat(seat)
            {
                ReservedById = tickets.FirstOrDefault(t => t.SeatId == seat.SeatId)?.SeatId
            };
        }
    }
}
