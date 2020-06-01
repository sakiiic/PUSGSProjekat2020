using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.Entities
{
    public class Cjenovnik
    {
        public int CjenovnikId { get; set; }
        public DateTime DatumOd { get; set; }
        public DateTime DatumDo { get; set; }
        [ForeignKey("RentACar")]
        public int RentACarId { get; set; }
    }
}
