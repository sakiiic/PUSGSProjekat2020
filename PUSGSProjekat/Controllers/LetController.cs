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
    public class LetController : ControllerBase
    {
        private ILetService _letService;

        public LetController(ILetService letService)
        {
            _letService = letService;
        }

        [HttpPost("DodajLet")]
        public async Task<IActionResult> DodajLet([FromBody] Let let)
        {
            var x = _letService.DodajLet(let);

            return Ok(x);
        }

        [HttpDelete("ObrisiLet/{letId}")]
        public async Task<IActionResult> ObrisiLet(int letId)
        {
            var x = _letService.ObrisiLet(letId);

            return Ok(x);
        }

        [HttpPatch("IzmijeniLet/{letId}")]
        public async Task<IActionResult> IzmijeniLet(int letId, [FromBody] Let let)
        {
            var x = _letService.IzmijeniLet(letId, let);

            return Ok(x);
        }

        [HttpGet("GetLet/{aviokompanijaId}/{letId}")]
        public Let GetLet(int aviokompanijaId, int letId)
        {
            var x = _letService.GetLet(aviokompanijaId, letId);

            return x;
        }
    }
}