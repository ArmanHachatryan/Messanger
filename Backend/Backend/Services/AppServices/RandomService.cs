using Backend.Services.IAppServices;
using System;

namespace Backend.Services.AppServices
{
    public class RandomService : IRandomService
    {
        private const int first_value = 1;
        private const int second_value = 4;
        public int GetRandom()
        {
            Random rnd = new Random();
            int value = rnd.Next(first_value, second_value);
            return value;
        }
    }
}
