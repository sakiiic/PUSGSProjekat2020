using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PUSGSProjekat.DTO;
using PUSGSProjekat.Entities;

namespace PUSGSProjekat.Repositories
{
    public interface ILetService
    {
        List<Let> GetSviLetovi();
        bool ObrisiLet(int id);
        bool IzmijeniLet(int id, Let l);
        bool DodajLet(Let l);
        Let GetLet(int aviokompanijaId, int letId);
        List<Let> GetLetovi(int aviokompanijaId);
        List<Let> GetFlightDate(DateTime startDate, DateTime endDate, int aviokompanijaId);
        Let OtkaziLet(int letId);
        List<Let> PrikazRezervisanihLetova(int korisnikId);
        Let RezervisiLet(int letId, int korisnikId);
        Let GetFlight(DateTime datum, string destinacija);
        bool OcijeniLet(int letId, int ocjena);
    }
}
