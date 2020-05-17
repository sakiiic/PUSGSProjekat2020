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

        [HttpGet("GetLetovi")]
        public List<Let> GetLetovi()
        {
            return _letService.getLetovi();
        }
    }
}