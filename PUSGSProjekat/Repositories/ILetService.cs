using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PUSGSProjekat.DTO;

namespace PUSGSProjekat.Repositories
{
    public interface ILetService
    {
        List<Let> getLetovi();
        bool ObrisiLet(int id);
        bool IzmijeniLet(int id, Let l);
        bool DodajLet(Let l);
        Let GetLet(int aviokompanijaId, int letId);
    }
}
