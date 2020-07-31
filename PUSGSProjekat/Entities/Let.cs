﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.DTO
{
    public class Let
    {
        public int LetId { get; set; }
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

        [ForeignKey("Korisnik")]
        public int? KorisnikId { get; set; }

        [ForeignKey("Aviokompanija")]
        public int AviokompanijaId { get; set; }

        public bool CancelReservation()
        {
            return DatumVrijemePolaska == null
                || IsLessInHours(DateTime.Now, DatumVrijemePolaska, 3);
        }

        public static bool IsLessInHours(DateTime date, DateTime comparedTo, double minAllowedHourDiff = 3)
        {
            TimeSpan diff = comparedTo - date;
            return diff.TotalHours > minAllowedHourDiff;
        }
    }
}
