using Microsoft.EntityFrameworkCore.Migrations;

namespace PUSGSProjekat.Migrations
{
    public partial class CarEntities : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Naziv",
                table: "Vozilo",
                newName: "Transmisija");

            migrationBuilder.AddColumn<float>(
                name: "Cijena",
                table: "Vozilo",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "Vozilo",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Slobodno",
                table: "Vozilo",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "TipGoriva",
                table: "Vozilo",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Cijena",
                table: "Vozilo");

            migrationBuilder.DropColumn(
                name: "Image",
                table: "Vozilo");

            migrationBuilder.DropColumn(
                name: "Slobodno",
                table: "Vozilo");

            migrationBuilder.DropColumn(
                name: "TipGoriva",
                table: "Vozilo");

            migrationBuilder.RenameColumn(
                name: "Transmisija",
                table: "Vozilo",
                newName: "Naziv");
        }
    }
}
