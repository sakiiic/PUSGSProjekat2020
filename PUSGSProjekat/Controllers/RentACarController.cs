using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PUSGSProjekat.DTO;
using PUSGSProjekat.Repositories;

namespace PUSGSProjekat.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RentACarController : ControllerBase
    {
        private IRentACarService _rentACarService;

        public RentACarController(IRentACarService rentACarService)
        {
            _rentACarService = rentACarService;
        }
        /// <summary>
        /// Get all Rent a cars
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetRentACar")]
        public List<RentACar> GetAllRentACars()
        {
            return _rentACarService.getAllRentACars();
        }

        [HttpGet("GetRentACarInfo/{rentacarId}")]
        public RentACar GetRentACarInfo(int rentacarId)
        {
            return _rentACarService.getRentACarInfo(rentacarId);
        }

        [HttpPost("DodajRentacarServis")]
        public async Task<IActionResult> DodajVozilo([FromBody] RentACar rent)
        {
            var x = _rentACarService.DodajRentacarServis(rent);

            return Ok(x);
        }

        [HttpPatch("IzmijeniRentacarServis/{rentacarId}")]
        public async Task<IActionResult> IzmijeniRentacarServis(int rentacarId, [FromBody] RentACar rent)
        {
            var x = _rentACarService.IzmijeniRentacarServis(rentacarId, rent);

            return Ok(x);
        }

        [HttpDelete("ObrisiRentacarServis/{rentacarId}")]
        public async Task<IActionResult> ObrisiRentacarServis(int rentacarId)
        {
            var x = _rentACarService.ObrisiRentacarServis(rentacarId);

            return Ok(x);
        }

        [HttpGet("getRentaCarsForCurrentUser/{userId}")]
        public List<RentACar> GetRentaCarsForCurrentUser(int userId)
        {
            return _rentACarService.GetRentaCarsForCurrentUser(userId);
        }

        [HttpPost("OcijeniServis")]
        public bool OcijeniServis(int rentacarId, int ocjena)
        {
            var x = _rentACarService.OcijeniServis(rentacarId, ocjena);

            return x;
        }
    } 
}