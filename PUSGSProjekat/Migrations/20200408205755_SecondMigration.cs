using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PUSGSProjekat.Migrations
{
    public partial class SecondMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Destinacija");

            migrationBuilder.DropTable(
                name: "Lokacija");

            migrationBuilder.DropTable(
                name: "LokacijePresjedanja");

            migrationBuilder.AddColumn<string>(
                name: "Lokacije",
                table: "RentACar",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "AviokompanijaId",
                table: "Let",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LokacijePresjedanja",
                table: "Let",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Destinacije",
                table: "Aviokompanija",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Let_AviokompanijaId",
                table: "Let",
                column: "AviokompanijaId");

            migrationBuilder.AddForeignKey(
                name: "FK_Let_Aviokompanija_AviokompanijaId",
                table: "Let",
                column: "AviokompanijaId",
                principalTable: "Aviokompanija",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Let_Aviokompanija_AviokompanijaId",
                table: "Let");

            migrationBuilder.DropIndex(
                name: "IX_Let_AviokompanijaId",
                table: "Let");

            migrationBuilder.DropColumn(
                name: "Lokacije",
                table: "RentACar");

            migrationBuilder.DropColumn(
                name: "AviokompanijaId",
                table: "Let");

            migrationBuilder.DropColumn(
                name: "LokacijePresjedanja",
                table: "Let");

            migrationBuilder.DropColumn(
                name: "Destinacije",
                table: "Aviokompanija");

            migrationBuilder.CreateTable(
                name: "Destinacija",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AviokompanijaId = table.Column<int>(nullable: true),
                    DestinacijaVozila = table.Column<string>(nullable: true)
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
                name: "LokacijePresjedanja",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LetId = table.Column<int>(nullable: true),
                    Lokacija = table.Column<string>(nullable: true)
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
        }
    }
}
