using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.DTO
{
    public class Aviokompanija
    {
        public int AviokompanijaId { get; set; }
        public string Naziv { get; set; }
        public string Adresa { get; set; }
        public string Opis { get; set; }
        public float Ocjena { get; set; }
        public string Destinacije { get; set; }
        public ICollection<Let> Letovi { get; set; }

        [ForeignKey("Korisnik")]
        public int KorisnikId { get; set; }
    }
}
