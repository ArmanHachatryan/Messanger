using Microsoft.EntityFrameworkCore;

namespace Backend.Models
{
    public interface IMyDbContext
    {
        DbSet<MyModel> AppData { get; set; }

        void Save();
    }
}
