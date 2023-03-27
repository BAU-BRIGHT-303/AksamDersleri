using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Azure;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TechSane.Web.Models.Domain;
using TechSane.Web.Models.ViewModels;
using TechSane.Web.Repositories;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TechSane.Web.Controllers
{
    [Authorize(Roles = "Admin")]
    public class AdminCategoriesController : Controller
    {
        private readonly ICategoryInterface categoriesInterface;

        public AdminCategoriesController(ICategoryInterface categoriesInterface)
        {
            this.categoriesInterface = categoriesInterface;
        }

        [HttpGet]

        public IActionResult Add()
        {
            return View();
        }

        [HttpPost]
        [ActionName("Add")]
        public async Task<IActionResult> Add(AddCategoryRequest addCategoryRequest)
        {
            var category = new Category
            {
                Name = addCategoryRequest.Name,
                DisplayName = addCategoryRequest.DisplayName
            };

            await categoriesInterface.AddAsync(category);
            return RedirectToAction("List");
        }

        [HttpGet]
        public async Task<IActionResult> List()
        {
            var categories = await categoriesInterface.GetAllAsync();
            return View(categories);
        }

        [HttpGet]
        public async Task<IActionResult> Edit(Guid id)
        {
            var category = await categoriesInterface.GetAsync(id);

            if (category != null)
            {
                var editCategoryReq = new EditCategoryRequest
                {
                    Id = category.Id,
                    Name = category.Name,
                    DisplayName = category.DisplayName
                };
                return View(editCategoryReq);
            }

            return View(null);
        }

        [HttpPost]
        public async Task<IActionResult> Edit(EditCategoryRequest editCategoryRequest)
        {
            var category = new Category
            {
                Id = editCategoryRequest.Id,
                Name = editCategoryRequest.Name,
                DisplayName = editCategoryRequest.DisplayName
            };


            var updatedCategory = await categoriesInterface.UpdateAsync(category);
            if (updatedCategory != null)
            {
                return RedirectToAction("List");
            }
            else
            {
            }

            return RedirectToAction("Edit", new { id = editCategoryRequest.Id });
        }

        [HttpPost]
        public async Task<IActionResult> Delete(EditCategoryRequest editCategoryRequest)
        {

            var deletedCategory = await categoriesInterface.DeleteAsync(editCategoryRequest.Id);
            if (deletedCategory != null)
            {
                return RedirectToAction("List");
            }
            return RedirectToAction("Edit", new { id = editCategoryRequest.Id });
        }
    }
}

