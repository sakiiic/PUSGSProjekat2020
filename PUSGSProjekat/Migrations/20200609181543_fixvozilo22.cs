using Microsoft.EntityFrameworkCore.Migrations;

namespace PUSGSProjekat.Migrations
{
    public partial class fixvozilo22 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Vozilo_AspNetUsers_KorisnikId",
                table: "Vozilo");

            migrationBuilder.AlterColumn<int>(
                name: "KorisnikId",
                table: "Vozilo",
                nullable: true,
                oldClrType: typeof(int));

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

            migrationBuilder.AlterColumn<int>(
                name: "KorisnikId",
                table: "Vozilo",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Vozilo_AspNetUsers_KorisnikId",
                table: "Vozilo",
                column: "KorisnikId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
