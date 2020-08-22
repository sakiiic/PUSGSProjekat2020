using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PUSGSProjekat.DTO;
using PUSGSProjekat.Repositories;

namespace PUSGSProjekat.Services
{
    public class KorisnikService : IKorisnikService
    {
        private AppDbContext _dbContext;

        public KorisnikService(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Korisnik> getAllUsers()
        {
            try
            {
                return _dbContext.Korisnici.Select(
                    k => new Korisnik()
                    {
                        Name = k.Name,
                        Surname = k.Surname,
                        UserName = k.UserName,
                        Email = k.Email

                    }).ToList();
            }
            catch (Exception e)
            {
                var message = e.Message;
                Console.WriteLine(message);
                return null;
            }
        }
    }
}
