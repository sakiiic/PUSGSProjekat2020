using Microsoft.AspNetCore.Identity;
using PUSGSProjekat.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.DTO
{
    public class Korisnik : IdentityUser<int>
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Password { get; set; }
        public DateTime DateOfBirth { get; set; }
        public Address Address { get; set; }
        public ICollection<UserRole> UserRoles { get; set; }
        public bool? ImaServis { get; set; } //za admine, da li imaju servis, ako nemaju mogu da dodaju svoj, u suprotnom ne mogu
        public ICollection<Vozilo> Vozila { get; set; } //za korisnike koji mogu da imaju listu rezervisanih vozila
    }
}
