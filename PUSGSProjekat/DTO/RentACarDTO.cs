﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.DTO
{
    public class RentACarDTO
    {
        public int Id { get; set; }
        public string Naziv { get; set; }
        public string Adresa { get; set; }
        public string Opis { get; set; }
        public float Ocjena { get; set; }
        public List<Vozilo> Vozila { get; set; }
        public string Lokacije { get; set; }
    }
}
