using Microsoft.EntityFrameworkCore;

namespace Backend.Models
{
    public interface IMyDbContext
    {
        DbSet<MyModel> MyModels { get; set; }

        void Save();
    }
}
