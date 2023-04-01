using Microsoft.EntityFrameworkCore;
using Oyun.Web.Models.Domain;

namespace Oyun.Web.Data

{
    public class OyunDbContext : DbContext
    {
        public OyunDbContext(DbContextOptions<OyunDbContext> options) : base(options)
        {

        }

        public DbSet<Game>Games { get; set; }
    }
}
