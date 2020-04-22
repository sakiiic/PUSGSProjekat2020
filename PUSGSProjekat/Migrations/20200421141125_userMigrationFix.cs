using Microsoft.EntityFrameworkCore.Migrations;

namespace PUSGSProjekat.Migrations
{
    public partial class userMigrationFix : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Korisnik_Address_AdresaId",
                table: "Korisnik");

            migrationBuilder.DropColumn(
                name: "Ime",
                table: "Korisnik");

            migrationBuilder.RenameColumn(
                name: "TipKorisnika",
                table: "Korisnik",
                newName: "Surname");

            migrationBuilder.RenameColumn(
                name: "Prezime",
                table: "Korisnik",
                newName: "Password");

            migrationBuilder.RenameColumn(
                name: "Lozinka",
                table: "Korisnik",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "DatumRodjenja",
                table: "Korisnik",
                newName: "DateOfBirth");

            migrationBuilder.RenameColumn(
                name: "AdresaId",
                table: "Korisnik",
                newName: "AddressId");

            migrationBuilder.RenameIndex(
                name: "IX_Korisnik_AdresaId",
                table: "Korisnik",
                newName: "IX_Korisnik_AddressId");

            migrationBuilder.AddForeignKey(
                name: "FK_Korisnik_Address_AddressId",
                table: "Korisnik",
                column: "AddressId",
                principalTable: "Address",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Korisnik_Address_AddressId",
                table: "Korisnik");

            migrationBuilder.RenameColumn(
                name: "Surname",
                table: "Korisnik",
                newName: "TipKorisnika");

            migrationBuilder.RenameColumn(
                name: "Password",
                table: "Korisnik",
                newName: "Prezime");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Korisnik",
                newName: "Lozinka");

            migrationBuilder.RenameColumn(
                name: "DateOfBirth",
                table: "Korisnik",
                newName: "DatumRodjenja");

            migrationBuilder.RenameColumn(
                name: "AddressId",
                table: "Korisnik",
                newName: "AdresaId");

            migrationBuilder.RenameIndex(
                name: "IX_Korisnik_AddressId",
                table: "Korisnik",
                newName: "IX_Korisnik_AdresaId");

            migrationBuilder.AddColumn<string>(
                name: "Ime",
                table: "Korisnik",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Korisnik_Address_AdresaId",
                table: "Korisnik",
                column: "AdresaId",
                principalTable: "Address",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
