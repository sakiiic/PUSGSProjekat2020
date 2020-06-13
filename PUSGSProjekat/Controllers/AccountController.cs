using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PUSGSProjekat.Entities;

namespace PUSGSProjekat.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly AppDbContext _db;
        public AccountController(AppDbContext db)
        {
            _db = db;
        }
        [HttpPost("[action]")]
        public IActionResult Login([FromBody] UserData userdata)
        {
            if (userdata != null)
            {
                var alreadySaved = _db.UserData.Where(Uid => Uid.UserId == userdata.UserId).FirstOrDefault();
                if (ModelState.IsValid)
                {
                    if (alreadySaved != null)
                    {
                        return Ok(new { message = "User data has been saved already!" });
                    }
                    var user = new UserData
                    {
                        UserId = userdata.UserId,
                        FirstName = userdata.FirstName,
                        LastName = userdata.LastName,
                        PictureUrl = userdata.PictureUrl,
                        EmailAddress = userdata.EmailAddress,
                        Provider = userdata.Provider
                    };
                    _db.Add(user);
                    _db.SaveChanges();
                    return Ok(new { message = "User Login successful" });
                }
            }

            var errors = ModelState.Values.First().Errors;
            return BadRequest(new JsonResult(errors));

        }
    }
}