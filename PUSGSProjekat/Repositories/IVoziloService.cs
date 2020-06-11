using PUSGSProjekat.DTO;
using PUSGSProjekat.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.Repositories
{
    public interface IVoziloService
    {
        bool ObrisiVozilo(int id);
        bool IzmijeniVozilo(int id, Vozilo v);
        bool DodajVozilo(Vozilo v);
        Vozilo GetVozilo(int rentacarId, int voziloId);
        List<Vozilo> GetVozilaDate(DateTime startDate, DateTime endDate, int rentacarId);
        List<Vozilo> GetVozila(int rentacarId);
        Vozilo RezervisiVozilo(int voziloId, int korisnikId);
        List<Vozilo> PrikazRezervisanihVozila(int korisnikId);
        Vozilo OtkaziRezervaciju(int voziloId);
        bool DodajVoziloKorisniku(KorisnikVozilo objekat);
    }
}
