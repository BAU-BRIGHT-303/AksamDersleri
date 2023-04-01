using Oyun.Web.Models.Domain;

namespace Oyun.Web.Repositories
{
    public interface IGamesRepository
    {
        Task<IEnumerable<Game>> GetAllAsync();
        Task<Game?> GetAsync(Guid id);
        Task<Game?> GetByIdUrlHandleAsync(string urlHandle);
        Task<Game?> AddAsync(Game game);
        Task<Game?> UpdateAsync(Game game);
        Task<Game?> DeleteAsync(Guid id);
    }
}
