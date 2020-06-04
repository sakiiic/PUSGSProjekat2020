using PUSGSProjekat.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.Repositories
{
    public interface IAdminService
    {
        Task<Korisnik> GetUser(int id);
    }
}
