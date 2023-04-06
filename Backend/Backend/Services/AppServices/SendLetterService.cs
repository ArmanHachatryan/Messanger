using Backend.Models;
using Backend.Models.Tables;
using Backend.Services.IAppServices;
using System;

namespace Backend.Services.AppService
{
    public class SendLetterService : ISendLetterService
    {
        private readonly IPostgreDbContext _storage;
        private readonly IRandomService _randomService;
        public SendLetterService(IPostgreDbContext storage, IRandomService randomService) 
        {
            _storage = storage;
            _randomService = randomService;
        }

        public void SendLetter(AppData model)
        {

            AppData letter = new AppData()
            {
                Id = Guid.NewGuid(),
                Text = model.Text,
                Status = _randomService.GetRandom(),
                PhoneNumber = model.PhoneNumber,
                DateTime = DateTime.Now,
                Sender = model.Sender,
            };

            _storage.Data.Add(letter);
            _storage.Save();
        }
    }
}
