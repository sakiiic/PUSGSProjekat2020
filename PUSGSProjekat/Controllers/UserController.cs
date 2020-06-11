using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using PUSGSProjekat.DTO;
using PUSGSProjekat.Repositories;

namespace PUSGSProjekat.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public readonly IAdminService _adminService;
        private readonly IMapper _mapper;
        private readonly UserManager<Korisnik> _userManager;

        public UserController(IMapper mapper, IAdminService adminService, UserManager<Korisnik> userManager)
        {
            _adminService = adminService;
            _mapper = mapper;
            _userManager = userManager;
        }

        [HttpGet("{id}", Name = "GetUser")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _adminService.GetUser(id);

            if (user != null)
            {
                return Ok(user);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPut("UpdateAccount/{id}")]
        public async Task<IActionResult> UpdateAccount(int id, UserForUpdateDTO userForUpdateDto)
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }

            var userFromRepo = await _adminService.GetUser(id);

            _mapper.Map(userForUpdateDto, userFromRepo);

            var result = await _userManager.UpdateAsync(userFromRepo);

            if (result.Succeeded)
            {
                result = await _userManager.ChangePasswordAsync(userFromRepo, userForUpdateDto.OldPassword, userForUpdateDto.Password);

                if (result.Succeeded)
                {
                    return NoContent();
                }
                else
                {
                    throw new Exception($"Updating user {id} failed on save!");
                }
            }
            else
            {
                throw new Exception($"Updating user {id} failed on save!");
            }
        }

        
    }
}