using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Console;
using PUSGSProjekat.DTO;
using PUSGSProjekat.Entities;
using PUSGSProjekat.Repositories;
using System;
using System.Threading;
using System.Threading.Tasks;
namespace PUSGSProjekat
{
    public class AppDbContext : IdentityDbContext<Korisnik, Role, int, IdentityUserClaim<int>,
        UserRole, IdentityUserLogin<int>, IdentityRoleClaim<int>, IdentityUserToken<int>>
    {
        [Obsolete]
        public static readonly LoggerFactory LoggerFactory
            = new LoggerFactory(new[] {
                new ConsoleLoggerProvider((category, level)
                    // filtering what is logged
                    => true/*category == DbLoggerCategory.Database.Command.Name
                    && level == LogLevel.Information*/, true)
            });

        public DbSet<Aviokompanija> Aviokompanije { get; set; }
        public DbSet<RentACar> RentACar { get; set; }
        public DbSet<Let> Letovi { get; set; }
        public DbSet<Vozilo> Vozila { get; set; }
        public DbSet<Korisnik> Korisnici { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public DbSet<Cjenovnik> Cjenovnik { get; set; }
        public DbSet<CjenovnikVozilo> CjenovnikVozilo { get; set; }
        public DbSet<KorisnikVozilo> KorisnikVozilo { get; set; }
        public DbSet<Rezervacije> Rezervacije { get; set; }
        public DbSet<FlightSeat> Seats { get; set; }
        public DbSet<Friend> Friends { get; set; }
        public DbSet<Invitation> Invitations { get; set; }
        public DbSet<UserData> UserData { get; set; }
        public IConfiguration Configuration { get; }

        public AppDbContext(IConfiguration configuration)
            // C# 7.0 in a Nutshell (p. 104)
            // If a constructor in a subclass omits the base keyword, the base
            // type’s parameterless constructor is implicitly called.
            : base()
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //PM> Install-Package Microsoft.EntityFrameworkCore -Version 2.2.3
            //PM> Install-Package Microsoft.EntityFrameworkCore.SqlServer -Version 2.2.3
            //PM> Install-Package Microsoft.Extensions.Logging.Console -Version 2.2.0

            optionsBuilder.UseSqlServer(Configuration.GetConnectionString("Database"))
                .UseLoggerFactory(LoggerFactory) // Warning: Do not create a new ILoggerFactory instance each time
                .EnableSensitiveDataLogging(true)
                // Entity Framework - Loading Related Data - Eager loading (p. 233)
                // Change the behavior when an include operator is ignored to either throw or do nothing
                .ConfigureWarnings(warnings => warnings.Throw(CoreEventId.IncludeIgnoredWarning))
                // Throw an exception for client evaluation
                .ConfigureWarnings(warnings => warnings.Throw(RelationalEventId.QueryClientEvaluationWarning));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            var internalBuilder = modelBuilder.GetInfrastructure<InternalModelBuilder>();

            foreach (var entity in modelBuilder.Model.GetEntityTypes())
            {
                internalBuilder
                    .Entity(entity.Name, ConfigurationSource.Convention)
                    .Relational(ConfigurationSource.Convention)
                    .ToTable(entity.ClrType.Name);
            }

            modelBuilder.Entity<UserRole>(userRole =>
            {
                userRole.HasKey(ur => new { ur.UserId, ur.RoleId });

                userRole.HasOne(ur => ur.Role)
                    .WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.RoleId)
                    .IsRequired();

                userRole.HasOne(ur => ur.Korisnik)
                    .WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.UserId)
                    .IsRequired();
            });
        }
        public void Commit()
        {
            base.SaveChanges();
        }

        public async Task<int> CommitAsync(CancellationToken cancellationToken = default)
        {
            return await base.SaveChangesAsync(cancellationToken);
        }
    }
}
