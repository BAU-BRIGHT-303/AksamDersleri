using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TechSane.Web.Data;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TechSane.Web.Controllers
{
    public class ListingCategoriesController : Controller
    {
        private readonly TechSaneDbContext techSaneDbContext;

        public ListingCategoriesController(TechSaneDbContext techSaneDbContext)
        {
            this.techSaneDbContext = techSaneDbContext;
        }
        public IActionResult ListApple()
        {
            var list = techSaneDbContext.Products.Where(x => x.Manufacturer == "Apple").ToList();
            return View(list);
        }
        public IActionResult ListSony()
        {
            var list = techSaneDbContext.Products.Where(x => x.Manufacturer == "Sony").ToList();
            return View(list);
        }
        public IActionResult ListSamsung()
        {
            var list = techSaneDbContext.Products.Where(x => x.Manufacturer == "Samsung").ToList();
            return View(list);
        }
    }
}

