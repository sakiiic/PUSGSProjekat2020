using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PUSGSProjekat.DTO;
using PUSGSProjekat.Entities;
using PUSGSProjekat.Repositories;

namespace PUSGSProjekat.Services
{
    public class KorisnikService : IKorisnikService
    {
        private AppDbContext _dbContext;

        public KorisnikService(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Korisnik> getAllUsers()
        {
            
            try
            {
                return _dbContext.Korisnici.Select(
                    k => new Korisnik()
                    {
                        Id = k.Id,
                        Name = k.Name,
                        Surname = k.Surname,
                        UserName = k.UserName,
                        Email = k.Email,
                        UserRoles = k.UserRoles
                        
                    }).ToList();
            }
            catch (Exception e)
            {
                var message = e.Message;
                Console.WriteLine(message);
                return null;
            }
        }

        public bool Friendship(int korisnikId, string usernameKorisnik, int friendId, string usernameFriend, int state)
        {
            Friend friend = new Friend();
            friend.KorisnikId = korisnikId;
            friend.KorisnikName = usernameKorisnik;
            friend.FriendId = friendId;
            friend.FriendName = usernameFriend;
            friend.State = state;

            if (friend != null)
            {
                AddFriend(friend);
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool AddFriend(Friend f)
        {
            var friends = _dbContext.Friends.Where(s => s.Id == f.Id).FirstOrDefault();

            if (friends != null)
                return false;

            try
            {
                _dbContext.Friends.Add(new Friend
                {
                    Id = f.Id,
                    KorisnikId = f.KorisnikId,
                    KorisnikName = f.KorisnikName,
                    FriendId = f.FriendId,
                    FriendName = f.FriendName,
                    State = f.State     // 0 - zahtjev odbijen, 1 - zahtjev prihvacen, 2 - zahjev poslat
                });
            }
            catch (Exception e)
            {
                Console.WriteLine("Greska pri dodavanju prijatelja", e);
            }

            _dbContext.SaveChanges();
            return true;
        }

        public bool Accept(int friendId, Friend f)
        {
            try
            {
                var friends = _dbContext.Friends.FirstOrDefault(c => c.FriendId == friendId && c.KorisnikId == f.KorisnikId);
                if (friends != null)
                {
                    friends.State = f.State;
                    
                    _dbContext.SaveChanges();
                    return true;
                }
                return false;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public List<Friend> GetFriendRequest(int id)
        {
            List<Friend> korisnici = new List<Friend>();
            

            try
            {
                var friends = _dbContext.Friends.Where(f => f.FriendId == id && f.State == 2).ToList();

                foreach (var friend in friends)
                {
                    Friend korisnik = new Friend();
                    korisnik.KorisnikId = friend.KorisnikId;
                    korisnik.KorisnikName = friend.KorisnikName;
                    korisnici.Add(korisnik);
                }

                return korisnici;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }
    }
}
