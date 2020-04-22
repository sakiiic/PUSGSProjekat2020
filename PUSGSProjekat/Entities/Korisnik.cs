using Microsoft.AspNetCore.Identity;
using PUSGSProjekat.Entities;
using System;
using System.Collections.Generic;
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
    }
}
