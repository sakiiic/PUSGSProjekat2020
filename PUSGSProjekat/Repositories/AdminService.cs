using Microsoft.AspNetCore.Identity;
using PUSGSProjekat.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.Repositories
{
    public class AdminService : IAdminService
    {
        private readonly UserManager<Korisnik> _userManager;

        public async Task<Korisnik> GetUser(int id)
        {
            return await _userManager.GetUserById(id);
        }
    }
}
