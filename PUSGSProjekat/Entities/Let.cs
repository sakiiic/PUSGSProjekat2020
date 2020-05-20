using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.DTO
{
    public class Let
    {
        public int Id { get; set; }
        public DateTime DatumVrijemePolaska { get; set; }
        public DateTime DatumVrijemeDolaska { get; set; }
        public string VrijemePutovanja { get; set; }
        public string DuzinaPutovanja { get; set; }
        public int BrojPresjedanja { get; set; }
        public string LokacijePresjedanja { get; set; }
        public float CijenaKarte { get; set; }
        public string NazivAviokompanije { get; set; }

        [ForeignKey("Aviokompanija")]
        public int AviokompanijaId { get; set; }
        public virtual Aviokompanija Aviokompanija { get; set; }
    }
}
