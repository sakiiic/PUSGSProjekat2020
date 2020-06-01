﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.DTO
{
    public class RentACar
    {
        public int RentacarId { get; set; }
        public string Naziv { get; set; }
        public string Adresa { get; set; }
        public string Opis { get; set; }
        public float Ocjena { get; set; }
        public virtual ICollection<Vozilo> Vozila { get; set; }
        public string Lokacije { get; set; }

        [ForeignKey("Korisnik")]
        public int KorisnikId { get; set; }
    }
}
