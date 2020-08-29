using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PUSGSProjekat.DTO;
using PUSGSProjekat.Entities;

namespace PUSGSProjekat.Repositories
{
    public interface IKorisnikService
    {
        List<Korisnik> getAllUsers();
        bool AddFriend(Friend f);
        bool Accept(int friendId, Friend f);
        List<Friend> GetFriendRequest(int id);
        List<Friend> GetFriends(int id);
    }
}
