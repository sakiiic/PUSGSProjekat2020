using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.Entities
{
    public class Friend
    {
        [Key]
        public int Id { get; set; }
        public int KorisnikId { get; set; }
        public string KorisnikName { get; set; }
        public int FriendId { get; set; }
        public string FriendName { get; set; }
        public int? State { get; set; }

        public Friend() { }

        public Friend(Friend friend)
        {
            if (friend == null)
                return;

            KorisnikId = friend.KorisnikId;
            KorisnikName = friend.KorisnikName;
            FriendId = friend.FriendId;
            FriendName = friend.FriendName;
        }
    }
}
