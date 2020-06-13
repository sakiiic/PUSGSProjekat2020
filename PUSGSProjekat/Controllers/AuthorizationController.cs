using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using PUSGSProjekat.DTO;
using PUSGSProjekat.Helper;

namespace PUSGSProjekat.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorizationController : ControllerBase
    {
        private readonly UserManager<Korisnik> _userManager;
        private readonly SignInManager<Korisnik> _signInManager;
        private readonly IConfiguration _config;
        private readonly IMapper _mapper;

        public AuthorizationController(UserManager<Korisnik> userManager, SignInManager<Korisnik> signInManager, 
            IConfiguration config, IMapper mapper)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _config = config;
            _mapper = mapper;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDTO userForRegisterDto)
        {
            var userToCreate = _mapper.Map<Korisnik>(userForRegisterDto);

            userToCreate.DateOfBirth = userToCreate.DateOfBirth.AddDays(1);

            var result = await _userManager.CreateAsync(userToCreate, userForRegisterDto.Password);

            if (result.Succeeded)
            {
                var result2 = await _userManager.AddToRoleAsync(userToCreate, "Passenger");
                if (result2.Succeeded)
                {
                    EmailService.SendEmail("Uspjesno ste se registrovali", userForRegisterDto.Email);
                    return Ok(userToCreate);
                }
                else
                {
                    return BadRequest(result2.Errors);
                }
            }
            else
            {
                return BadRequest(result.Errors);
            }
        }

        [HttpPost("aviocompanyAdmin")]
        public async Task<IActionResult> AddAviocompanyAdmin(RegisterDTO userForRegisterDto)
        {
            var userToCreate = _mapper.Map<Korisnik>(userForRegisterDto);

            userToCreate.DateOfBirth = userToCreate.DateOfBirth.AddDays(1);

            var result = await _userManager.CreateAsync(userToCreate, userForRegisterDto.Password);

            if (result.Succeeded)
            {
                var result2 = await _userManager.AddToRoleAsync(userToCreate, "AviocompanyAdmin");
                if (result2.Succeeded)
                {
                    return Ok(userToCreate);
                }
                else
                {
                    return BadRequest(result2.Errors);
                }
            }
            else
            {
                return BadRequest(result.Errors);
            }
        }

        [HttpPost("rentacarAdmin")]
        public async Task<IActionResult> AddRentacarAdmin(RegisterDTO userForRegisterDto)
        {
            var userToCreate = _mapper.Map<Korisnik>(userForRegisterDto);

            userToCreate.DateOfBirth = userToCreate.DateOfBirth.AddDays(1);

            var result = await _userManager.CreateAsync(userToCreate, userForRegisterDto.Password);

            if (result.Succeeded)
            {
                var result2 = await _userManager.AddToRoleAsync(userToCreate, "RentacarAdmin");
                if (result2.Succeeded)
                {
                    return Ok(userToCreate);
                }
                else
                {
                    return BadRequest(result2.Errors);
                }
            }
            else
            {
                return BadRequest(result.Errors);
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDTO userForLoginDto)
        {
            var user = await _userManager.FindByEmailAsync(userForLoginDto.Email);

            var result = await _signInManager.CheckPasswordSignInAsync(user, userForLoginDto.Password, false);

            if (result.Succeeded)
            {
                var appUser = await _userManager.Users
                    .Include(u => u.Address)
                    .Include(u => u.UserRoles).ThenInclude(r => r.Role)
                    .FirstOrDefaultAsync(u => u.NormalizedEmail == userForLoginDto.Email.ToUpper());

                return Ok(new
                {
                    token = GenerateJwtToken(appUser).Result,
                    user = appUser
                });
            }
            else
            {
                return Unauthorized();
            }
        }

        private async Task<String> GenerateJwtToken(Korisnik korisnik)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, korisnik.Id.ToString()),
                new Claim(ClaimTypes.Name, korisnik.UserName)
            };

            var roles = await _userManager.GetRolesAsync(korisnik);

            foreach (var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHendler = new JwtSecurityTokenHandler();

            var token = tokenHendler.CreateToken(tokenDescriptor);

            return tokenHendler.WriteToken(token);
        }
    }
}