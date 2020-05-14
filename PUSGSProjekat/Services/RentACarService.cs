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

        public RentACar getRentACarInfo(int RentACarId)
        {
            try
            {
                var rentACar = new RentACar();
                var rentACars = _dbContext.RentACar.Where(x => x.Id == RentACarId).FirstOrDefault();

                var car = _dbContext.Vozila.Where(x => x.RentACarId == RentACarId)
                    .Select(cars => new Vozilo()
                    {
                        Id = cars.Id,
                        Marka = cars.Marka,
                        Model = cars.Model,
                        GodinaProizvodnje = cars.GodinaProizvodnje,
                        BrojSjedista = cars.BrojSjedista,
                        TipVozila = cars.TipVozila,
                        Cijena = cars.Cijena,
                        Image = cars.Image,
                        Slobodno = cars.Slobodno,
                        TipGoriva = cars.TipGoriva,
                        Transmisija = cars.Transmisija
                    }).ToList();

                rentACar.Id = rentACars.Id;
                rentACar.Adresa = rentACars.Adresa;
                rentACar.Lokacije = rentACars.Lokacije;
                rentACar.Naziv = rentACars.Naziv;
                rentACar.Ocjena = rentACars.Ocjena;
                rentACar.Opis = rentACars.Opis;
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
    }
}
