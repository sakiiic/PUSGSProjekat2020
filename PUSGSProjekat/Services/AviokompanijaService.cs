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
                        AviokompanijaId = a.AviokompanijaId,
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

        public Aviokompanija getAviokompanijaInfo(int id)
        {
            try
            {
                var aviokompanija = new Aviokompanija();
                var aviokompanije = _dbContext.Aviokompanije.Where(x => x.AviokompanijaId == id).FirstOrDefault();

                var flights = _dbContext.Letovi.Where(x => x.AviokompanijaId == id)
                    .Select(flight => new Let()
                    {
                        AviokompanijaId = flight.AviokompanijaId,
                        CijenaKarte = flight.CijenaKarte,
                        BrojPresjedanja = flight.BrojPresjedanja,
                        DatumVrijemePolaska = flight.DatumVrijemePolaska,
                        DatumVrijemeDolaska = flight.DatumVrijemeDolaska,
                        DuzinaPutovanja = flight.DuzinaPutovanja,
                        LokacijePresjedanja = flight.LokacijePresjedanja,
                        VrijemePutovanja = flight.VrijemePutovanja
                    }).ToList();

                aviokompanija.AviokompanijaId = aviokompanije.AviokompanijaId;
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

        public bool DodajAviokompaniju(Aviokompanija aviokompanija)
        {
            var servisi = _dbContext.Aviokompanije.ToList();
            var korisnici = _dbContext.Korisnici.ToList();

            var servis = _dbContext.Aviokompanije.Where(a => a.AviokompanijaId == aviokompanija.AviokompanijaId).FirstOrDefault();

            if (servis != null)
                return false;

            foreach (var s in servisi)
            {
                foreach (var k in korisnici)
                {
                    if (k.Id == s.KorisnikId)
                    {
                        return false;
                    }
                }
            }

            try
            {
                _dbContext.Aviokompanije.Add(new Aviokompanija
                {
                    Destinacije = aviokompanija.Destinacije,
                    Naziv = aviokompanija.Naziv,
                    Opis = aviokompanija.Opis,
                    Adresa = aviokompanija.Adresa,
                    KorisnikId = aviokompanija.KorisnikId
                });
            }
            catch (Exception e)
            {
                Console.WriteLine("Greska pri dodavanju servisa", e);
            }


            _dbContext.SaveChanges();
            return true;
        }


        public List<Aviokompanija> GetAviokompanijeForCurrentUser(int userId)
        {

            try
            {
                var aviokompanije = _dbContext.Aviokompanije.Where(a => a.KorisnikId == userId).ToList();
                var aviokompanija = new List<Aviokompanija>();

                if (aviokompanije != null)
                {
                    aviokompanija = aviokompanije.Select(
                    a => new Aviokompanija()
                    {
                        AviokompanijaId = a.AviokompanijaId,
                        Naziv = a.Naziv,
                        Adresa = a.Adresa,
                        Letovi = a.Letovi,
                        Destinacije = a.Destinacije,
                        Ocjena = a.Ocjena,
                        Opis = a.Opis,
                        KorisnikId = a.KorisnikId

                    }).ToList();
                }


                return aviokompanija;
            }
            catch (Exception e)
            {
                var message = e.Message;
                Console.WriteLine(message);
                return null;
            }
        }

        public bool IzmijeniAviokompaniju(int id, Aviokompanija avio)
        {
            try
            {
                var aviokompanija = _dbContext.Aviokompanije.FirstOrDefault(c => c.AviokompanijaId == id);
                if (aviokompanija != null)
                {
                    aviokompanija.Opis = avio.Opis;
                    aviokompanija.Naziv = avio.Naziv;
                    aviokompanija.Destinacije = avio.Destinacije;
                    aviokompanija.Adresa = avio.Adresa;

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

        public bool ObrisiAviokompaniju(int id)
        {
            try
            {
                var avio = _dbContext.Aviokompanije.Where(ak => ak.AviokompanijaId == id).FirstOrDefault();
                if (avio != null)
                {
                    _dbContext.Aviokompanije.Remove(avio);
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
