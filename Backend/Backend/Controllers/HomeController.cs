using Backend.Models;
using Backend.Models.Tables;
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
        private readonly IPostgreDbContext _context;
        //Убрать
        private Random _random;

        public HomeController(IPostgreDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetData()
        {

            return Json(_context.Data.ToList());
        }

        [HttpPost]
        public IActionResult PostData([FromBody] AppData model)
        {

            //уБРАТЬ В СЕРВИС
            _random = new Random();

            AppData data = new AppData()
            {
                Id = Guid.NewGuid(),
                Text = model.Text,
                Status = _random.Next(1, 4),
                PhoneNumber = model.PhoneNumber,
                DateTime = DateTime.Now,
                Sender = model.Sender,
            };

            _context.Data.Add(data);
            _context.Save();
            return Ok();
        }
        

    }
}
