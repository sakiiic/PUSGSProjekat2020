﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.DTO
{
    public class Vozilo
    {
        public int Id { get; set; }
        public string Naziv { get; set; }
        public string Marka { get; set; }
        public string Model { get; set; }
        public int GodinaProizvodnje { get; set; }
        public int BrojSjedista { get; set; }
        public string TipVozila { get; set; }

        [ForeignKey("RentACar")]
        public int RentACarId { get; set; }
        public virtual RentACar RentACar { get; set; }

    }
}
