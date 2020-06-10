using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PUSGSProjekat.DTO;
using PUSGSProjekat.Repositories;

namespace PUSGSProjekat.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VoziloController : ControllerBase
    {
        private IVoziloService _voziloService;

        public VoziloController(IVoziloService voziloService)
        {
            _voziloService = voziloService;
        }

        [HttpPost("DodajVozilo")]
        public async Task<IActionResult> DodajVozilo([FromBody] Vozilo vozilo)
        {
            var x = _voziloService.DodajVozilo(vozilo);

            return Ok(x);
        }

        [HttpDelete("ObrisiVozilo/{voziloId}")]
        public async Task<IActionResult> ObrisiVozilo(int voziloId)
        {
            var x = _voziloService.ObrisiVozilo(voziloId);

            return Ok(x);
        }

        [HttpPatch("IzmijeniVozilo/{voziloId}")]
        public async Task<IActionResult> IzmijeniVozilo(int voziloId, [FromBody] Vozilo vozilo)
        {
            var x = _voziloService.IzmijeniVozilo(voziloId, vozilo);

            return Ok(x);
        }

        [HttpGet("GetVozilo/{rentacarId}/{voziloId}")]
        public Vozilo GetVozilo(int rentacarId, int voziloId)
        {
            var x = _voziloService.GetVozilo(rentacarId, voziloId);

            return x;
        }

        [HttpGet("GetVozilaDatum")]
        public List<Vozilo> GetVozilaDate(DateTime from, DateTime to, int rentacarId)
        {
            var x = _voziloService.GetVozilaDate(from, to, rentacarId);

            return x;
        }

        [HttpGet("GetVozila/{rentacarId}")]
        public List<Vozilo> GetVozila(int rentacarId)
        {
            var x = _voziloService.GetVozila(rentacarId);

            return x;
        }

        [HttpGet("RezervisiVozilo")]
        public Vozilo RezervisiVozilo(int voziloId, int korisnikId)
        {
            var x = _voziloService.RezervisiVozilo(voziloId, korisnikId);

            return x;
        }

        [HttpGet("PrikazRezervisanih")]
        public List<Vozilo> PrikazRezervisanihVozila(int korisnikId)
        {
            var x = _voziloService.PrikazRezervisanihVozila(korisnikId);

            return x;
        }

        [HttpGet("OtkaziRezervaciju")]
        public Vozilo OtkaziRezervaciju(int voziloId)
        {
            var x = _voziloService.OtkaziRezervaciju(voziloId);

            return x;
        }
    }
}