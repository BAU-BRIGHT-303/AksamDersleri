using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using TechSane.Web.Models.ViewModels;
using TechSane.Web.Repositories;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TechSane.Web.Controllers
{
    public class ProductsController : Controller
    {
        private readonly IProductInterface productInterface;
        private readonly ICategoryInterface categoryInterface;
        private readonly SignInManager<IdentityUser> signInManager;
        private readonly UserManager<IdentityUser> userManager;

        public ProductsController(IProductInterface productInterface, ICategoryInterface categoryInterface, SignInManager<IdentityUser> signInManager, UserManager<IdentityUser> userManager)
        {
            this.productInterface = productInterface;
            this.categoryInterface = categoryInterface;
            this.signInManager = signInManager;
            this.userManager = userManager;
        }
        [HttpGet]
        public async Task<IActionResult> Index(string urlHandle)
        {
            var product = await productInterface.GetByIdUrlHandleAsync(urlHandle);
            var productDetailsViewModel = new ProductDetalisViewModel();

            if (product != null)
            {
                productDetailsViewModel = new ProductDetalisViewModel
                {
                    Id = product.Id,
                    Desc = product.Desc,
                    ImageUrl = product.ImageUrl,
                    Manufacturer = product.Manufacturer,
                    Title = product.Title,
                    UrlHandle = product.UrlHandle,
                    Categories = product.Categories
                };
            }

            return View(productDetailsViewModel);

        }

    }
}

