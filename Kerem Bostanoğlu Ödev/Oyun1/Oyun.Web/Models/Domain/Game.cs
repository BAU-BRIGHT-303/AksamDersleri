namespace Oyun.Web.Models.Domain
{
    public class Game
    {
        public Guid Id { get; set; }
        public string Heading { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string FeaturedImageUrl { get; set; }
        public string UrlHandle { get; set; }
    }
}
