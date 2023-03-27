using System;
using TechSane.Web.Models.Domain;

namespace TechSane.Web.Models.ViewModels
{
    public class HomeViewModel
    {
        public IEnumerable<Product> Products { get; set; }
        public IEnumerable<Category> Categories { get; set; }
    }
}

