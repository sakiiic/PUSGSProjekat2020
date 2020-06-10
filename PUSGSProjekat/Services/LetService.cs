﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PUSGSProjekat.DTO;
using PUSGSProjekat.Entities;
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

        public List<Let> GetSviLetovi()
        {

            try
            {
                Let let = new Let();

                return _dbContext.Letovi.Select(
                    l => new Let()
                    {
                        LetId = l.LetId,
                        Destinacija = l.Destinacija,
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
                    Destinacija = l.Destinacija,
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
                    letovi.Destinacija = l.Destinacija;
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

        public List<Let> GetLetovi(int aviokompanijaId)
        {
            try
            {
                var letovi = _dbContext.Letovi.Where(l => l.AviokompanijaId == aviokompanijaId).ToList();

                return letovi;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public List<Let> GetFlightDate(DateTime startDate, DateTime endDate, int aviokompanijaId)
        {
            try
            {
                var letovi = _dbContext.Letovi.Where(l => l.AviokompanijaId == aviokompanijaId
                && l.DatumVrijemePolaska >= startDate && l.DatumVrijemePovratka <= endDate).ToList();

                return letovi;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public Let OtkaziLet(int letId)
        {
            try
            {
                var let = _dbContext.Letovi.Where(l => l.LetId == letId).FirstOrDefault();

                let.KorisnikId = null;


                _dbContext.SaveChanges();
                return let;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public List<Let> PrikazRezervisanihLetova(int korisnikId)
        {

            try
            {
                var letovi = _dbContext.Letovi.Where(a => a.KorisnikId == korisnikId).ToList();

                return letovi;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public Let RezervisiLet(int letId, int korisnikId)
        {
            try
            {
                var let = _dbContext.Letovi.Where(a => a.LetId == letId).FirstOrDefault();

                let.KorisnikId = korisnikId;

                _dbContext.SaveChanges();
                return let;

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        //public List<Let> PrikazRezervisanihLetova(int korisnikId)
        //{
        //    try
        //    {
        //        var rezervacije = _dbContext.Rezervacije.Where(l => l.KorisnikId == korisnikId).ToList();

        //        var letovi = new List<Let>();

        //        if (rezervacije != null)
        //        {
        //            letovi = rezervacije.Select(
        //            l => new Let()
        //            {
        //                LetId = l.LetId,
        //                Destinacija = l.Let.Destinacija,
        //                DatumVrijemePolaska = l.Let.DatumVrijemePolaska,
        //                DatumVrijemeDolaska = l.Let.DatumVrijemeDolaska,
        //                VrijemePutovanja = l.Let.VrijemePutovanja,
        //                DuzinaPutovanja = l.Let.DuzinaPutovanja,
        //                BrojPresjedanja = l.Let.BrojPresjedanja,
        //                LokacijePresjedanja = l.Let.LokacijePresjedanja,
        //                CijenaKarte = l.Let.CijenaKarte,
        //                AviokompanijaId = l.Let.AviokompanijaId

        //            }).ToList();
        //        }

        //        return letovi;
        //    }
        //    catch (Exception e)
        //    {
        //        Console.WriteLine(e);
        //        return null;
        //    }
        //}

        //public bool RezervisiLet(Rezervacije r)
        //{
        //    var rezervacije = _dbContext.Rezervacije.Where(a => a.IdRezervacije == r.IdRezervacije).FirstOrDefault();

        //    if (rezervacije != null)
        //        return false;

        //    try
        //    {
        //        _dbContext.Rezervacije.Add(new Rezervacije
        //        {
        //            IdRezervacije = r.IdRezervacije,
        //            LetId = r.LetId,
        //            KorisnikId = r.KorisnikId,
        //            //Let = r.Let

        //        });
        //    }
        //    catch (Exception e)
        //    {
        //        Console.WriteLine("Greska pri dodavanju rezervacije", e);
        //    }

        //    _dbContext.SaveChanges();
        //    return true;
        //}
    }
}
