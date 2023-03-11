using Microsoft.EntityFrameworkCore;
using News.Web.Models.Domain;

namespace News.Web.Data
{
    public class NewsDbContext : DbContext
    {
        public NewsDbContext(DbContextOptions options ) : base(options) { }

        public DbSet<NewsPost> NewsPosts { get; set; }
    }

}
