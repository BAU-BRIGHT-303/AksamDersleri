using System;
namespace TechSane.Web.Models.ViewModels
{
    public class EditCategoryRequest
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string DisplayName { get; set; }
    }
}

