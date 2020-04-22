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
    [Migration("20200420182932_newone")]
    partial class newone
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

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

                    b.Property<int?>("AdresaId");

                    b.Property<string>("ConcurrencyStamp");

                    b.Property<DateTime>("DatumRodjenja");

                    b.Property<string>("Email");

                    b.Property<bool>("EmailConfirmed");

                    b.Property<string>("Ime");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("Lozinka");

                    b.Property<string>("NormalizedEmail");

                    b.Property<string>("NormalizedUserName");

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("Prezime");

                    b.Property<string>("SecurityStamp");

                    b.Property<string>("TipKorisnika");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.HasIndex("AdresaId");

                    b.ToTable("Korisnik");
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

                    b.Property<DateTime>("VrijemePutovanja");

                    b.HasKey("Id");

                    b.HasIndex("AviokompanijaId");

                    b.ToTable("Let");
                });

            modelBuilder.Entity("PUSGSProjekat.DTO.RentACar", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Adresa");

                    b.Property<string>("Lokacije");

                    b.Property<string>("Naziv");

                    b.Property<float>("Ocjena");

                    b.Property<string>("Opis");

                    b.HasKey("Id");

                    b.ToTable("RentACar");
                });

            modelBuilder.Entity("PUSGSProjekat.DTO.Vozilo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("BrojSjedista");

                    b.Property<int>("GodinaProizvodnje");

                    b.Property<string>("Marka");

                    b.Property<string>("Model");

                    b.Property<string>("Naziv");

                    b.Property<int>("RentACarId");

                    b.Property<string>("TipVozila");

                    b.HasKey("Id");

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

            modelBuilder.Entity("PUSGSProjekat.Entities.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ConcurrencyStamp");

                    b.Property<string>("Name");

                    b.Property<string>("NormalizedName");

                    b.HasKey("Id");

                    b.ToTable("Role");
                });

            modelBuilder.Entity("PUSGSProjekat.Entities.UserRole", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<int>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("UserRole");
                });

            modelBuilder.Entity("PUSGSProjekat.DTO.Korisnik", b =>
                {
                    b.HasOne("PUSGSProjekat.Entities.Address", "Adresa")
                        .WithMany()
                        .HasForeignKey("AdresaId");
                });

            modelBuilder.Entity("PUSGSProjekat.DTO.Let", b =>
                {
                    b.HasOne("PUSGSProjekat.DTO.Aviokompanija", "Aviokompanija")
                        .WithMany("Letovi")
                        .HasForeignKey("AviokompanijaId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("PUSGSProjekat.DTO.Vozilo", b =>
                {
                    b.HasOne("PUSGSProjekat.DTO.RentACar", "RentACar")
                        .WithMany("Vozila")
                        .HasForeignKey("RentACarId")
                        .OnDelete(DeleteBehavior.Cascade);
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
