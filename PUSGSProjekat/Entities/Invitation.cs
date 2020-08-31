using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.Entities
{
    public class Invitation
    {
        [Key]
        public int Id { get; set; }
        public int LetId { get; set; }
        public int SeatNumber { get; set; }
        public int? ReservedById { get; set; }
        public int? FriendId { get; set; }
        public string UserName { get; set; }

        public Invitation() { }


    }
}
