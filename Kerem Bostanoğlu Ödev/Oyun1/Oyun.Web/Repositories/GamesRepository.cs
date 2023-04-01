using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Oyun.Web.Data;
using Oyun.Web.Models.Domain;

namespace Oyun.Web.Repositories
{
    public class GamesRepository : IGamesRepository
    {
        private readonly OyunDbContext oyunDbContext;

        public GamesRepository(OyunDbContext oyunDbContext)
        {
            this.oyunDbContext = oyunDbContext;
        }
        public async Task<Game?> AddAsync(Game game)
        {
            await oyunDbContext.AddAsync(game);
            await oyunDbContext.SaveChangesAsync();
            return game;
        }

        public async Task<Game?> DeleteAsync(Guid id)
        {
            var existingGame = await oyunDbContext.Games.FindAsync(id);
            if (existingGame != null)
            {
                oyunDbContext.Games.Remove(existingGame);
                await oyunDbContext.SaveChangesAsync();
                return existingGame;
            }
            return null;
        }

        public async Task<IEnumerable<Game>> GetAllAsync()
        {
            return await oyunDbContext.Games.ToListAsync();

        }

        public async Task<Game?> GetAsync(Guid id)
        {
            return await oyunDbContext.Games.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Game?> GetByIdUrlHandleAsync(string urlHandle)
        {
            return await oyunDbContext.Games.FirstOrDefaultAsync(x => x.UrlHandle == urlHandle);
        }

        public async Task<Game?> UpdateAsync(Game game)
        {
            var existingGame = await oyunDbContext.Games.FirstOrDefaultAsync(x => x.Id == game.Id);
            if (existingGame != null)
            {
                existingGame.Id = game.Id;
                existingGame.Heading = game.Heading;
                existingGame.Title = game.Title;
                existingGame.Description = game.Description;
                existingGame.FeaturedImageUrl = game.FeaturedImageUrl;
                existingGame.UrlHandle = game.UrlHandle;
                await oyunDbContext.SaveChangesAsync();
                return existingGame;
            }
            return null;
        }
    }
}
