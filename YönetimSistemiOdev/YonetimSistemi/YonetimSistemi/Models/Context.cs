using Microsoft.EntityFrameworkCore;

namespace YonetimSistemi.Models
{
    public class Context: DbContext
    {

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=DESKTOP-LE3E201;Database=BirimDb;Trusted_Connection=True;");
        }

        public DbSet<Birim> Birims { get; set; }
        public DbSet<Personel> Personels { get; set; }
        public DbSet<Admin> Admins { get; set; }
    }
}
