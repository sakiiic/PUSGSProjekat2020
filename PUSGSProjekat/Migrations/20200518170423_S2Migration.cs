using Microsoft.EntityFrameworkCore.Migrations;

namespace PUSGSProjekat.Migrations
{
    public partial class S2Migration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "nazivAviokompanije",
                table: "Let",
                newName: "NazivAviokompanije");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "NazivAviokompanije",
                table: "Let",
                newName: "nazivAviokompanije");
        }
    }
}
