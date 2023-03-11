using Azure;
using Microsoft.AspNetCore.Mvc;
using News.Web.Data;
using News.Web.Models.Domain;
using News.Web.Models.ViewModels;

namespace News.Web.Controllers
{
    public class AdminNewsController : Controller
    {
        private readonly NewsDbContext newsDbContext;

        public AdminNewsController(NewsDbContext newsDbContext)
        {
            this.newsDbContext = newsDbContext;
        }
        [HttpGet]
        public IActionResult Add()
        {
            return View();
        }

        [HttpPost]
        [ActionName("Add")]
        public IActionResult Add(AddNewsRequest addNewsRequest) 
        {
            var news = new NewsPost
            {
                Title = addNewsRequest.Title,
                Image = addNewsRequest.Image,
                Author = addNewsRequest.Author,
                Description = addNewsRequest.Description,

            };
            newsDbContext.Add(news);
            newsDbContext.SaveChanges();
            return View("Add");
         
        }

        [HttpGet]
        public IActionResult List() {
            var news = newsDbContext.NewsPosts.ToList();
            return View(news);
        }
        

    }
}
