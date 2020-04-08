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

        [HttpGet("GetRentACarInfo/{rentACarId}")]
        public RentACar GetRentACarInfo(int rentACarId)
        {
            return _rentACarService.getRentACarInfo(rentACarId);
        }
    } 
}