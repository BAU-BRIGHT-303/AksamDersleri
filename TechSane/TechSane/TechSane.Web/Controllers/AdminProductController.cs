using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Azure;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using TechSane.Web.Data;
using TechSane.Web.Models.Domain;
using TechSane.Web.Models.ViewModels;
using TechSane.Web.Repositories;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TechSane.Web.Controllers
{
    [Authorize(Roles = "Admin")]
    public class AdminProductController : Controller
    {
        private readonly ICategoryInterface categoryInterface;
        private readonly IProductInterface productInterface;


        public AdminProductController(ICategoryInterface categoryInterface, IProductInterface productInterface)
        {
            this.categoryInterface = categoryInterface;
            this.productInterface = productInterface;

        }


        [HttpGet]
        public async Task<IActionResult> Add()
        {
            var categories = await categoryInterface.GetAllAsync();

            var model = new AddProductRequest
            {
                Categories = categories.Select(x => new SelectListItem
                {
                    Text = x.Name,
                    Value = x.Id.ToString()
                })
            };

            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> Add(AddProductRequest addProductRequest)
        {
            var product = new Product
            {
                Title = addProductRequest.Title,
                Desc = addProductRequest.Desc,
                ImageUrl = addProductRequest.ImageUrl,
                Manufacturer = addProductRequest.Manufacturer,
                UrlHandle = addProductRequest.UrlHandle,
            };

            var selectedCategories = new List<Category>();
            foreach (var selectedCategoryId in addProductRequest.SelectedCategories)
            {
                var selectedCategoryIdAsGuid = Guid.Parse(selectedCategoryId);
                var existingCategory = await categoryInterface.GetAsync(selectedCategoryIdAsGuid);

                if (existingCategory != null)
                {
                    selectedCategories.Add(existingCategory);
                }
            }
            product.Categories = selectedCategories;

            await productInterface.AddAsync(product);

            return RedirectToAction("Add");
        }

        [HttpGet]
        public async Task<IActionResult> List()
        {
            var product = await productInterface.GetAllAsync();
            return View(product);
        }

        public async Task<IActionResult> Edit(Guid id)
        {
            var product = await productInterface.GetAsync(id);
            var categoriesFromDomainModel = await categoryInterface.GetAllAsync();

            if (product != null)
            {
                var model = new EditProductRequest
                {
                    Id = product.Id,
                    Desc = product.Desc,
                    ImageUrl = product.ImageUrl,
                    Manufacturer = product.Manufacturer,
                    Title = product.Title,
                    UrlHandle = product.UrlHandle,
                    Categories = categoriesFromDomainModel.Select(x => new SelectListItem
                    {
                        Text = x.Name,
                        Value = x.Id.ToString()
                    }),
                    SelectedCategories = product.Categories.Select(x => x.Id.ToString()).ToArray()
                };
                return View(model);
            }

            return View(null);
        }

        [HttpPost]
        public async Task<IActionResult> Edit(EditProductRequest editProductRequest)
        {
            var productDomainModel = new Product
            {
                Id = editProductRequest.Id,
                Desc = editProductRequest.Desc,
                ImageUrl = editProductRequest.ImageUrl,
                Manufacturer = editProductRequest.Manufacturer,
                Title = editProductRequest.Title,
                UrlHandle = editProductRequest.UrlHandle
            };

            var selectedCategories = new List<Category>();
            foreach (var selectedCategory in editProductRequest.SelectedCategories)
            {
                if (Guid.TryParse(selectedCategory, out var category))
                {
                    var foundCategory = await categoryInterface.GetAsync(category);
                    if (foundCategory != null)
                    {
                        selectedCategories.Add(foundCategory);
                    }
                }
            }
            productDomainModel.Categories = selectedCategories;
            var updatedProduct = await productInterface.UpdateAsync(productDomainModel);

            if (updatedProduct != null)
            {
                return RedirectToAction("List");
            }
            return RedirectToAction("Edit");
        }

        [HttpPost]
        public async Task<IActionResult> Delete(EditProductRequest editProductRequest)
        {
            var deletedProduct = await productInterface.DeleteAsync(editProductRequest.Id);
            if (deletedProduct != null)
            {
                return RedirectToAction("List");
            }
            return RedirectToAction("Edit", new { id = editProductRequest.Id });
        }


    }



}

