﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PUSGSProjekat;

namespace PUSGSProjekat.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20200602100542_NewMigration")]
    partial class NewMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<int>("RoleId");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<int>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<int>("UserId");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<int>", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("PUSGSProjekat.DTO.Aviokompanija", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Adresa");

                    b.Property<string>("Destinacije");

                    b.Property<string>("Naziv");

                    b.Property<float>("Ocjena");

                    b.Property<string>("Opis");

                    b.HasKey("Id");

                    b.ToTable("Aviokompanija");
                });

            modelBuilder.Entity("PUSGSProjekat.DTO.Korisnik", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AccessFailedCount");

                    b.Property<int?>("AddressId");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<DateTime>("DateOfBirth");

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<bool?>("ImaServis");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("Name");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("Password");

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<string>("Surname");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("AddressId");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("PUSGSProjekat.DTO.Let", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AviokompanijaId");

                    b.Property<int>("BrojPresjedanja");

                    b.Property<float>("CijenaKarte");

                    b.Property<DateTime>("DatumVrijemeDolaska");

                    b.Property<DateTime>("DatumVrijemePolaska");

                    b.Property<string>("DuzinaPutovanja");

                    b.Property<string>("LokacijePresjedanja");

                    b.Property<string>("NazivAviokompanije");

                    b.Property<string>("VrijemePutovanja");

                    b.HasKey("Id");

                    b.HasIndex("AviokompanijaId");

                    b.ToTable("Let");
                });

            modelBuilder.Entity("PUSGSProjekat.DTO.RentACar", b =>
                {
                    b.Property<int>("RentacarId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Adresa");

                    b.Property<int>("KorisnikId");

                    b.Property<string>("Lokacije");

                    b.Property<string>("Naziv");

                    b.Property<float>("Ocjena");

                    b.Property<string>("Opis");

                    b.HasKey("RentacarId");

                    b.ToTable("RentACar");
                });

            modelBuilder.Entity("PUSGSProjekat.DTO.Vozilo", b =>
                {
                    b.Property<int>("VoziloId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("BrojSjedista");

                    b.Property<float>("Cijena");

                    b.Property<DateTime>("DatumDo");

                    b.Property<DateTime>("DatumOd");

                    b.Property<int>("GodinaProizvodnje");

                    b.Property<string>("Image");

                    b.Property<int?>("KorisnikId");

                    b.Property<string>("Marka");

                    b.Property<string>("Model");

                    b.Property<int>("RentACarId");

                    b.Property<bool>("Slobodno");

                    b.Property<string>("TipGoriva");

                    b.Property<string>("TipVozila");

                    b.Property<string>("Transmisija");

                    b.HasKey("VoziloId");

                    b.HasIndex("KorisnikId");

                    b.HasIndex("RentACarId");

                    b.ToTable("Vozilo");
                });

            modelBuilder.Entity("PUSGSProjekat.Entities.Address", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("City");

                    b.Property<string>("Number");

                    b.Property<string>("Street");

                    b.HasKey("Id");

                    b.ToTable("Address");
                });

            modelBuilder.Entity("PUSGSProjekat.Entities.Cjenovnik", b =>
                {
                    b.Property<int>("CjenovnikId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DatumDo");

                    b.Property<DateTime>("DatumOd");

                    b.Property<int>("RentACarId");

                    b.HasKey("CjenovnikId");

                    b.ToTable("Cjenovnik");
                });

            modelBuilder.Entity("PUSGSProjekat.Entities.CjenovnikVozilo", b =>
                {
                    b.Property<int>("CjenovnikVoziloId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<decimal>("Cijena");

                    b.Property<int?>("CjenovnikId");

                    b.Property<int?>("VoziloId");

                    b.HasKey("CjenovnikVoziloId");

                    b.HasIndex("CjenovnikId");

                    b.HasIndex("VoziloId");

                    b.ToTable("CjenovnikVozilo");
                });

            modelBuilder.Entity("PUSGSProjekat.Entities.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("PUSGSProjekat.Entities.UserRole", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<int>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<int>", b =>
                {
                    b.HasOne("PUSGSProjekat.Entities.Role")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<int>", b =>
                {
                    b.HasOne("PUSGSProjekat.DTO.Korisnik")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<int>", b =>
                {
                    b.HasOne("PUSGSProjekat.DTO.Korisnik")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<int>", b =>
                {
                    b.HasOne("PUSGSProjekat.DTO.Korisnik")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("PUSGSProjekat.DTO.Korisnik", b =>
                {
                    b.HasOne("PUSGSProjekat.Entities.Address", "Address")
                        .WithMany()
                        .HasForeignKey("AddressId");
                });

            modelBuilder.Entity("PUSGSProjekat.DTO.Let", b =>
                {
                    b.HasOne("PUSGSProjekat.DTO.Aviokompanija")
                        .WithMany("Letovi")
                        .HasForeignKey("AviokompanijaId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("PUSGSProjekat.DTO.Vozilo", b =>
                {
                    b.HasOne("PUSGSProjekat.DTO.Korisnik", "Korisnik")
                        .WithMany("Vozila")
                        .HasForeignKey("KorisnikId");

                    b.HasOne("PUSGSProjekat.DTO.RentACar")
                        .WithMany("Vozila")
                        .HasForeignKey("RentACarId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("PUSGSProjekat.Entities.CjenovnikVozilo", b =>
                {
                    b.HasOne("PUSGSProjekat.Entities.Cjenovnik", "Cjenovnik")
                        .WithMany()
                        .HasForeignKey("CjenovnikId");

                    b.HasOne("PUSGSProjekat.DTO.Vozilo", "Vozilo")
                        .WithMany()
                        .HasForeignKey("VoziloId");
                });

            modelBuilder.Entity("PUSGSProjekat.Entities.UserRole", b =>
                {
                    b.HasOne("PUSGSProjekat.Entities.Role", "Role")
                        .WithMany("UserRoles")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("PUSGSProjekat.DTO.Korisnik", "Korisnik")
                        .WithMany("UserRoles")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
