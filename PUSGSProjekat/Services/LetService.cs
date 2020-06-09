using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PUSGSProjekat.DTO;
using PUSGSProjekat.Repositories;

namespace PUSGSProjekat.Services
{
    public class LetService : ILetService
    {
        private AppDbContext _dbContext;

        public LetService(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Let> getLetovi()
        {

            try
            {
                Let let = new Let();

                return _dbContext.Letovi.Select(
                    l => new Let()
                    {
                        LetId = l.LetId,
                        DatumVrijemePolaska = l.DatumVrijemePolaska,
                        DatumVrijemeDolaska = l.DatumVrijemeDolaska,
                        VrijemePutovanja = l.VrijemePutovanja,
                        DuzinaPutovanja = l.DuzinaPutovanja,
                        BrojPresjedanja = l.BrojPresjedanja,
                        LokacijePresjedanja = l.LokacijePresjedanja,
                        CijenaKarte = l.CijenaKarte,
                        AviokompanijaId = l.AviokompanijaId
                    }).ToList();
            }
            catch (Exception e)
            {
                var message = e.Message;
                Console.WriteLine(message);
                return null;
            }
        }

        public bool DodajLet(Let l)
        {
            var letovi = _dbContext.Letovi.Where(a => a.LetId == l.LetId).FirstOrDefault();

            if (letovi != null)
                return false;

            try
            {
                _dbContext.Letovi.Add(new Let
                {
                    LetId = l.LetId,
                    DatumVrijemePolaska = l.DatumVrijemePolaska,
                    DatumVrijemeDolaska = l.DatumVrijemeDolaska,
                    VrijemePutovanja = l.VrijemePutovanja,
                    DuzinaPutovanja = l.DuzinaPutovanja,
                    BrojPresjedanja = l.BrojPresjedanja,
                    LokacijePresjedanja = l.LokacijePresjedanja,
                    CijenaKarte = l.CijenaKarte,
                    AviokompanijaId = l.AviokompanijaId

                });
            }
            catch (Exception e)
            {
                Console.WriteLine("Greska pri dodavanju leta", e);
            }

            _dbContext.SaveChanges();
            return true;
        }

        public bool IzmijeniLet(int id, Let l)
        {
            try
            {
                var letovi = _dbContext.Letovi.FirstOrDefault(c => c.LetId == id);
                if (letovi != null)
                {
                    letovi.DatumVrijemePolaska = l.DatumVrijemePolaska;
                    letovi.DatumVrijemeDolaska = l.DatumVrijemeDolaska;
                    letovi.VrijemePutovanja = l.VrijemePutovanja;
                    letovi.DuzinaPutovanja = l.DuzinaPutovanja;
                    letovi.BrojPresjedanja = l.BrojPresjedanja;
                    letovi.LokacijePresjedanja = l.LokacijePresjedanja;
                    letovi.CijenaKarte = l.CijenaKarte;

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

        public bool ObrisiLet(int id)
        {
            try
            {
                var let = _dbContext.Letovi.Where(bc => bc.LetId == id).FirstOrDefault();
                if (let != null)
                {
                    _dbContext.Letovi.Remove(let);
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

        public Let GetLet(int aviokompanijaId, int letId)
        {
            try
            {
                return _dbContext.Letovi.Where(a => a.AviokompanijaId == aviokompanijaId && a.LetId == letId).FirstOrDefault();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }
    }
}
