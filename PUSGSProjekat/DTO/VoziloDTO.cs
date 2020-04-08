using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.DTO
{
    public class VoziloDTO
    {
        public int Id { get; set; }
        public string Naziv { get; set; }
        public string Marka { get; set; }
        public string Model { get; set; }
        public int GodinaProizvodnje { get; set; }
        public int BrojSjedista { get; set; }
        public string TipVozila { get; set; }
    }
}
