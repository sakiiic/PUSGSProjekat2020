using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PUSGSProjekat.DTO;

namespace PUSGSProjekat.Repositories
{
    public interface IAviokompanijaService
    {
        List<Aviokompanija> getAllAviokompanije();
        Aviokompanija getAviokompanijaInfo(int AviokompanijaId);
        bool DodajAviokompaniju(Aviokompanija aviokompanija);
        List<Aviokompanija> GetAviokompanijeForCurrentUser(int userId);
        bool IzmijeniAviokompaniju(int id, Aviokompanija avio);
        bool ObrisiAviokompaniju(int id);
        bool OcijeniAviokompaniju(int id, int ocjena);
    }
}
