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
    public class KorisnikController : ControllerBase
    {
        private IKorisnikService _korisnikService;

        public KorisnikController(IKorisnikService korisnikService)
        {
            _korisnikService = korisnikService;
        }

        [HttpGet("GetKorisnik/{id}")]
        public Korisnik GetKorisnik(int id)
        {
            var x = _korisnikService.GetKorisnik(id);

            return x;
        }

        [HttpPatch("IzmijeniKorisnika/{id}")]
        public async Task<IActionResult> IzmijeniKorisnika(int id, [FromBody] Korisnik korisnik)
        {
            var x = _korisnikService.IzmijeniKorisnika(id, korisnik);

            return Ok(x);
        }
    }
}