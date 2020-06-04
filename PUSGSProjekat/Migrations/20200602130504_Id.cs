using Microsoft.EntityFrameworkCore.Migrations;

namespace PUSGSProjekat.Migrations
{
    public partial class Id : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Let",
                newName: "LetId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Aviokompanija",
                newName: "AviokompanijaId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "LetId",
                table: "Let",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "AviokompanijaId",
                table: "Aviokompanija",
                newName: "Id");
        }
    }
}
