using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PUSGSProjekat.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Aviokompanija",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Naziv = table.Column<string>(nullable: true),
                    Adresa = table.Column<string>(nullable: true),
                    Opis = table.Column<string>(nullable: true),
                    Ocjena = table.Column<float>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Aviokompanija", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Let",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DatumVrijemePolaska = table.Column<DateTime>(nullable: false),
                    DatumVrijemeDolaska = table.Column<DateTime>(nullable: false),
                    VrijemePutovanja = table.Column<DateTime>(nullable: false),
                    DuzinaPutovanja = table.Column<string>(nullable: true),
                    BrojPresjedanja = table.Column<int>(nullable: false),
                    CijenaKarte = table.Column<float>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Let", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RentACar",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Naziv = table.Column<string>(nullable: true),
                    Adresa = table.Column<string>(nullable: true),
                    Opis = table.Column<string>(nullable: true),
                    Ocjena = table.Column<float>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RentACar", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Destinacija",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DestinacijaVozila = table.Column<string>(nullable: true),
                    AviokompanijaId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Destinacija", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Destinacija_Aviokompanija_AviokompanijaId",
                        column: x => x.AviokompanijaId,
                        principalTable: "Aviokompanija",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "LokacijePresjedanja",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Lokacija = table.Column<string>(nullable: true),
                    LetId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LokacijePresjedanja", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LokacijePresjedanja_Let_LetId",
                        column: x => x.LetId,
                        principalTable: "Let",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Lokacija",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LokacijaVozila = table.Column<string>(nullable: true),
                    RentACarId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lokacija", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Lokacija_RentACar_RentACarId",
                        column: x => x.RentACarId,
                        principalTable: "RentACar",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Vozilo",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Naziv = table.Column<string>(nullable: true),
                    Marka = table.Column<string>(nullable: true),
                    Model = table.Column<string>(nullable: true),
                    GodinaProizvodnje = table.Column<int>(nullable: false),
                    BrojSjedista = table.Column<int>(nullable: false),
                    TipVozila = table.Column<string>(nullable: true),
                    RentACarId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vozilo", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Vozilo_RentACar_RentACarId",
                        column: x => x.RentACarId,
                        principalTable: "RentACar",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Destinacija_AviokompanijaId",
                table: "Destinacija",
                column: "AviokompanijaId");

            migrationBuilder.CreateIndex(
                name: "IX_Lokacija_RentACarId",
                table: "Lokacija",
                column: "RentACarId");

            migrationBuilder.CreateIndex(
                name: "IX_LokacijePresjedanja_LetId",
                table: "LokacijePresjedanja",
                column: "LetId");

            migrationBuilder.CreateIndex(
                name: "IX_Vozilo_RentACarId",
                table: "Vozilo",
                column: "RentACarId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Destinacija");

            migrationBuilder.DropTable(
                name: "Lokacija");

            migrationBuilder.DropTable(
                name: "LokacijePresjedanja");

            migrationBuilder.DropTable(
                name: "Vozilo");

            migrationBuilder.DropTable(
                name: "Aviokompanija");

            migrationBuilder.DropTable(
                name: "Let");

            migrationBuilder.DropTable(
                name: "RentACar");
        }
    }
}
