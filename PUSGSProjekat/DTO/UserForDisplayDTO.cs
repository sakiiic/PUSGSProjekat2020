﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.DTO
{
    public class UserForDisplayDTO
    {
        [Required]
        [StringLength(20, MinimumLength = 4, ErrorMessage = "You must specify username at least 4 characters long")]
        public string UserName { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Surname { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Number { get; set; }
        [Required]
        public string Street { get; set; }
        [Required]
        public DateTime DateOfBirth { get; set; }
    }
}
