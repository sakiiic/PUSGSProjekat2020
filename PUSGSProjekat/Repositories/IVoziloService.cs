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
        bool IzmijeniVozilo(Vozilo v);
        bool DodajVozilo(Vozilo v);
    }
}
