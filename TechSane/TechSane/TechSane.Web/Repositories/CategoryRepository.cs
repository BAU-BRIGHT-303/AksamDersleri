using System;
using Azure;
using Microsoft.EntityFrameworkCore;
using TechSane.Web.Data;
using TechSane.Web.Models.Domain;

namespace TechSane.Web.Repositories
{
    public class CategoryRepository : ICategoryInterface
    {
        private readonly TechSaneDbContext techSaneDbContext;

        public CategoryRepository(TechSaneDbContext techSaneDbContext)
        {
            this.techSaneDbContext = techSaneDbContext;
        }

        public async Task<Category?> AddAsync(Category category)
        {
            await techSaneDbContext.AddAsync(category);
            await techSaneDbContext.SaveChangesAsync();
            return category;
        }

        public async Task<Category?> DeleteAsync(Guid id)
        {
            var existingCategory = await techSaneDbContext.Categories.FindAsync(id);
            if (existingCategory != null)
            {
                techSaneDbContext.Remove(existingCategory);
                await techSaneDbContext.SaveChangesAsync();
                return existingCategory;
            }
            return null;
        }

        public async Task<IEnumerable<Category>> GetAllAsync()
        {
            return await techSaneDbContext.Categories.ToListAsync();
        }

        public async Task<Category?> GetAsync(Guid id)
        {
            return await techSaneDbContext.Categories.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Category?> UpdateAsync(Category category)
        {
            var existingCategory = await techSaneDbContext.Categories.FindAsync(category.Id);
            if (existingCategory != null)
            {
                existingCategory.Name = category.Name;
                existingCategory.DisplayName = category.DisplayName;
                await techSaneDbContext.SaveChangesAsync();
                return existingCategory;
            }
            return null;
        }
    }
}

