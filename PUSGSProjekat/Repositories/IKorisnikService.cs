using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PUSGSProjekat.DTO;

namespace PUSGSProjekat.Repositories
{
    public interface IKorisnikService
    {
        List<Korisnik> getAllUsers();
    }
}
