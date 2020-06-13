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

        public bool DodajRentacarServis(RentACar rent)
        {
            var servisi = _dbContext.RentACar.ToList();
            var korisnici = _dbContext.Korisnici.ToList();

            var servis = _dbContext.RentACar.Where(a => a.RentacarId == rent.RentacarId).FirstOrDefault();

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
                _dbContext.RentACar.Add(new RentACar
                {
                    Lokacije = rent.Lokacije,
                    Naziv = rent.Naziv,
                    Opis = rent.Opis,
                    Adresa = rent.Adresa,
                    KorisnikId = rent.KorisnikId
                });
            }
            catch (Exception e)
            {
                Console.WriteLine("Greska pri dodavanju servisa", e);
            }
                    
     
            _dbContext.SaveChanges();
            return true;
        }

        public List<RentACar> getAllRentACars()
        {
            try
            {
                return _dbContext.RentACar.Select(
                    r => new RentACar()
                    {
                        RentacarId = r.RentacarId,
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

        public List<RentACar> GetRentaCarsForCurrentUser(int userId)
        {
            
            try
            {
                var rentacars = _dbContext.RentACar.Where(a => a.KorisnikId == userId).ToList();
                var rentacar = new List<RentACar>();

                if (rentacars != null)
                {
                    rentacar = rentacars.Select(
                    r => new RentACar()
                    {
                        RentacarId = r.RentacarId,
                        Naziv = r.Naziv,
                        Adresa = r.Adresa,
                        Vozila = r.Vozila,
                        Lokacije = r.Lokacije,
                        Ocjena = r.Ocjena,
                        Opis = r.Opis,
                        KorisnikId = r.KorisnikId

                    }).ToList();
                }
               

                return rentacar; 
            }
            catch (Exception e)
            {
                var message = e.Message;
                Console.WriteLine(message);
                return null;
            }
        }


        public RentACar getRentACarInfo(int RentACarId)
        {
            try
            {
                var rentACar = new RentACar();
                var rentACars = _dbContext.RentACar.Where(x => x.RentacarId == RentACarId).FirstOrDefault();

                var car = _dbContext.Vozila.Where(x => x.RentACarId == RentACarId)
                    .Select(cars => new Vozilo()
                    {
                        RentACarId = cars.RentACarId,
                        Marka = cars.Marka,
                        Model = cars.Model,
                        GodinaProizvodnje = cars.GodinaProizvodnje,
                        BrojSjedista = cars.BrojSjedista,
                        TipVozila = cars.TipVozila,
                        Cijena = cars.Cijena,
                        Image = cars.Image,
                        Slobodno = cars.Slobodno,
                        TipGoriva = cars.TipGoriva,
                        Transmisija = cars.Transmisija,
                        VoziloId = cars.VoziloId
                    }).ToList();

                rentACar.RentacarId = rentACars.RentacarId;
                rentACar.Adresa = rentACars.Adresa;
                rentACar.Lokacije = rentACars.Lokacije;
                rentACar.Naziv = rentACars.Naziv;
                rentACar.Ocjena = rentACars.Ocjena;
                rentACar.Opis = rentACars.Opis;
                rentACar.Ocjena = rentACars.Ocjena;
                rentACar.Vozila = car;
                
                return rentACar;
            }
            catch (Exception e)
            {
                var message = e.Message;
                Console.WriteLine(message);
                return null;
            }
        }

        public bool IzmijeniRentacarServis(int id, RentACar rent)
        {
            try
            {
                var rentacar = _dbContext.RentACar.FirstOrDefault(c => c.RentacarId == id);
                if (rentacar != null)
                {
                    rentacar.Opis = rent.Opis;
                    rentacar.Naziv = rent.Naziv;
                    rentacar.Lokacije = rent.Lokacije;
                    rentacar.Adresa = rent.Adresa;

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

        public bool ObrisiRentacarServis(int id)
        {
            try
            {
                var rent = _dbContext.RentACar.Where(bc => bc.RentacarId == id).FirstOrDefault();
                if (rent != null)
                {
                    _dbContext.RentACar.Remove(rent);
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

        public bool OcijeniServis(int rentacarId, int ocjena)
        {
            try
            {
                var servis = _dbContext.RentACar.Where(a => a.RentacarId == rentacarId).FirstOrDefault();

                servis.Ocjena = ocjena;

                _dbContext.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return false;
            }
        }
    }
}
