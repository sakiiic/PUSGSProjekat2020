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
    public class AvioKompanijaController : ControllerBase
    {
        private IAviokompanijaService _avioKompanijaService;

        public AvioKompanijaController(IAviokompanijaService avioKompanijaService)
        {
            _avioKompanijaService = avioKompanijaService;
        }
        /// <summary>
        /// Get all Aviokompanije
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetAviokompanija")]
        public List<Aviokompanija> GetAllAviokompanije()
        {
            return _avioKompanijaService.getAllAviokompanije();
        }

        [HttpGet("GetAviokompanijaInfo/{aviokompanijaId}")]
        public Aviokompanija GetAviokompanijaInfo(int aviokompanijaId)
        {
            return _avioKompanijaService.getAviokompanijaInfo(aviokompanijaId);
        }

        [HttpPost("DodajAviokompaniju")]
        public async Task<IActionResult> DodajAviokompaniju([FromBody] Aviokompanija avio)
        {
            var x = _avioKompanijaService.DodajAviokompaniju(avio);

            return Ok(x);
        }

        [HttpPatch("IzmijeniAviokompaniju/{aviokompanijaId}")]
        public async Task<IActionResult> IzmijeniAviokompaniju(int aviokompanijaId, [FromBody] Aviokompanija avio)
        {
            var x = _avioKompanijaService.IzmijeniAviokompaniju(aviokompanijaId, avio);

            return Ok(x);
        }

        [HttpDelete("ObrisiAviokompaniju/{aviokompanijaId}")]
        public async Task<IActionResult> ObrisiAviokompaniju(int aviokompanijaId)
        {
            var x = _avioKompanijaService.ObrisiAviokompaniju(aviokompanijaId);

            return Ok(x);
        }

        [HttpGet("GetAviokompanijeForCurrentUser/{userId}")]
        public List<Aviokompanija> GetAviokompanijeForCurrentUser(int userId)
        {
            return _avioKompanijaService.GetAviokompanijeForCurrentUser(userId);
        }
    }
}