using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using PUSGSProjekat.DTO;

namespace PUSGSProjekat.Entities
{
    public class Rezervacije
    {
        [Key]
        public int IdRezervacije { get; set; }
        public Korisnik Korisnik { get; set; }
        public Let Let { get; set; }

        [ForeignKey("Korisnik")]
        public int KorisnikId { get; set; }

        [ForeignKey("Let")]
        public int LetId { get; set; }
    }
}
