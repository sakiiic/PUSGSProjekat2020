using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using PUSGSProjekat.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.Repositories
{
    public static class Extensions
    {
        public static async Task<Korisnik> GetUserById(this UserManager<Korisnik> userManager, int id)
        {
            var users = userManager.Users;
            return await userManager.Users.Include(u => u.Address).FirstOrDefaultAsync(u => u.Id == id);
        }
    }
}
