using System;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace TechSane.Web.Models.ViewModels
{
    public class AddProductRequest
    {
        public string Title { get; set; }
        public string Desc { get; set; }
        public string ImageUrl { get; set; }
        public string UrlHandle { get; set; }
        public string Manufacturer { get; set; }
        public IEnumerable<SelectListItem> Categories { get; set; }
        public string[] SelectedCategories { get; set; }
    }
}

