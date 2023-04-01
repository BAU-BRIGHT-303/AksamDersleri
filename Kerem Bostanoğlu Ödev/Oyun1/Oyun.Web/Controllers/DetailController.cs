using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Oyun.Web.Models.ViewModels;
using Oyun.Web.Repositories;

namespace Oyun.Web.Controllers
{
    public class DetailController : Controller
    {
        private readonly IGamesRepository gamesRepository;
        private readonly SignInManager<IdentityUser> signInManager;
        private readonly UserManager<IdentityUser> userManager;

        public DetailController(IGamesRepository gamesRepository,
            SignInManager<IdentityUser> signInManager, UserManager<IdentityUser> userManager)
        {
            this.gamesRepository = gamesRepository;
            this.signInManager = signInManager;
            this.userManager = userManager;
        }
        [HttpGet]
        public async Task<IActionResult> Index(string urlHandle)
        {
            var game = await gamesRepository.GetByIdUrlHandleAsync(urlHandle);
            var gamesDetailsViewModel = new GamesDetailsViewModel();

            if (game != null)
            {
                gamesDetailsViewModel = new GamesDetailsViewModel
                {
                    Id = game.Id,
                    Title = game.Title,
                    Heading = game.Heading,
                    FeaturedImageUrl = game.FeaturedImageUrl,   
                    Description = game.Description,
                    UrlHandle = game.UrlHandle,
                };
            }

            return View(gamesDetailsViewModel);

        }
    }
}
