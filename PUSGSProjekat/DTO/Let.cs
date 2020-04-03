using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.DTO
{
    public class Let
    {
        public int Id { get; set; }
        public DateTime DatumVrijemePolaska { get; set; }
        public DateTime DatumVrijemeDolaska { get; set; }
        public DateTime VrijemePutovanja { get; set; }
        public string DuzinaPutovanja { get; set; }
        public int BrojPresjedanja { get; set; }
        public List<LokacijePresjedanja> LokacijePresjedanja { get; set; }
        public float CijenaKarte { get; set; }
    }
}
