using Microsoft.EntityFrameworkCore.Migrations;

namespace PUSGSProjekat.Migrations
{
    public partial class Reservation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "FlightSeat",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Surname",
                table: "FlightSeat",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "FlightSeat");

            migrationBuilder.DropColumn(
                name: "Surname",
                table: "FlightSeat");
        }
    }
}
