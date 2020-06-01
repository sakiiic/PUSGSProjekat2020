using Microsoft.EntityFrameworkCore.Migrations;

namespace PUSGSProjekat.Migrations
{
    public partial class FIX : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "KorisnikId",
                table: "Vozilo",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Vozilo_KorisnikId",
                table: "Vozilo",
                column: "KorisnikId");

            migrationBuilder.AddForeignKey(
                name: "FK_Vozilo_AspNetUsers_KorisnikId",
                table: "Vozilo",
                column: "KorisnikId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Vozilo_AspNetUsers_KorisnikId",
                table: "Vozilo");

            migrationBuilder.DropIndex(
                name: "IX_Vozilo_KorisnikId",
                table: "Vozilo");

            migrationBuilder.DropColumn(
                name: "KorisnikId",
                table: "Vozilo");
        }
    }
}
