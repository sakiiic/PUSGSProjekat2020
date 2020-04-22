using Microsoft.AspNetCore.Identity;
using PUSGSProjekat.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.Entities
{
    public class UserRole : IdentityUserRole<int>
    {
        public Korisnik Korisnik { get; set; }
        public Role Role { get; set; }
    }
}
