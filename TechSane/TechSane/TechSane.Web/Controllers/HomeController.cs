using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TechSane.Web.Models;
using TechSane.Web.Models.ViewModels;
using TechSane.Web.Repositories;

namespace TechSane.Web.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly IProductInterface productInterface;
    private readonly ICategoryInterface categoryInterface;

    public HomeController(ILogger<HomeController> logger, IProductInterface productInterface, ICategoryInterface categoryInterface)
    {
        _logger = logger;
        this.productInterface = productInterface;
        this.categoryInterface = categoryInterface;
    }

    public async Task<IActionResult> Index()
    {
        var product = await productInterface.GetAllAsync();
        var categories = await categoryInterface.GetAllAsync();
        var model = new HomeViewModel
        {
            Products = product,
            Categories = categories
        };
        return View(model);
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}

