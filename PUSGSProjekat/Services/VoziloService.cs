using Microsoft.AspNetCore.Mvc;
using PUSGSProjekat.DTO;
using PUSGSProjekat.Entities;
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
            var vozila = _dbContext.Vozila.Where(a => a.VoziloId == v.VoziloId).FirstOrDefault();

            if (vozila != null)
                return false;

            try
            {
                _dbContext.Vozila.Add(new Vozilo
                {
                    VoziloId = v.VoziloId,
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

        public bool DodajVoziloKorisniku(KorisnikVozilo objekat)
        {
            var vozilo = _dbContext.Vozila.Where(a => a.VoziloId == objekat.VoziloId).FirstOrDefault();

            if (vozilo == null)
                return false;

            try
            {
                _dbContext.KorisnikVozilo.Add(new KorisnikVozilo
                {
                    KorisnikId = objekat.KorisnikId,
                    VoziloId = vozilo.VoziloId,
                    Name = objekat.Name,
                    Surname = objekat.Surname,
                    Username = objekat.Username,
                    City = objekat.City,
                    Street = objekat.Street,
                    Number = objekat.Number,
                    Email = objekat.Email,
                    DatumRodjenja = objekat.DatumRodjenja
                });

                _dbContext.SaveChanges();
                return true;
            }
            catch(Exception e)
            {
                Console.WriteLine(e);
                return false;
            }
        }

        public List<Vozilo> GetVozila(int rentacarId)
        {
            try
            {
                var vozila = _dbContext.Vozila.Where(a => a.RentACarId == rentacarId).ToList();

                return vozila;
            }
            catch(Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public List<Vozilo> GetVozilaDate(DateTime startDate, DateTime endDate, int rentacarId)
        {
            try
            {
                var vozila = _dbContext.Vozila.Where(a => a.RentACarId == rentacarId
                && a.DatumOd >= startDate && a.DatumDo <= endDate).ToList();

                return vozila;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public Vozilo GetVozilo(int rentacarId, int voziloId)
        {
            try
            {
                return _dbContext.Vozila.Where(a => a.RentACarId == rentacarId && a.VoziloId == voziloId).FirstOrDefault();
            }
            catch(Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public bool IzmijeniVozilo(int id, Vozilo v)
        {
            try
            {
                var vozila = _dbContext.Vozila.FirstOrDefault(c => c.VoziloId == id);
                if (vozila != null)
                {
                    vozila.Image = vozila.Image;
                    vozila.Marka = v.Marka;
                    vozila.Model = v.Model;
                    vozila.Slobodno = vozila.Slobodno;
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
                var vozila = _dbContext.Vozila.Where(bc => bc.VoziloId == id).FirstOrDefault();
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

        public bool OcijeniVozilo(int voziloId, int ocjena)
        {
            try
            {
                var vozilo = _dbContext.Vozila.Where(a => a.VoziloId == voziloId).FirstOrDefault();

                vozilo.Ocjena = ocjena;

                _dbContext.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return false;
            }
        }

        public Vozilo OtkaziRezervaciju(int voziloId)
        {
            try
            {
                var vozilo = _dbContext.Vozila.Where(a => a.VoziloId == voziloId ).FirstOrDefault();

                vozilo.Slobodno = true;
                vozilo.KorisnikId = null;


                _dbContext.SaveChanges();
                return vozilo;
            }
            catch(Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public List<Vozilo> PrikazRezervisanihVozila(int korisnikId)
        {

            try
            {
                var vozila = _dbContext.Vozila.Where(a => a.KorisnikId == korisnikId).ToList();

                return vozila;
            }
            catch(Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public Vozilo RezervisiVozilo(int voziloId, int korisnikId)
        {
            try
            {
                var vozilo = _dbContext.Vozila.Where(a => a.VoziloId == voziloId).FirstOrDefault();

                vozilo.Slobodno = false;
                vozilo.KorisnikId = korisnikId;
                
                
                _dbContext.SaveChanges();
                return vozilo;

            }
            catch(Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }
    }
}
