using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.Entities
{
    public class FlightTicket
    {
        [Key]
        public int TicketId { get; set; }

        public string Email { get; set; }

        public int LetId { get; set; }

        public int? SeatId { get; set; }

        public FlightTicket() { }    

        public FlightTicket(FlightTicket ticket)
        {
            if (ticket == null)
                return;

            TicketId = ticket.TicketId;
            Email = ticket.Email;
            LetId = ticket.LetId;
            SeatId = ticket.SeatId;
        
        }
    }
}
