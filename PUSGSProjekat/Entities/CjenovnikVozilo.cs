using PUSGSProjekat.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.Entities
{
    public class CjenovnikVozilo
    {
        public int CjenovnikVoziloId { get; set; }
        public Vozilo Vozilo { get; set; }
        public Cjenovnik Cjenovnik { get; set; }
        public decimal Cijena { get; set; }
    }
}
