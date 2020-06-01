using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PUSGSProjekat.Migrations
{
    public partial class PriceListFIXES : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Vozilo",
                newName: "VoziloId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "RentACar",
                newName: "RentacarId");

            migrationBuilder.AddColumn<DateTime>(
                name: "DatumDo",
                table: "Vozilo",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "DatumOd",
                table: "Vozilo",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AlterColumn<bool>(
                name: "ImaServis",
                table: "AspNetUsers",
                nullable: true,
                oldClrType: typeof(bool));

            migrationBuilder.CreateTable(
                name: "Cjenovnik",
                columns: table => new
                {
                    CjenovnikId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DatumOd = table.Column<DateTime>(nullable: false),
                    DatumDo = table.Column<DateTime>(nullable: false),
                    RentACarId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cjenovnik", x => x.CjenovnikId);
                });

            migrationBuilder.CreateTable(
                name: "CjenovnikVozilo",
                columns: table => new
                {
                    CjenovnikVoziloId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    VoziloId = table.Column<int>(nullable: true),
                    CjenovnikId = table.Column<int>(nullable: true),
                    Cijena = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CjenovnikVozilo", x => x.CjenovnikVoziloId);
                    table.ForeignKey(
                        name: "FK_CjenovnikVozilo_Cjenovnik_CjenovnikId",
                        column: x => x.CjenovnikId,
                        principalTable: "Cjenovnik",
                        principalColumn: "CjenovnikId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_CjenovnikVozilo_Vozilo_VoziloId",
                        column: x => x.VoziloId,
                        principalTable: "Vozilo",
                        principalColumn: "VoziloId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CjenovnikVozilo_CjenovnikId",
                table: "CjenovnikVozilo",
                column: "CjenovnikId");

            migrationBuilder.CreateIndex(
                name: "IX_CjenovnikVozilo_VoziloId",
                table: "CjenovnikVozilo",
                column: "VoziloId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CjenovnikVozilo");

            migrationBuilder.DropTable(
                name: "Cjenovnik");

            migrationBuilder.DropColumn(
                name: "DatumDo",
                table: "Vozilo");

            migrationBuilder.DropColumn(
                name: "DatumOd",
                table: "Vozilo");

            migrationBuilder.RenameColumn(
                name: "VoziloId",
                table: "Vozilo",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "RentacarId",
                table: "RentACar",
                newName: "Id");

            migrationBuilder.AlterColumn<bool>(
                name: "ImaServis",
                table: "AspNetUsers",
                nullable: false,
                oldClrType: typeof(bool),
                oldNullable: true);
        }
    }
}
