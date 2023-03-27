using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using TechSane.Web.Data;
using TechSane.Web.Models.Domain;

namespace TechSane.Web.Repositories
{
    public class ProductRepository : IProductInterface
    {
        private readonly TechSaneDbContext techSaneDbContext;

        public ProductRepository(TechSaneDbContext techSaneDbContext)
        {
            this.techSaneDbContext = techSaneDbContext;
        }

        public async Task<Product?> AddAsync(Product product)
        {
            await techSaneDbContext.AddAsync(product);
            await techSaneDbContext.SaveChangesAsync();
            return product;
        }

        public async Task<Product?> DeleteAsync(Guid id)
        {
            var existingProduct = await techSaneDbContext.Products.FindAsync(id);
            if (existingProduct != null)
            {
                techSaneDbContext.Products.Remove(existingProduct);
                await techSaneDbContext.SaveChangesAsync();
                return existingProduct;
            }
            return null;
        }

        public async Task<IEnumerable<Product>> GetAllAsync()
        {
            return await techSaneDbContext.Products.Include(x => x.Categories).ToListAsync();
        }

        public async Task<Product?> GetAsync(Guid id)
        {
            return await techSaneDbContext.Products.Include(x => x.Categories).FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Product?> GetByIdUrlHandleAsync(string urlHandle)
        {
            return await techSaneDbContext.Products.Include(x => x.Categories).FirstOrDefaultAsync(x => x.UrlHandle == urlHandle);
        }

        public async Task<Product?> UpdateAsync(Product product)
        {
            var existingProduct = await techSaneDbContext.Products.Include(x => x.Categories).FirstOrDefaultAsync(x => x.Id == product.Id);
            if (existingProduct != null)
            {
                existingProduct.Id = product.Id;
                existingProduct.Title = product.Title;
                existingProduct.Desc = product.Desc;
                existingProduct.ImageUrl = product.ImageUrl;
                existingProduct.Manufacturer = product.Manufacturer;
                existingProduct.UrlHandle = product.UrlHandle;
                existingProduct.Categories = product.Categories;
                await techSaneDbContext.SaveChangesAsync();
                return existingProduct;
            }
            return null;
        }
    }
}

