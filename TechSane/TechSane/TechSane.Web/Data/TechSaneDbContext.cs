using System;
using Microsoft.EntityFrameworkCore;
using TechSane.Web.Models.Domain;

namespace TechSane.Web.Data
{
    public class TechSaneDbContext : DbContext
    {
        public TechSaneDbContext(DbContextOptions<TechSaneDbContext> options) : base(options)
        {
        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}

