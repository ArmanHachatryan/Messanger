using Backend.Models.Tables;
using System;

namespace Backend.Services.IAppServices
{
    public interface ISendLetterService
    {
        void SendLetter(AppData model);

    }
}
