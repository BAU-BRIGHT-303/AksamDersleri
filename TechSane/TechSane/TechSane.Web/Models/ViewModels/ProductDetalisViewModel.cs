using System;
using Microsoft.AspNetCore.Mvc.Rendering;
using TechSane.Web.Models.Domain;

namespace TechSane.Web.Models.ViewModels
{
    public class ProductDetalisViewModel
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Desc { get; set; }
        public string ImageUrl { get; set; }
        public string UrlHandle { get; set; }
        public string Manufacturer { get; set; }
        public ICollection<Category> Categories { get; set; }
    }
}

