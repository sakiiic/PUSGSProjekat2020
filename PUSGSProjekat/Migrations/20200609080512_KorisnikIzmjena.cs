using Microsoft.EntityFrameworkCore.Migrations;

namespace PUSGSProjekat.Migrations
{
    public partial class KorisnikIzmjena : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "KorisnikId",
                table: "Let",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Let_KorisnikId",
                table: "Let",
                column: "KorisnikId");

            migrationBuilder.AddForeignKey(
                name: "FK_Let_AspNetUsers_KorisnikId",
                table: "Let",
                column: "KorisnikId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Let_AspNetUsers_KorisnikId",
                table: "Let");

            migrationBuilder.DropIndex(
                name: "IX_Let_KorisnikId",
                table: "Let");

            migrationBuilder.DropColumn(
                name: "KorisnikId",
                table: "Let");
        }
    }
}
