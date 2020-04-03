using Microsoft.AspNetCore.Mvc;
using PUSGSProjekat.DTO;
using PUSGSProjekat.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.Services
{
    public class RentACarService : IRentACarService
    {
        private AppDbContext _dbContext;

        public RentACarService(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<RentACar> getAllRentACars()
        {
            try
            {
                return _dbContext.RentACar.Select(
                    r => new RentACar()
                    {
                        Id = r.Id,
                        Naziv = r.Naziv,
                        Adresa = r.Adresa,
                        Vozila = r.Vozila,
                        Lokacije = r.Lokacije, 
                        Ocjena = r.Ocjena,
                        Opis = r.Opis

                    }).ToList();
            }
            catch(Exception e)
            {
                var message = e.Message;
                Console.WriteLine(message);
                return null;
            }
        }
    }
}
