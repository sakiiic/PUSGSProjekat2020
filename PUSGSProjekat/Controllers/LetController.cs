﻿using System;
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

        [HttpGet("GetSviLetovi")]
        public List<Let> GetSviLetovi()
        {
            return _letService.GetSviLetovi();
        }

        [HttpGet("GetFlightDate")]
        public List<Let> GetFlightDate(DateTime from, DateTime to, int aviokompanijaId)
        {
            var x = _letService.GetFlightDate(from, to, aviokompanijaId);

            return x;
        }

        [HttpGet("GetLetovi/{aviokompanijaId}")]
        public List<Let> GetLetovi(int aviokompanijaId)
        {
            var x = _letService.GetLetovi(aviokompanijaId);

            return x;
        }

        [HttpGet("RezervisiLet")]
        public Let RezervisiLet(int letId, int korisnikId)
        {
            var x = _letService.RezervisiLet(letId, korisnikId);

            return x;
        }

        [HttpGet("PrikazRezervisanihLetova")]
        public List<Let> PrikazRezervisanihLetova(int korisnikId)
        {
            var x = _letService.PrikazRezervisanihLetova(korisnikId);

            return x;
        }

        [HttpGet("OtkaziLet")]
        public Let OtkaziLet(int letId)
        {
            var x = _letService.OtkaziLet(letId);

            return x;
        }    
    }
}