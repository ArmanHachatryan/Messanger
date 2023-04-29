using Backend.Models;
using Backend.Services.IAppServices;
using System;
using System.Linq;

namespace Backend.Services.AppServices
{
    public class RandomService : IRandomService
    {
        private const int first_value = 1;
        private const int second_value = 4;
        private readonly IPostgreDbContext _storage;
        private readonly Random _rnd;

        public RandomService(IPostgreDbContext storage) { 
            _storage = storage;
            _rnd = new Random();
        }
        public string GetRandom()
        {
            int value = _rnd.Next(first_value, second_value);
            var currentStatus = _storage.StatusList.FirstOrDefault(x => x.Id == value);
            return currentStatus.Text;
        }
    }
}
