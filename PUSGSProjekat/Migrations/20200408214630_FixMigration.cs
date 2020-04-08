using Microsoft.EntityFrameworkCore.Migrations;

namespace PUSGSProjekat.Migrations
{
    public partial class FixMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Let_Aviokompanija_AviokompanijaId",
                table: "Let");

            migrationBuilder.DropForeignKey(
                name: "FK_Vozilo_RentACar_RentACarId",
                table: "Vozilo");

            migrationBuilder.AlterColumn<int>(
                name: "RentACarId",
                table: "Vozilo",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "AviokompanijaId",
                table: "Let",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Let_Aviokompanija_AviokompanijaId",
                table: "Let",
                column: "AviokompanijaId",
                principalTable: "Aviokompanija",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Vozilo_RentACar_RentACarId",
                table: "Vozilo",
                column: "RentACarId",
                principalTable: "RentACar",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Let_Aviokompanija_AviokompanijaId",
                table: "Let");

            migrationBuilder.DropForeignKey(
                name: "FK_Vozilo_RentACar_RentACarId",
                table: "Vozilo");

            migrationBuilder.AlterColumn<int>(
                name: "RentACarId",
                table: "Vozilo",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "AviokompanijaId",
                table: "Let",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Let_Aviokompanija_AviokompanijaId",
                table: "Let",
                column: "AviokompanijaId",
                principalTable: "Aviokompanija",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Vozilo_RentACar_RentACarId",
                table: "Vozilo",
                column: "RentACarId",
                principalTable: "RentACar",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
