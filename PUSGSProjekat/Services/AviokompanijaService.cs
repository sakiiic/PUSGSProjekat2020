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

        public Aviokompanija getAviokompanijaInfo(int AviokompanijaId)
        {
            try
            {
                var aviokompanija = new Aviokompanija();
                var aviokompanije = _dbContext.Aviokompanije.Where(x => x.Id == AviokompanijaId).FirstOrDefault();

                var flights = _dbContext.Letovi.Where(x => x.AviokompanijaId == AviokompanijaId)
                    .Select(flight => new Let()
                    {
                        Id = flight.Id,
                        CijenaKarte = flight.CijenaKarte,
                        BrojPresjedanja = flight.BrojPresjedanja,
                        DatumVrijemePolaska = flight.DatumVrijemePolaska,
                        DatumVrijemeDolaska = flight.DatumVrijemeDolaska,
                        DuzinaPutovanja = flight.DuzinaPutovanja,
                        LokacijePresjedanja = flight.LokacijePresjedanja,
                        VrijemePutovanja = flight.VrijemePutovanja
                    }).ToList();

                aviokompanija.Id = aviokompanije.Id;
                aviokompanija.Adresa = aviokompanije.Adresa;
                aviokompanija.Destinacije = aviokompanije.Destinacije;
                aviokompanija.Naziv = aviokompanije.Naziv;
                aviokompanija.Ocjena = aviokompanije.Ocjena;
                aviokompanija.Opis = aviokompanije.Opis;
                aviokompanija.Letovi = flights;

                return aviokompanija;
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
