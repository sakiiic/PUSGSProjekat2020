using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.Entities
{
    public class FlightSeat
    {
        [Key]
        public int SeatId { get; set; }
        public int LetId { get; set; }
        public int SeatNumber { get; set; }
        public int? ReservedById { get; set; }
        public int? PassportNumber { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }

        public FlightSeat()
        {
        }

        public FlightSeat(FlightSeat seat)
        {
            if (seat == null)
                return;

            SeatId = seat.SeatId;
            LetId = seat.LetId;
            SeatNumber = seat.SeatNumber;
        }
    }
}
