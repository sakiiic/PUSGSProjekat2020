using PUSGSProjekat.DTO;
using PUSGSProjekat.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.Services
{
    public class AviokompanijaService : IAviokompanijaService
    {
        private AppDbContext _dbContext;

        public AviokompanijaService(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Aviokompanija> getAllAviokompanije()
        {
            try
            {
                return _dbContext.Aviokompanije.Select(
                    a => new Aviokompanija()
                    {
                        Id = a.Id,
                        Naziv = a.Naziv,
                        Adresa = a.Adresa,
                        Opis = a.Opis,
                        Ocjena = a.Ocjena,
                        Destinacije = a.Destinacije

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
