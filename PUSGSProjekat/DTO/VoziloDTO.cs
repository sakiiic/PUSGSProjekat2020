﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.DTO
{
    public class VoziloDTO
    {
        public int Id { get; set; }
        public string Marka { get; set; }
        public string Model { get; set; }
        public int GodinaProizvodnje { get; set; }
        public int BrojSjedista { get; set; }
        public string TipVozila { get; set; }
        public bool Slobodno { get; set; }
        public string TipGoriva { get; set; }
        public string Transmisija { get; set; }
        public float Cijena { get; set; }
        public string Image { get; set; }
        public DateTime DatumOd { get; set; }
        public DateTime DatumDo { get; set; }
        public Korisnik Korisnik { get; set; }
    }
}
