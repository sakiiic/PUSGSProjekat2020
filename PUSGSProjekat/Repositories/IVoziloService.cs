using PUSGSProjekat.DTO;
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
        List<Vozilo> getVozila();
    }
}
