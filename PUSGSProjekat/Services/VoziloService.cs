using Microsoft.AspNetCore.Mvc;
using PUSGSProjekat.DTO;
using PUSGSProjekat.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.Services
{
    public class VoziloService : IVoziloService
    {
        private AppDbContext _dbContext;

        public VoziloService(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public bool DodajVozilo(Vozilo v)
        {
            var vozila = _dbContext.Vozila.Where(a => a.Id == v.Id).FirstOrDefault();

            if (vozila != null)
                return false;

            try
            {
                _dbContext.Vozila.Add(new Vozilo
                {
                    BrojSjedista = v.BrojSjedista,
                    Marka = v.Marka,
                    Model = v.Model,
                    GodinaProizvodnje = v.GodinaProizvodnje,
                    Slobodno = true,
                    Cijena = v.Cijena,
                    TipGoriva = v.TipGoriva,
                    TipVozila = v.TipVozila,
                    Transmisija = v.Transmisija,
                    Image = v.Image,
                    RentACarId = v.RentACarId
                });
            }
            catch(Exception e)
            {
                Console.WriteLine("Greska pri dodavanju vozila", e);
            }

            _dbContext.SaveChanges();
            return true;
        }

        public bool IzmijeniVozilo(Vozilo v)
        {
            try
            {
                var vozila = _dbContext.Vozila.FirstOrDefault(c => c.Id == v.Id);
                if (vozila != null)
                {
                    vozila.Image = v.Image;
                    vozila.Marka = v.Marka;
                    vozila.Model = v.Model;
                    vozila.Slobodno = v.Slobodno;
                    vozila.RentACarId = v.RentACarId;
                    vozila.TipGoriva = v.TipGoriva;
                    vozila.TipVozila = v.TipVozila;
                    vozila.Transmisija = v.Transmisija;
                    vozila.Cijena = v.Cijena;
                    vozila.BrojSjedista = v.BrojSjedista;
                    
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

        public bool ObrisiVozilo(int id)
        {
            try
            {
                var vozila = _dbContext.Vozila.Where(bc => bc.Id == id).FirstOrDefault();
                if (vozila != null)
                {
                    _dbContext.Vozila.Remove(vozila);
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
