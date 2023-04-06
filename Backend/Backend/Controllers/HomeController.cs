using Backend.Models;
using Backend.Models.Tables;
using Backend.Services.IAppServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : Controller
    {
        private readonly IPostgreDbContext _storage;
        private readonly ISendLetterService _sendLetter;
        public HomeController(IPostgreDbContext storage, ISendLetterService sendLetter)
        {
            _storage = storage;
            _sendLetter = sendLetter;
        }

        [HttpGet]
        public IActionResult GetData()
        {

            return Json(_storage.Data.ToList());
        }

        [HttpPost]
        public IActionResult PostData([FromBody] AppData model)
        {
            _sendLetter.SendLetter(model);
            return Ok();
        }
        

    }
}
