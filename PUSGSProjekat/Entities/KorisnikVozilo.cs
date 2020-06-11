using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.Entities
{
    public class KorisnikVozilo
    {
        [Key]
        public int Id { get; set; }
        public int KorisnikId { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public string Number { get; set; }
        public DateTime DatumRodjenja { get; set; }

        [ForeignKey("Vozilo")]
        public int VoziloId { get; set; }
    }
}
