using Microsoft.AspNetCore.Mvc;
using Oyun.Web.Models;
using Oyun.Web.Models.ViewModels;
using Oyun.Web.Repositories;
using System.Diagnostics;

namespace Oyun.Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IGamesRepository gamesRepository;

        public HomeController(ILogger<HomeController> logger, IGamesRepository gamesRepository)
        {
            _logger = logger;
            this.gamesRepository = gamesRepository;
        }

        public async Task<IActionResult> Index()
        {
            var game = await gamesRepository.GetAllAsync();
            var model = new HomeViewModel
            {
                Games = game,
                
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
}