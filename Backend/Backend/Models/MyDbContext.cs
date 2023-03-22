using Backend.Models;
using Microsoft.EntityFrameworkCore;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class MyDbContext : DbContext, IMyDbContext
    {
        public DbSet<MyModel> AppData { get; set; }

        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
            //Database.EnsureDeleted();
            //Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // configure your model here
        }

        public void Save()
        {
            SaveChanges();
        }
    }


}
