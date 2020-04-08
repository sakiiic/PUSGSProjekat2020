using PUSGSProjekat.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.Repositories
{
    public interface IRentACarService
    {
        List<RentACar> getAllRentACars();
        RentACar getRentACarInfo(int RentACarId);
    }
}
