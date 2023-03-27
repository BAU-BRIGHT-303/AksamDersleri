﻿using System;
namespace TechSane.Web.Models.Domain
{
    public class Product
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

