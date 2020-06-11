using Microsoft.EntityFrameworkCore.Migrations;

namespace PUSGSProjekat.Migrations
{
    public partial class RezervacijaFix : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Rezervacije_KorisnikId",
                table: "Rezervacije",
                column: "KorisnikId");

            migrationBuilder.CreateIndex(
                name: "IX_Rezervacije_LetId",
                table: "Rezervacije",
                column: "LetId");

            migrationBuilder.AddForeignKey(
                name: "FK_Rezervacije_AspNetUsers_KorisnikId",
                table: "Rezervacije",
                column: "KorisnikId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Rezervacije_Let_LetId",
                table: "Rezervacije",
                column: "LetId",
                principalTable: "Let",
                principalColumn: "LetId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Rezervacije_AspNetUsers_KorisnikId",
                table: "Rezervacije");

            migrationBuilder.DropForeignKey(
                name: "FK_Rezervacije_Let_LetId",
                table: "Rezervacije");

            migrationBuilder.DropIndex(
                name: "IX_Rezervacije_KorisnikId",
                table: "Rezervacije");

            migrationBuilder.DropIndex(
                name: "IX_Rezervacije_LetId",
                table: "Rezervacije");
        }
    }
}
