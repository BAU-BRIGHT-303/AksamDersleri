using System;
using Azure;
using TechSane.Web.Models.Domain;

namespace TechSane.Web.Repositories
{
    public interface ICategoryInterface
    {
        Task<IEnumerable<Category>> GetAllAsync();
        Task<Category?> GetAsync(Guid id);
        Task<Category?> AddAsync(Category category);
        Task<Category?> UpdateAsync(Category category);
        Task<Category?> DeleteAsync(Guid id);
    }
}

