﻿using System;
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
        public Vozilo GetVozilo (int rentacarId, int voziloId)
        {
            var x = _voziloService.GetVozilo(rentacarId, voziloId);

            return x;
        }

        [HttpGet("GetVozila")]
        public List<Vozilo> GetVozila()
        {
            return _voziloService.getVozila();
        }
    }
}