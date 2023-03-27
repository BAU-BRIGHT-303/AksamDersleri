using System;
using TechSane.Web.Models.Domain;

namespace TechSane.Web.Repositories
{
    public interface IProductInterface
    {
        Task<IEnumerable<Product>> GetAllAsync();
        Task<Product?> GetAsync(Guid id);
        Task<Product?> GetByIdUrlHandleAsync(string urlHandle);
        Task<Product?> AddAsync(Product product);
        Task<Product?> UpdateAsync(Product product);
        Task<Product?> DeleteAsync(Guid id);
    }
}

