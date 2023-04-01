using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Oyun.Web.Data;
using Oyun.Web.Models.Domain;
using Oyun.Web.Models.ViewModels;
using Oyun.Web.Repositories;



namespace Oyun.Web.Controllers
{
    [Authorize(Roles = "Admin")]
    public class AdminGamesController : Controller
    {
        private readonly IGamesRepository gamesRepository;
        private readonly OyunDbContext oyunDbContext;

        public AdminGamesController(IGamesRepository gamesRepository, OyunDbContext oyunDbContext)
        {
            this.gamesRepository = gamesRepository;
            this.oyunDbContext = oyunDbContext;
        }


        [HttpGet]
        public async Task<IActionResult> Add()
        {
            var model = new AddGamesRequest { };

            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> Add(AddGamesRequest addGamesRequest)
        {
            var game = new Game
            {
                Heading = addGamesRequest.Heading,
                FeaturedImageUrl = addGamesRequest.FeaturedImageUrl,
                Description = addGamesRequest.Description,
                Title = addGamesRequest.Title,
                UrlHandle = addGamesRequest.UrlHandle,
            };



            await gamesRepository.AddAsync(game);

            return RedirectToAction("Add");
        }

        [HttpGet]
        public async Task<IActionResult> List()
        {
            var game = await gamesRepository.GetAllAsync();
            return View(game);
        }

        public async Task<IActionResult> Edit(Guid id)
        {
            var game = await gamesRepository.GetAsync(id);

            if (game != null)
            {
                var model = new EditGamesRequest
                {
                    Id = game.Id,
                    Heading = game.Heading,
                    FeaturedImageUrl = game.FeaturedImageUrl,
                    Description = game.Description,
                    Title = game.Title,
                    UrlHandle = game.UrlHandle,


                };
                return View(model);
            }

            return View(null);
        }

        [HttpPost]
        public async Task<IActionResult> Edit(EditGamesRequest editGamesRequest)
        {
            var game = new Game
            {
                Id = editGamesRequest.Id,
                Heading = editGamesRequest.Heading,
                FeaturedImageUrl = editGamesRequest.FeaturedImageUrl,
                Description = editGamesRequest.Description,
                Title = editGamesRequest.Title,
                UrlHandle = editGamesRequest.UrlHandle,
            };


            var updatedGames = await gamesRepository.UpdateAsync(game);

            if (updatedGames != null)
            {
                return RedirectToAction("List");
            }
            return RedirectToAction("Edit");
        }


        public async Task<IActionResult> Search(string SearchString)
        {
            ViewData["CurrentFilter"] = SearchString;
            var games = from game in oyunDbContext.Games select game;
            if (!String.IsNullOrEmpty(SearchString))
            {
                games = games.Where(g => g.Title.Contains(SearchString));
            }
            return View(games.ToList());
        }

        [HttpPost]
        public async Task<IActionResult> Delete(EditGamesRequest editGamesRequest)
        {
            var deletedGames = await gamesRepository.DeleteAsync(editGamesRequest.Id);
            if (deletedGames != null)
            {
                return RedirectToAction("List");
            }
            return RedirectToAction("Edit", new { id = editGamesRequest.Id });
        }


    }



}

