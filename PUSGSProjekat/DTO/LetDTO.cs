using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.DTO
{
    public class LetDTO
    {
        public int LetId { get; set; }
        public DateTime DatumVrijemePolaska { get; set; }
        public DateTime DatumVrijemeDolaska { get; set; }
        public string VrijemePutovanja { get; set; }
        public string DuzinaPutovanja { get; set; }
        public int BrojPresjedanja { get; set; }
        public string LokacijePresjedanja { get; set; }
        public float CijenaKarte { get; set; }
        public Korisnik Korisnik { get; set; }
        public DateTime DatumVrijemePovratka { get; set; }

    }
}
