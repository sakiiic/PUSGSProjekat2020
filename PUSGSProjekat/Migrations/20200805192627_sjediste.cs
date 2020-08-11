using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PUSGSProjekat.Migrations
{
    public partial class sjediste : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BrojSjedistaURedu",
                table: "Let",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "NazivAviokompanije",
                table: "Let",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Polazak",
                table: "Let",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "FlightSeat",
                columns: table => new
                {
                    SeatId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LetId = table.Column<int>(nullable: false),
                    SeatNumber = table.Column<int>(nullable: false),
                    ReservedById = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FlightSeat", x => x.SeatId);
                    table.ForeignKey(
                        name: "FK_FlightSeat_Let_LetId",
                        column: x => x.LetId,
                        principalTable: "Let",
                        principalColumn: "LetId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FlightTicket",
                columns: table => new
                {
                    TicketId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Email = table.Column<string>(nullable: true),
                    LetId = table.Column<int>(nullable: false),
                    SeatId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FlightTicket", x => x.TicketId);
                    table.ForeignKey(
                        name: "FK_FlightTicket_Let_LetId",
                        column: x => x.LetId,
                        principalTable: "Let",
                        principalColumn: "LetId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FlightSeat_LetId",
                table: "FlightSeat",
                column: "LetId");

            migrationBuilder.CreateIndex(
                name: "IX_FlightTicket_LetId",
                table: "FlightTicket",
                column: "LetId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FlightSeat");

            migrationBuilder.DropTable(
                name: "FlightTicket");

            migrationBuilder.DropColumn(
                name: "BrojSjedistaURedu",
                table: "Let");

            migrationBuilder.DropColumn(
                name: "NazivAviokompanije",
                table: "Let");

            migrationBuilder.DropColumn(
                name: "Polazak",
                table: "Let");
        }
    }
}
