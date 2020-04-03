﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PUSGSProjekat;

namespace PUSGSProjekat.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
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

                    b.Property<string>("Naziv");

                    b.Property<float>("Ocjena");

                    b.Property<string>("Opis");

                    b.HasKey("Id");

                    b.ToTable("Aviokompanija");
                });

            modelBuilder.Entity("PUSGSProjekat.DTO.Destinacija", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("AviokompanijaId");

                    b.Property<string>("DestinacijaVozila");

                    b.HasKey("Id");

                    b.HasIndex("AviokompanijaId");

                    b.ToTable("Destinacija");
                });

            modelBuilder.Entity("PUSGSProjekat.DTO.Let", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("BrojPresjedanja");

                    b.Property<float>("CijenaKarte");

                    b.Property<DateTime>("DatumVrijemeDolaska");

                    b.Property<DateTime>("DatumVrijemePolaska");

                    b.Property<string>("DuzinaPutovanja");

                    b.Property<DateTime>("VrijemePutovanja");

                    b.HasKey("Id");

                    b.ToTable("Let");
                });

            modelBuilder.Entity("PUSGSProjekat.DTO.Lokacija", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("LokacijaVozila");

                    b.Property<int?>("RentACarId");

                    b.HasKey("Id");

                    b.HasIndex("RentACarId");

                    b.ToTable("Lokacija");
                });

            modelBuilder.Entity("PUSGSProjekat.DTO.LokacijePresjedanja", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("LetId");

                    b.Property<string>("Lokacija");

                    b.HasKey("Id");

                    b.HasIndex("LetId");

                    b.ToTable("LokacijePresjedanja");
                });

            modelBuilder.Entity("PUSGSProjekat.DTO.RentACar", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Adresa");

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

                    b.Property<int?>("RentACarId");

                    b.Property<string>("TipVozila");

                    b.HasKey("Id");

                    b.HasIndex("RentACarId");

                    b.ToTable("Vozilo");
                });

            modelBuilder.Entity("PUSGSProjekat.DTO.Destinacija", b =>
                {
                    b.HasOne("PUSGSProjekat.DTO.Aviokompanija")
                        .WithMany("Destinacije")
                        .HasForeignKey("AviokompanijaId");
                });

            modelBuilder.Entity("PUSGSProjekat.DTO.Lokacija", b =>
                {
                    b.HasOne("PUSGSProjekat.DTO.RentACar")
                        .WithMany("Lokacije")
                        .HasForeignKey("RentACarId");
                });

            modelBuilder.Entity("PUSGSProjekat.DTO.LokacijePresjedanja", b =>
                {
                    b.HasOne("PUSGSProjekat.DTO.Let")
                        .WithMany("LokacijePresjedanja")
                        .HasForeignKey("LetId");
                });

            modelBuilder.Entity("PUSGSProjekat.DTO.Vozilo", b =>
                {
                    b.HasOne("PUSGSProjekat.DTO.RentACar")
                        .WithMany("Vozila")
                        .HasForeignKey("RentACarId");
                });
#pragma warning restore 612, 618
        }
    }
}
