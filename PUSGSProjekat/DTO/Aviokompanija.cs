using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.DTO
{
    public class Aviokompanija
    {
        public string Naziv { get; set; }
        public string Adresa { get; set; }
        public string Opis { get; set; }
        public float Ocjena { get; set; }
        public List<string> Destinacije { get; set; }
    }
}
