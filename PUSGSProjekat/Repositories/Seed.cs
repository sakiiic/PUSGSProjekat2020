using Microsoft.AspNetCore.Identity;
using PUSGSProjekat.DTO;
using PUSGSProjekat.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.Repositories
{
    public class Seed
    {
        private readonly UserManager<Korisnik> _userManager;
        private readonly RoleManager<Role> _roleManager;
        private readonly AppDbContext _context;

        public Seed(UserManager<Korisnik> userManager, RoleManager<Role> roleManager, AppDbContext context)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _context = context;
            _context.Database.EnsureCreated();
        }

        public void SeedUsers()
        {
            if (!_userManager.Users.Any())
            {
                var roles = new List<Role>
                {
                    new Role() {Name = "Passenger"},
                    new Role() {Name = "AviocompanyAdmin"},
                    new Role() {Name = "RentacarAdmin"},
                    new Role() {Name = "Admin"}
                };

                foreach (var role in roles)
                {
                    _roleManager.CreateAsync(role).Wait();
                }

                var userList = new List<Korisnik>();

                for (int i = 0; i < 5; i++)
                {
                    var user = new Korisnik()
                    {
                        UserName = $"User{i}",
                        Name = $"Pera {i}",
                        Surname = $"Peric {i}",
                        Email = $"user{i}@gmail.com",
                        Address = new Address()
                        {
                            City = "Grad",
                            Street = "Ulica",
                            Number = "Broj"
                        }
                    };

                    userList.Add(user);

                }

                _userManager.CreateAsync(userList[0], "password").Wait();
                _userManager.AddToRoleAsync(userList[0], "Passenger").Wait();

                _userManager.CreateAsync(userList[1], "password").Wait();
                _userManager.AddToRoleAsync(userList[1], "Passenger").Wait();

                _userManager.CreateAsync(userList[2], "password").Wait();
                _userManager.AddToRoleAsync(userList[2], "Passenger").Wait();

                _userManager.CreateAsync(userList[3], "password").Wait();
                _userManager.AddToRoleAsync(userList[3], "Passenger").Wait();

                _userManager.CreateAsync(userList[4], "password").Wait();
                _userManager.AddToRoleAsync(userList[4], "Passenger").Wait();

                var admin = new Korisnik { UserName = "Admin", Email = "admin@admin.com" };
                IdentityResult result = _userManager.CreateAsync(admin, "password").Result;

                if (result.Succeeded)
                {
                    var adm = _userManager.FindByNameAsync("Admin").Result;
                    _userManager.AddToRoleAsync(adm, "Admin").Wait();
                }

                var aviocompanyAdmin = new Korisnik { UserName = "AviocompanyAdmin", 
                    Email = "aviocompanyAdmin@aviocompany.com"
                };
                IdentityResult res = _userManager.CreateAsync(aviocompanyAdmin, "password").Result;

                if (res.Succeeded)
                {
                    var con = _userManager.FindByNameAsync("AviocompanyAdmin").Result;
                    _userManager.AddToRoleAsync(con, "AviocompanyAdmin").Wait();
                }

                var rentacarAdmin = new Korisnik { UserName = "RentacarAdmin", 
                    Email = "rentacarAdmin@rentacar.com" };
                IdentityResult res2 = _userManager.CreateAsync(rentacarAdmin, "password").Result;

                if (res2.Succeeded)
                {
                    var con = _userManager.FindByNameAsync("RentacarAdmin").Result;
                    _userManager.AddToRoleAsync(con, "RentacarAdmin").Wait();
                }
            }

            _context.SaveChanges();
        }
    }
}
