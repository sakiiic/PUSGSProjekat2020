using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PUSGSProjekat.Migrations
{
    public partial class newone : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Adresa",
                table: "Korisnik",
                newName: "UserName");

            migrationBuilder.AddColumn<int>(
                name: "AccessFailedCount",
                table: "Korisnik",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "AdresaId",
                table: "Korisnik",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ConcurrencyStamp",
                table: "Korisnik",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Korisnik",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "EmailConfirmed",
                table: "Korisnik",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "LockoutEnabled",
                table: "Korisnik",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTimeOffset>(
                name: "LockoutEnd",
                table: "Korisnik",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NormalizedEmail",
                table: "Korisnik",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NormalizedUserName",
                table: "Korisnik",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PasswordHash",
                table: "Korisnik",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhoneNumber",
                table: "Korisnik",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "PhoneNumberConfirmed",
                table: "Korisnik",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "SecurityStamp",
                table: "Korisnik",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "TwoFactorEnabled",
                table: "Korisnik",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateTable(
                name: "Address",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Street = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true),
                    Number = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Address", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Role",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    NormalizedName = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Role", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserRole",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false),
                    RoleId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserRole", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_UserRole_Role_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Role",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserRole_Korisnik_UserId",
                        column: x => x.UserId,
                        principalTable: "Korisnik",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Korisnik_AdresaId",
                table: "Korisnik",
                column: "AdresaId");

            migrationBuilder.CreateIndex(
                name: "IX_UserRole_RoleId",
                table: "UserRole",
                column: "RoleId");

            migrationBuilder.AddForeignKey(
                name: "FK_Korisnik_Address_AdresaId",
                table: "Korisnik",
                column: "AdresaId",
                principalTable: "Address",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Korisnik_Address_AdresaId",
                table: "Korisnik");

            migrationBuilder.DropTable(
                name: "Address");

            migrationBuilder.DropTable(
                name: "UserRole");

            migrationBuilder.DropTable(
                name: "Role");

            migrationBuilder.DropIndex(
                name: "IX_Korisnik_AdresaId",
                table: "Korisnik");

            migrationBuilder.DropColumn(
                name: "AccessFailedCount",
                table: "Korisnik");

            migrationBuilder.DropColumn(
                name: "AdresaId",
                table: "Korisnik");

            migrationBuilder.DropColumn(
                name: "ConcurrencyStamp",
                table: "Korisnik");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Korisnik");

            migrationBuilder.DropColumn(
                name: "EmailConfirmed",
                table: "Korisnik");

            migrationBuilder.DropColumn(
                name: "LockoutEnabled",
                table: "Korisnik");

            migrationBuilder.DropColumn(
                name: "LockoutEnd",
                table: "Korisnik");

            migrationBuilder.DropColumn(
                name: "NormalizedEmail",
                table: "Korisnik");

            migrationBuilder.DropColumn(
                name: "NormalizedUserName",
                table: "Korisnik");

            migrationBuilder.DropColumn(
                name: "PasswordHash",
                table: "Korisnik");

            migrationBuilder.DropColumn(
                name: "PhoneNumber",
                table: "Korisnik");

            migrationBuilder.DropColumn(
                name: "PhoneNumberConfirmed",
                table: "Korisnik");

            migrationBuilder.DropColumn(
                name: "SecurityStamp",
                table: "Korisnik");

            migrationBuilder.DropColumn(
                name: "TwoFactorEnabled",
                table: "Korisnik");

            migrationBuilder.RenameColumn(
                name: "UserName",
                table: "Korisnik",
                newName: "Adresa");
        }
    }
}
