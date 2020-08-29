using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PUSGSProjekat.DTO;
using PUSGSProjekat.Entities;
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

        [HttpGet("GetAllUsers")]
        public List<Korisnik> GetAllUsers()
        {
            return _korisnikService.getAllUsers();
        }

        [HttpPost("AddFriend")]
        public async Task<IActionResult> AddFriend([FromBody] Friend friend)
        {
            var x = _korisnikService.AddFriend(friend);

            return Ok(x);
        }

        [HttpPatch("AcceptRequest/{friendId}")]
        public async Task<IActionResult> AcceptRequest(int friendId, [FromBody] Friend friend)
        {
            var x = _korisnikService.Accept(friendId, friend);

            return Ok(x);
        }

        [HttpGet("GetFriendRequest/{friendId}")]
        public List<Friend> GetFriendRequest(int friendId)
        {
            var x = _korisnikService.GetFriendRequest(friendId);

            return x;
        }

        [HttpGet("GetFriends/{id}")]
        public List<Friend> GetFriends(int id)
        {
            var x = _korisnikService.GetFriends(id);

            return x;
        }
    }
}