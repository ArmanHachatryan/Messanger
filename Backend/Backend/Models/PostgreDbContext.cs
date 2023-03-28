using Backend.Models;
using Backend.Models.Tables;
using Microsoft.EntityFrameworkCore;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class PostgreDbContext : DbContext, IPostgreDbContext
    {
        public DbSet<AppData> Data { get; set; }

        public DbSet<Status> StatusList { get; set; }

        public PostgreDbContext(DbContextOptions<PostgreDbContext> options) : base(options)
        {
            //Database.EnsureDeleted();
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // configure your model here
            modelBuilder.Entity<Status>().HasData(
                new Status[]
                {
                    new Status { Id = 1, Text = "Sended" },
                    new Status { Id = 2, Text = "Delivered"},
                    new Status { Id = 3, Text = "Error"},
                });
        }

        public void Save()
        {
            SaveChanges();
        }
    }


}
