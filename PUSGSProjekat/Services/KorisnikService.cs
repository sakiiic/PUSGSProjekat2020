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

        public Korisnik GetKorisnik(int korisnikId)
        {
            try
            {
                return _dbContext.Korisnici.Where(k => k.Id == korisnikId).FirstOrDefault();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public bool IzmijeniKorisnika(int id, Korisnik k)
        {
            try
            {
                var korisnici = _dbContext.Korisnici.FirstOrDefault(c => c.Id == id);
                if (korisnici != null)
                {
                    korisnici.Name = k.Name;
                    korisnici.Surname = k.Surname;
                    korisnici.Password = k.Password;
                    korisnici.DateOfBirth = k.DateOfBirth;
                    korisnici.Address = k.Address;
                    korisnici.UserName = k.UserName;
                    korisnici.Email = k.Email;

                    _dbContext.SaveChanges();
                    return true;
                }
                return false;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
