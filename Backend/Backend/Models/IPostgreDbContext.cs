using Backend.Models.Tables;
using Microsoft.EntityFrameworkCore;

namespace Backend.Models
{
    public interface IPostgreDbContext
    {
        DbSet<AppData> Data { get; set; }

        DbSet<Status> StatusList { get; set; }

        void Save();
    }
}
